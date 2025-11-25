import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
  ActivityIndicator,
  SafeAreaView,
  Dimensions
} from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const EXPO_PUBLIC_BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

type Language = 'fr' | 'en';

type ScanResult = {
  status: 'vegetarian' | 'non-vegetarian' | 'unknown';
  product_name?: string;
  found: boolean;
};

const translations = {
  fr: {
    title: 'Scanner de Produits',
    subtitle: 'Scannez un code-barres pour vérifier',
    startScan: 'Démarrer le Scan',
    scanning: 'Scan en cours...',
    vegetarian: 'VÉGÉTARIEN',
    nonVegetarian: 'NON VÉGÉTARIEN',
    unknown: 'PRODUIT INCONNU',
    scanAnother: 'Scanner un autre produit',
    productNotFound: 'Produit non trouvé',
    productNotFoundMsg: 'Ce produit n\'est pas dans notre base de données.',
    error: 'Erreur',
    cameraPermission: 'Permission caméra requise',
    cameraPermissionMsg: 'Veuillez autoriser l\'accès à la caméra pour scanner les codes-barres.',
    scanBarcode: 'Scannez le code-barres',
    pointCamera: 'Pointez la caméra vers le code-barres du produit'
  },
  en: {
    title: 'Product Scanner',
    subtitle: 'Scan a barcode to check',
    startScan: 'Start Scan',
    scanning: 'Scanning...',
    vegetarian: 'VEGETARIAN',
    nonVegetarian: 'NON VEGETARIAN',
    unknown: 'UNKNOWN PRODUCT',
    scanAnother: 'Scan Another Product',
    productNotFound: 'Product Not Found',
    productNotFoundMsg: 'This product is not in our database.',
    error: 'Error',
    cameraPermission: 'Camera Permission Required',
    cameraPermissionMsg: 'Please allow camera access to scan barcodes.',
    scanBarcode: 'Scan Barcode',
    pointCamera: 'Point camera at product barcode'
  }
};

