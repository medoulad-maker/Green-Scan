# 📱 Scanner de Produits Alimentaires / Food Scanner App

## 🇫🇷 Description (Français)

Application mobile **conforme au Codex Alimentarius** pour scanner les codes-barres et QR codes des produits alimentaires au magasin. L'application vérifie automatiquement si les produits contiennent de l'alcool ou de la viande et affiche les symboles officiels :

### Symboles Codex Alimentarius :
- 🟢 **Cercle VERT dans carré vert** = Produits végétariens (sans viande ni alcool) - Fond écran vert
- 🟤 **Triangle MARRON dans carré marron** = Produits non végétariens (contenant viande ou alcool) - Fond écran rouge
- 🟠 **ORANGE** = Produit inconnu (pas dans la base de données) - Fond écran orange

## 🇬🇧 Description (English)

Mobile app **compliant with Codex Alimentarius** to scan barcodes and QR codes of food products at the store. The app automatically checks if products contain alcohol or meat and displays official symbols:

### Codex Alimentarius Symbols:
- 🟢 **GREEN Circle in green square** = Vegetarian products (no meat or alcohol) - Green screen background
- 🟤 **BROWN Triangle in brown square** = Non-vegetarian products (contains meat or alcohol) - Red screen background
- 🟠 **ORANGE** = Unknown product (not in database) - Orange screen background

---

## ✨ Fonctionnalités / Features

### 🇫🇷 Français
- ✅ **Conforme Codex Alimentarius** - Symboles officiels (cercle vert / triangle marron)
- ✅ Scan de codes-barres multiples :
  - EAN-13, EAN-8 (Europe)
  - UPC-A, UPC-E (USA)
  - Code 128, Code 39
  - Data Matrix
  - PDF417
  - Aztec
  - ITF-14 (Interleaved 2 of 5)
- ✅ Scan de codes QR
- ✅ Détection automatique viande/alcool
- ✅ Interface bilingue (Français/Anglais)
- ✅ Résultats visuels avec symboles Codex + couleurs d'arrière-plan
- ✅ Pas de connexion requise (après scan)
- ✅ Pas d'historique (protection vie privée)

### 🇬🇧 English
- ✅ **Codex Alimentarius Compliant** - Official symbols (green circle / brown triangle)
- ✅ Multiple barcode types scanning:
  - EAN-13, EAN-8 (Europe)
  - UPC-A, UPC-E (USA)
  - Code 128, Code 39
  - Data Matrix
  - PDF417
  - Aztec
  - ITF-14 (Interleaved 2 of 5)
- ✅ QR code scanning
- ✅ Automatic meat/alcohol detection
- ✅ Bilingual interface (French/English)
- ✅ Visual results with Codex symbols + background colors
- ✅ No login required
- ✅ No history (privacy protection)

---

## 📖 Guide d'utilisation / User Guide

### 🇫🇷 Comment utiliser l'application

1. **Ouvrir l'application**
   - Lancez l'app sur votre téléphone
   - Acceptez les permissions de caméra

2. **Choisir la langue**
   - Cliquez sur le bouton "FR" / "EN" en haut à droite
   - Changez entre Français et Anglais

3. **Scanner un produit**
   - Appuyez sur "Démarrer le Scan"
   - Pointez la caméra vers le code-barres du produit
   - Attendez que le scan se fasse automatiquement

4. **Voir le résultat**
   - 🟢 Cercle VERT = Végétarien (OK!)
   - 🔴 Cercle ROUGE = Non végétarien (Viande ou Alcool)
   - 🟠 Cercle ORANGE = Produit inconnu

5. **Scanner un autre produit**
   - Appuyez sur "Scanner un autre produit"
   - Répétez le processus

### 🇬🇧 How to use the app

1. **Open the app**
   - Launch the app on your phone
   - Accept camera permissions

2. **Choose language**
   - Click on "FR" / "EN" button at top right
   - Switch between French and English

3. **Scan a product**
   - Press "Start Scan"
   - Point camera at product barcode
   - Wait for automatic scanning

