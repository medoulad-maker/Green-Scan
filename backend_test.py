#!/usr/bin/env python3
"""
Backend API Testing for Food Scanner Application
Tests all backend endpoints with various scenarios
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('EXPO_PUBLIC_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("ERROR: Could not find EXPO_PUBLIC_BACKEND_URL in frontend/.env")
    sys.exit(1)

API_BASE = f"{BACKEND_URL}/api"
print(f"Testing backend at: {API_BASE}")

def test_health_endpoint():
    """Test the health check endpoint"""
    print("\n=== Testing Health Endpoint ===")
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and "Food Scanner API" in data["message"]:
                print("✅ Health endpoint working correctly")
                return True
            else:
                print("❌ Health endpoint returned unexpected response")
                return False
        else:
            print(f"❌ Health endpoint failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Health endpoint error: {str(e)}")
        return False

def test_scan_vegetarian_product():
    """Test scanning a known vegetarian product (Nutella)"""
    print("\n=== Testing Vegetarian Product Scan (Nutella) ===")
    try:
        payload = {"barcode": "3017620422003"}
        response = requests.post(
            f"{API_BASE}/scan-product", 
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=15
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("found") == True and data.get("status") == "vegetarian":
                print("✅ Vegetarian product scan working correctly")
                return True
            else:
                print(f"❌ Unexpected response: found={data.get('found')}, status={data.get('status')}")
                return False
        else:
            print(f"❌ Vegetarian product scan failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Vegetarian product scan error: {str(e)}")
        return False

def test_scan_meat_product():
    """Test scanning a potential meat product"""
    print("\n=== Testing Meat Product Scan ===")
    try:
        payload = {"barcode": "3770016162036"}
        response = requests.post(
            f"{API_BASE}/scan-product", 
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=15
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("found") == True:
                print(f"✅ Meat product scan completed - Status: {data.get('status')}")
                return True
            elif data.get("found") == False:
                print("ℹ️ Product not found in database (acceptable)")
                return True
            else:
                print(f"❌ Unexpected response format")
                return False
        else:
            print(f"❌ Meat product scan failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Meat product scan error: {str(e)}")
        return False

def test_scan_invalid_barcode():
    """Test scanning an invalid/unknown barcode"""
    print("\n=== Testing Invalid Barcode ===")
    try:
        payload = {"barcode": "0000000000000"}
        response = requests.post(
            f"{API_BASE}/scan-product", 
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=15
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("found") == False or data.get("status") == "unknown":
                print("✅ Invalid barcode handled correctly")
                return True
            else:
                print(f"❌ Invalid barcode should return found=False or status=unknown")
                return False
        else:
            print(f"❌ Invalid barcode test failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Invalid barcode test error: {str(e)}")
        return False

def test_missing_barcode():
    """Test error handling for missing barcode"""
    print("\n=== Testing Missing Barcode Error Handling ===")
    try:
        payload = {}
        response = requests.post(
            f"{API_BASE}/scan-product", 
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # FastAPI validation error
            print("✅ Missing barcode error handling working correctly")
            return True
        else:
            print(f"❌ Expected 422 validation error, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Missing barcode test error: {str(e)}")
        return False

def test_malformed_request():
    """Test error handling for malformed request"""
    print("\n=== Testing Malformed Request Error Handling ===")
    try:
        # Send invalid JSON
        response = requests.post(
            f"{API_BASE}/scan-product", 
            data="invalid json",
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code in [400, 422]:  # Bad request or validation error
            print("✅ Malformed request error handling working correctly")
            return True
        else:
            print(f"❌ Expected 400/422 error, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Malformed request test error: {str(e)}")
        return False

def run_all_tests():
    """Run all backend tests and return summary"""
    print(f"Starting Food Scanner Backend API Tests at {datetime.now()}")
    print(f"Backend URL: {API_BASE}")
    
    tests = [
        ("Health Endpoint", test_health_endpoint),
        ("Vegetarian Product Scan", test_scan_vegetarian_product),
        ("Meat Product Scan", test_scan_meat_product),
        ("Invalid Barcode", test_scan_invalid_barcode),
        ("Missing Barcode Error", test_missing_barcode),
        ("Malformed Request Error", test_malformed_request)
    ]
    
    results = []
    passed = 0
    failed = 0
    
    for test_name, test_func in tests:
        try:
            result = test_func()
            results.append((test_name, result))
            if result:
                passed += 1
            else:
                failed += 1
        except Exception as e:
            print(f"❌ {test_name} crashed: {str(e)}")
            results.append((test_name, False))
            failed += 1
    
    print(f"\n{'='*50}")
    print(f"TEST SUMMARY")
    print(f"{'='*50}")
    print(f"Total Tests: {len(tests)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    print(f"\nDetailed Results:")
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"  {test_name}: {status}")
    
    return results, passed, failed

if __name__ == "__main__":
    results, passed, failed = run_all_tests()
    
    # Exit with error code if any tests failed
    if failed > 0:
        sys.exit(1)
    else:
        sys.exit(0)