export default function Index() {
  const [language, setLanguage] = useState<Language>('fr');
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [scanned, setScanned] = useState(false);

  const t = translations[language];

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      if (status !== 'granted') {
        Alert.alert(t.cameraPermission, t.cameraPermissionMsg);
      }
    } catch (error) {
      console.error('Error requesting camera permission:', error);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const startScanning = () => {
    if (!hasPermission) {
      requestCameraPermission();
      return;
    }
    setScanResult(null);
    setScanned(false);
    setIsScanning(true);
  };

  const handleBarCodeScanned = async ({ type, data }: { type: string; data: string }) => {
    if (scanned) return;
    
    setScanned(true);
    setLoading(true);

    try {
      const response = await axios.post(
        `${EXPO_PUBLIC_BACKEND_URL}/api/scan-product`,
        { barcode: data },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 15000
        }
      );

      setScanResult(response.data);
      setIsScanning(false);
    } catch (error: any) {
      console.error('Error scanning product:', error);
      Alert.alert(t.error, error.message || 'Failed to scan product');
      setScanned(false);
    } finally {
      setLoading(false);
    }
  };

  const renderHomeScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Language Toggle */}
        <TouchableOpacity
          style={styles.languageButton}
          onPress={toggleLanguage}
          activeOpacity={0.7}
        >
          <Ionicons name="language" size={20} color="#fff" />
          <Text style={styles.languageText}>{language.toUpperCase()}</Text>
        </TouchableOpacity>

        {/* Logo/Icon */}
        <View style={styles.iconContainer}>
          <Ionicons name="scan" size={120} color="#4CAF50" />
        </View>

        {/* Title */}
        <Text style={styles.title}>{t.title}</Text>
        <Text style={styles.subtitle}>{t.subtitle}</Text>

        {/* Start Button */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={startScanning}
          activeOpacity={0.8}
        >
          <Ionicons name="camera" size={24} color="#fff" style={styles.buttonIcon} />
          <Text style={styles.startButtonText}>{t.startScan}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  const renderScannerScreen = () => (
    <View style={styles.scannerContainer}>
      <CameraView
        style={styles.camera}
        facing="back"
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr', 'ean13', 'ean8', 'upc_a', 'upc_e', 'code128', 'code39'],
        }}
      >
        <SafeAreaView style={styles.cameraOverlay}>
          {/* Header */}
          <View style={styles.scannerHeader}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                setIsScanning(false);
                setScanned(false);
              }}
              activeOpacity={0.7}
            >
              <Ionicons name="close" size={32} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.scannerTitle}>{t.scanBarcode}</Text>
            <View style={{ width: 32 }} />
          </View>

          {/* Scanning Frame */}
          <View style={styles.scannerMiddle}>
            <View style={styles.scanFrame}>
              <View style={[styles.corner, styles.topLeft]} />
              <View style={[styles.corner, styles.topRight]} />
              <View style={[styles.corner, styles.bottomLeft]} />
              <View style={[styles.corner, styles.bottomRight]} />
            </View>
            <Text style={styles.scanInstruction}>{t.pointCamera}</Text>
          </View>

          {/* Loading Indicator */}
          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#4CAF50" />
              <Text style={styles.loadingText}>{t.scanning}</Text>
            </View>
          )}
        </SafeAreaView>
      </CameraView>
    </View>
  );

  const renderResultScreen = () => {
    if (!scanResult) return null;

    const isVegetarian = scanResult.status === 'vegetarian';
    const isUnknown = !scanResult.found || scanResult.status === 'unknown';
    const backgroundColor = isUnknown ? '#FF9800' : isVegetarian ? '#4CAF50' : '#F44336';
    const statusText = isUnknown ? t.unknown : isVegetarian ? t.vegetarian : t.nonVegetarian;
    const icon = isUnknown ? 'help-circle' : isVegetarian ? 'checkmark-circle' : 'close-circle';

    return (
      <SafeAreaView style={[styles.container, { backgroundColor }]}>
        <View style={styles.resultContent}>
          {/* Language Toggle */}
          <TouchableOpacity
            style={[styles.languageButton, styles.languageButtonResult]}
            onPress={toggleLanguage}
            activeOpacity={0.7}
          >
            <Ionicons name="language" size={20} color="#fff" />
            <Text style={styles.languageText}>{language.toUpperCase()}</Text>
          </TouchableOpacity>

          {/* Result Circle */}
          <View style={styles.resultCircle}>
            <Ionicons name={icon as any} size={150} color="#fff" />
          </View>

          {/* Status Text */}
          <Text style={styles.resultStatus}>{statusText}</Text>

          {/* Scan Another Button */}
          <TouchableOpacity
            style={styles.scanAnotherButton}
            onPress={startScanning}
            activeOpacity={0.8}
          >
            <Ionicons name="scan" size={24} color={backgroundColor} style={styles.buttonIcon} />
            <Text style={[styles.scanAnotherButtonText, { color: backgroundColor }]}>
              {t.scanAnother}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  if (scanResult) {
    return renderResultScreen();
  }

  if (isScanning) {
    return renderScannerScreen();
  }

  return renderHomeScreen();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  languageButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    right: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  languageButtonResult: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  languageText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  iconContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#b0b0b0',
    marginBottom: 48,
    textAlign: 'center',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 30,
    gap: 12,
  },
  buttonIcon: {
    marginRight: 4,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scannerContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  cameraOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scannerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backButton: {
    padding: 8,
  },
  scannerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scannerMiddle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanFrame: {
    width: width * 0.7,
    height: width * 0.5,
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: '#4CAF50',
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
  },
  scanInstruction: {
    color: '#fff',
    fontSize: 16,
    marginTop: 32,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 32,
    paddingVertical: 24,
    borderRadius: 16,
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 12,
  },
  resultContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  resultCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 48,
  },
  resultStatus: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 64,
    textAlign: 'center',
  },
  scanAnotherButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 30,
    gap: 12,
  },
  scanAnotherButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
