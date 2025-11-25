# 🚀 Guide Complet de Publication sur Google Play Store

## 📋 Table des Matières
1. [Prérequis](#prérequis)
2. [Étape 1 : Exporter le code](#étape-1--exporter-le-code)
3. [Étape 2 : Configuration locale](#étape-2--configuration-locale)
4. [Étape 3 : Créer un compte Google Play Console](#étape-3--créer-un-compte-google-play-console)
5. [Étape 4 : Générer les clés de signature](#étape-4--générer-les-clés-de-signature)
6. [Étape 5 : Construire l'AAB](#étape-5--construire-laab)
7. [Étape 6 : Préparer le contenu du Store](#étape-6--préparer-le-contenu-du-store)
8. [Étape 7 : Publier l'application](#étape-7--publier-lapplication)

---

## Prérequis

### Sur votre ordinateur :
- Node.js (version 18 ou supérieure)
- Git
- Un compte Google
- 25 $ USD (frais unique d'inscription Google Play Developer)

### Temps estimé :
- Configuration : 1-2 heures
- Révision Google : 1-7 jours

---

## Étape 1 : Exporter le Code

### Option A : Via Emergent (Recommandé)
1. Dans Emergent, cherchez la fonctionnalité "**Save to GitHub**"
2. Connectez votre compte GitHub
3. Exportez le projet complet

### Option B : Téléchargement Manuel
Si "Save to GitHub" n'est pas disponible, copiez tous les fichiers :
```bash
# Structure à télécharger
/app
├── frontend/         # Application React Native
│   ├── app/         # Fichiers de l'app
│   ├── assets/      # Images et ressources
│   ├── package.json
│   ├── app.json
│   └── eas.json     # ✅ Déjà créé
├── backend/         # API FastAPI
└── README.md
```

---

## Étape 2 : Configuration Locale

### 1. Installer les outils nécessaires

```bash
# Installer Node.js depuis https://nodejs.org/

# Installer Expo CLI et EAS CLI
npm install -g expo-cli eas-cli

# Vérifier l'installation
expo --version
eas --version
```

### 2. Ouvrir le projet

```bash
# Aller dans le dossier frontend
cd frontend

# Installer les dépendances
npm install
# ou
yarn install
```

### 3. Se connecter à Expo

```bash
# Créer un compte Expo (gratuit) sur https://expo.dev
eas login

# Entrez vos identifiants Expo
```

---

## Étape 3 : Créer un Compte Google Play Console

### 1. Inscription
1. Allez sur : https://play.google.com/console/signup
2. Connectez-vous avec votre compte Google
3. Payez les **25 $ USD** (frais unique, à vie)
4. Remplissez les informations de développeur

### 2. Créer une nouvelle application
1. Cliquez sur "**Créer une application**"
2. Remplissez :
   - **Nom** : Scanner de Produits Alimentaires / Food Scanner
   - **Langue par défaut** : Français ou Anglais
   - **Application ou jeu** : Application
   - **Gratuite ou payante** : Gratuite

---

## Étape 4 : Générer les Clés de Signature

### Option Recommandée : Laisser EAS gérer les clés

```bash
# EAS générera automatiquement les clés lors du premier build
eas build --platform android --profile production
```

EAS vous demandera :
- **Générer une nouvelle clé de signature Android ?** → Répondez **OUI**

Les clés seront stockées automatiquement et en sécurité par Expo.

---

## Étape 5 : Construire l'AAB

### 1. Mettre à jour app.json

Vérifiez que votre `app.json` contient bien :

```json
{
  "expo": {
    "name": "Food Scanner",
    "slug": "food-scanner",
    "version": "1.0.0",
    "android": {
      "package": "com.foodscanner.app",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "permissions": [
        "CAMERA"
      ]
    }
  }
}
```

### 2. Lancer le build

```bash
# Dans le dossier frontend/
eas build --platform android --profile production
```

**Ce qui va se passer :**
1. EAS va analyser votre projet
2. Créer un build cloud sur les serveurs Expo
3. Compiler l'application Android
4. Générer le fichier AAB

**Durée : 10-20 minutes**

### 3. Télécharger l'AAB

Une fois terminé, vous verrez :
```
✅ Build completed!
🔗 Download: https://expo.dev/accounts/[votre-compte]/projects/food-scanner/builds/[id]
```

Cliquez sur le lien et téléchargez le fichier `build-XXXXXXX.aab`

---

## Étape 6 : Préparer le Contenu du Store

### 1. Captures d'écran requises

**Téléphone (obligatoire) :**
- Minimum 2 captures d'écran
- Format : JPEG ou PNG 24 bits
- Dimensions : Entre 320px et 3840px
- Ratio : 16:9 ou 9:16

**Recommandation - 4 captures d'écran :**
1. Écran d'accueil (Scanner de Produits)
2. Écran de scan avec caméra
3. Résultat végétarien (cercle vert)
4. Résultat non-végétarien (triangle marron)

### 2. Icône de l'application

**Déjà incluse dans votre projet :**
- `frontend/assets/images/icon.png` (512x512px)
- `frontend/assets/images/adaptive-icon.png` (1024x1024px)

### 3. Image de présentation (Feature Graphic)

**Dimensions requises :**
- 1024 x 500 pixels
- Format : JPEG ou PNG 24 bits

**Contenu suggéré :**
- Logo de l'app au centre
- Texte : "Scanner de Produits Alimentaires"
- Sous-texte : "Végétarien ou Non-Végétarien ?"
- Symboles Codex (cercle vert + triangle marron)

### 4. Description de l'application

**Titre court (max 50 caractères) :**
```
Scanner Alimentaire - Végétarien/Non-Végétarien
```

**Description complète (max 4000 caractères) :**
```
🌱 Scanner de Produits Alimentaires - Conforme Codex Alimentarius

Identifiez instantanément si vos produits alimentaires sont végétariens ou contiennent de la viande/alcool !

✅ FONCTIONNALITÉS PRINCIPALES
• Scan ultra-rapide de codes-barres et QR codes
• Symboles officiels Codex Alimentarius
• 11 types de codes supportés (EAN, UPC, QR, Data Matrix, PDF417, etc.)
• Interface bilingue (Français/Anglais)
• Base de données mondiale (Open Food Facts)
• 100% gratuit, sans publicité

🟢 SYMBOLES CODEX ALIMENTARIUS
• Cercle VERT = Végétarien (sans viande ni alcool)
• Triangle MARRON = Non-végétarien (contient viande ou alcool)

📊 TYPES DE CODES SUPPORTÉS
• EAN-13, EAN-8 (Europe)
• UPC-A, UPC-E (USA/Canada)
• Code 128, Code 39
• QR Code
• Data Matrix, PDF417, Aztec, ITF-14

🔒 RESPECT DE LA VIE PRIVÉE
• Aucun compte requis
• Pas d'historique enregistré
• Données non partagées

🌍 IDÉAL POUR
• Végétariens et végétaliens
• Personnes évitant l'alcool
• Parents contrôlant l'alimentation
• Consommateurs conscients

Scannez, vérifiez, achetez en confiance !
```

**Description courte (max 80 caractères) :**
```
Scanner alimentaire avec symboles Codex - Végétarien/Non-végétarien
```

### 5. Catégorie et Contenu

- **Catégorie** : Alimentation et boissons
- **Contenu** : Pour tous (PEGI 3)
- **Coordonnées** : Votre email de contact
- **Politique de confidentialité** : URL requise (vous devrez créer une page)

---

## Étape 7 : Publier l'Application

### 1. Upload de l'AAB

Dans Google Play Console :

1. Allez dans **Production** > **Créer une version**
2. Cliquez sur **Importer depuis l'ordinateur**
3. Sélectionnez votre fichier `.aab`
4. Attendez la validation (quelques minutes)

### 2. Remplir le contenu du Store

1. **Fiche du Store** :
   - Téléchargez les captures d'écran
   - Ajoutez l'icône
   - Ajoutez l'image de présentation
   - Copiez les descriptions

2. **Classification du contenu** :
   - Répondez au questionnaire
   - Confirmez que l'app ne collecte pas de données sensibles

3. **Tarification et distribution** :
   - Gratuite
   - Sélectionnez les pays (ou "Tous")

4. **Politique de confidentialité** :
   - Créez une page simple (voir modèle ci-dessous)

### 3. Soumettre pour révision

1. Vérifiez tous les ongles (doivent être ✅)
2. Cliquez sur **Envoyer pour révision**
3. Attendez l'approbation (1-7 jours)

---

## 📝 Modèle Politique de Confidentialité

Créez un fichier HTML simple :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Politique de Confidentialité - Food Scanner</title>
    <meta charset="utf-8">
</head>
<body>
    <h1>Politique de Confidentialité</h1>
    <p><strong>Dernière mise à jour : 2025</strong></p>
    
    <h2>1. Collecte de Données</h2>
    <p>Food Scanner ne collecte AUCUNE donnée personnelle.</p>
    
    <h2>2. Utilisation de la Caméra</h2>
    <p>La caméra est utilisée uniquement pour scanner les codes-barres. 
    Aucune photo n'est enregistrée ou transmise.</p>
    
    <h2>3. API Externe</h2>
    <p>L'application interroge l'API Open Food Facts (https://openfoodfacts.org) 
    pour obtenir les informations sur les produits.</p>
    
    <h2>4. Pas d'Historique</h2>
    <p>Aucun historique de scan n'est conservé sur votre appareil ou nos serveurs.</p>
    
    <h2>5. Contact</h2>
    <p>Email : [votre-email@example.com]</p>
</body>
</html>
```

Hébergez-le sur :
- GitHub Pages (gratuit)
- Netlify (gratuit)
- Votre propre site web

---

## ✅ Checklist Finale

Avant de publier, vérifiez :

- [ ] AAB généré et téléchargé
- [ ] Compte Google Play Developer créé (25$ payés)
- [ ] Application créée dans Play Console
- [ ] 2-8 captures d'écran téléchargées
- [ ] Icône et image de présentation ajoutées
- [ ] Descriptions remplies (courte + complète)
- [ ] Catégorie sélectionnée
- [ ] Classification du contenu complétée
- [ ] Politique de confidentialité en ligne
- [ ] URL de la politique ajoutée
- [ ] Tarification configurée (Gratuit)
- [ ] Pays de distribution sélectionnés
- [ ] Version soumise pour révision

---

## 🎉 Après Publication

### Mises à jour futures

Pour publier une nouvelle version :

1. **Modifier `app.json` :**
```json
{
  "version": "1.1.0",  // Incrémenter
  "android": {
    "versionCode": 2    // Incrémenter (doit être > à la version précédente)
  }
}
```

2. **Rebuild :**
```bash
eas build --platform android --profile production
```

3. **Upload dans Play Console :**
- Production > Créer une version
- Importer le nouveau AAB
- Ajouter les notes de version
- Soumettre

---

## 📞 Support

### Problèmes courants

**"Build failed" ?**
- Vérifiez que toutes les dépendances sont installées
- Consultez les logs : `eas build:list`

**"AAB invalide" ?**
- Assurez-vous que `versionCode` est supérieur à la version précédente

**"Rejet de Google" ?**
- Vérifiez la politique de confidentialité
- Assurez-vous d'avoir toutes les captures d'écran requises

### Ressources utiles
- Documentation EAS Build : https://docs.expo.dev/build/introduction/
- Google Play Console : https://play.google.com/console/
- Support Expo : https://expo.dev/support

---

## 🎯 Résumé

1. ✅ Exporter le code depuis Emergent
2. ✅ Installer EAS CLI en local
3. ✅ Créer compte Google Play ($25)
4. ✅ `eas build --platform android --profile production`
5. ✅ Télécharger l'AAB
6. ✅ Préparer captures d'écran et descriptions
7. ✅ Upload sur Play Console
8. ✅ Soumettre pour révision
9. ⏳ Attendre 1-7 jours
10. 🎉 Application publiée !

---

**Bonne chance avec votre publication ! 🚀**

*Si vous avez des questions, consultez la documentation officielle ou contactez le support d'Emergent.*