4. **View result**
   - 🟢 GREEN Circle = Vegetarian (OK!)
   - 🔴 RED Circle = Non-vegetarian (Meat or Alcohol)
   - 🟠 ORANGE Circle = Unknown product

5. **Scan another product**
   - Press "Scan Another Product"
   - Repeat the process

---

## 🔍 Comment ça marche / How it works

### 🇫🇷 Français

L'application utilise :
- **Open Food Facts** : Base de données collaborative mondiale de produits alimentaires
- **Analyse d'ingrédients** : Détection automatique de mots-clés viande/alcool dans la liste d'ingrédients
- **Classification visuelle** : Résultat immédiat avec code couleur

**Mots-clés détectés pour ROUGE :**
- Viande : viande, poulet, boeuf, porc, poisson, bacon, jambon, etc.
- Alcool : alcool, éthanol, vin, bière, vodka, etc.
- Ingrédients animaux : gélatine, collagène, etc.

### 🇬🇧 English

The app uses:
- **Open Food Facts**: Global collaborative food products database
- **Ingredient analysis**: Automatic detection of meat/alcohol keywords in ingredient list
- **Visual classification**: Immediate result with color code

**Keywords detected for RED:**
- Meat: meat, chicken, beef, pork, fish, bacon, ham, etc.
- Alcohol: alcohol, ethanol, wine, beer, vodka, etc.
- Animal ingredients: gelatin, collagen, etc.

---

## 📱 Installation

### Pour tester sur téléphone / To test on phone

1. **Installer Expo Go**
   - iOS: Téléchargez "Expo Go" sur l'App Store
   - Android: Téléchargez "Expo Go" sur le Play Store

2. **Scanner le QR code**
   - Le QR code est disponible dans l'interface web
   - Ou utilisez le lien direct fourni

3. **Lancer l'app**
   - L'application se charge automatiquement
   - Commencez à scanner !

---

## ⚙️ Informations techniques / Technical Information

### Technologies utilisées / Technologies used
- **Frontend**: React Native + Expo
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **API externe**: Open Food Facts
- **Scan**: expo-barcode-scanner, expo-camera

### Permissions requises / Required permissions
- 📷 Caméra (pour scanner les codes-barres)

---

## ❓ FAQ

### 🇫🇷 Questions fréquentes

**Q: Pourquoi certains produits sont "inconnus" ?**
R: Le produit n'est pas encore dans la base de données Open Food Facts. Vous pouvez contribuer en l'ajoutant sur openfoodfacts.org

**Q: L'application fonctionne-t-elle hors ligne ?**
R: Non, une connexion internet est nécessaire pour vérifier les produits.

**Q: Mes scans sont-ils sauvegardés ?**
R: Non, aucun historique n'est conservé pour protéger votre vie privée.

**Q: L'application est-elle précise ?**
R: L'application utilise Open Food Facts, une base collaborative. La précision dépend de la qualité des données contributeurs.

### 🇬🇧 Frequently Asked Questions

**Q: Why are some products "unknown"?**
A: The product is not yet in the Open Food Facts database. You can contribute by adding it on openfoodfacts.org

**Q: Does the app work offline?**
A: No, an internet connection is required to check products.

**Q: Are my scans saved?**
A: No, no history is kept to protect your privacy.

**Q: Is the app accurate?**
A: The app uses Open Food Facts, a collaborative database. Accuracy depends on contributor data quality.

---

## 📞 Support

Pour toute question ou problème :
- Vérifiez les permissions de caméra dans les paramètres de votre téléphone
- Assurez-vous d'avoir une connexion internet stable
- Essayez de scanner dans un endroit bien éclairé

For any questions or issues:
- Check camera permissions in your phone settings
- Make sure you have a stable internet connection
- Try scanning in a well-lit area

---

## 🌟 Crédits / Credits

- **Open Food Facts** : Base de données de produits / Product database
- **Expo** : Framework React Native
- **FastAPI** : Backend API
- **MongoDB** : Database storage

---

**Version**: 1.0.0  
**Dernière mise à jour / Last update**: 2025
