from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime
import requests
import re


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ScanRequest(BaseModel):
    barcode: str

class ScanResponse(BaseModel):
    status: str  # "vegetarian" or "non-vegetarian"
    product_name: Optional[str] = None
    found: bool = True

# Keywords for non-vegetarian detection
MEAT_KEYWORDS = [
    # French
    'viande', 'poulet', 'boeuf', 'porc', 'poisson', 'bacon', 'jambon', 
    'saumon', 'thon', 'sardine', 'anchois', 'dinde', 'canard', 'agneau',
    'veau', 'lapin', 'gibier', 'chorizo', 'saucisse', 'merguez', 'pâté',
    'foie', 'rillettes', 'gélatine', 'collagène', 'bouillon de volaille',
    'bouillon de boeuf', 'bouillon de poisson', 'extrait de viande',
    'graisse animale', 'saindoux', 'lard', 'pancetta', 'prosciutto',
    # English
    'meat', 'chicken', 'beef', 'pork', 'fish', 'bacon', 'ham',
    'salmon', 'tuna', 'sardine', 'anchovy', 'turkey', 'duck', 'lamb',
    'veal', 'rabbit', 'game', 'chorizo', 'sausage', 'pate',
    'liver', 'gelatin', 'collagen', 'chicken broth',
    'beef broth', 'fish broth', 'meat extract',
    'animal fat', 'lard', 'pancetta', 'prosciutto'
]

ALCOHOL_KEYWORDS = [
    # French
    'alcool', 'éthanol', 'vin', 'bière', 'vodka', 'whisky', 'rhum',
    'gin', 'cognac', 'champagne', 'liqueur', 'spiritueux',
    # English
    'alcohol', 'ethanol', 'wine', 'beer', 'vodka', 'whiskey', 'rum',
    'gin', 'cognac', 'champagne', 'liquor', 'spirits'
]

def check_ingredients(ingredients_text: str) -> bool:
    """
    Check if ingredients contain meat or alcohol.
    Returns True if non-vegetarian, False if vegetarian.
    """
    if not ingredients_text:
        return False
    
    ingredients_lower = ingredients_text.lower()
    
    # Check for meat keywords
    for keyword in MEAT_KEYWORDS:
        if re.search(r'\b' + re.escape(keyword) + r'\b', ingredients_lower):
            return True
    
    # Check for alcohol keywords
    for keyword in ALCOHOL_KEYWORDS:
        if re.search(r'\b' + re.escape(keyword) + r'\b', ingredients_lower):
            return True
    
    return False

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Food Scanner API"}

@api_router.post("/scan-product", response_model=ScanResponse)
async def scan_product(scan_request: ScanRequest):
    """
    Scan a product barcode and return if it's vegetarian or not.
    """
    barcode = scan_request.barcode
    
    try:
        # Call Open Food Facts API
        url = f"https://world.openfoodfacts.org/api/v2/product/{barcode}"
        response = requests.get(url, timeout=10)
        
        if response.status_code != 200:
            return ScanResponse(
                status="unknown",
                found=False
            )
        
        data = response.json()
        
        # Check if product was found
        if data.get('status') != 1:
            return ScanResponse(
                status="unknown",
                found=False
            )
        
        product = data.get('product', {})
        product_name = product.get('product_name', 'Unknown Product')
        ingredients_text = product.get('ingredients_text', '')
        
        # Check if non-vegetarian
        is_non_vegetarian = check_ingredients(ingredients_text)
        
        status = "non-vegetarian" if is_non_vegetarian else "vegetarian"
        
        return ScanResponse(
            status=status,
            product_name=product_name,
            found=True
        )
        
    except Exception as e:
        logger.error(f"Error scanning product: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
