# 🚀 Guide Rapide - Publication Play Store (Compte Développeur Existant)

## ✅ Vous avez déjà : Compte Google Play Developer

## 📋 Ce qu'il vous faut maintenant

### Étape 1 : Exporter votre code depuis Emergent (5 min)

**Option A : Save to GitHub (Recommandé)**
1. Dans l'interface Emergent, cherchez "**Save to GitHub**" ou "**Push to GitHub**"
2. Connectez votre compte GitHub
3. Le projet sera exporté automatiquement

**Option B : Téléchargement Manuel**
Si vous ne trouvez pas l'option GitHub :
1. Contactez le support Emergent sur Discord : https://discord.gg/VzKfwCXC4A
2. Demandez comment exporter le projet complet
3. Ou téléchargez tous les fichiers manuellement

---

## Étape 2 : Configuration Locale (10 min)

### Sur votre ordinateur :

```bash
# 1. Installer Node.js (si pas déjà fait)
# Téléchargez depuis : https://nodejs.org/

# 2. Installer EAS CLI
npm install -g eas-cli

# 3. Vérifier l'installation
eas --version

# 4. Aller dans le dossier du projet
cd [chemin-vers-votre-projet]/frontend

# 5. Installer les dépendances
yarn install
# ou
npm install

# 6. Se connecter à Expo (créez un compte gratuit si besoin)
eas login
```

---

## Étape 3 : Générer l'AAB (20-30 min)

```bash
# Dans le dossier frontend/
eas build --platform android --profile production
```

**Ce qui va se passer :**
1. EAS va vous demander si vous voulez générer une clé de signature → **Répondez OUI**
2. Le build démarre sur les serveurs Expo (cloud)
3. Vous verrez une URL pour suivre la progression
4. Après 10-20 minutes, le build sera terminé
5. Vous recevrez un lien pour télécharger le fichier `.aab`

**Téléchargez le fichier AAB** sur votre ordinateur.

---

## Étape 4 : Créer l'Application dans Play Console (15 min)

### 1. Aller sur Play Console
https://play.google.com/console/

### 2. Créer une nouvelle application
- Cliquez sur "**Toutes les applications**" > "**Créer une application**"

### 3. Remplir les informations de base

**Détails de l'application :**
- **Nom de l'application** : `Scanner de Produits Alimentaires` ou `Food Scanner`
- **Langue par défaut** : Français ou Anglais
- **Type** : Application
- **Gratuite ou payante** : Gratuite
- **Déclarations** : Cochez toutes les cases

Cliquez sur "**Créer l'application**"

---

## Étape 5 : Fiche du Store (20 min)

### Navigation : Présence sur Google Play > Fiche du Store principale

### 1. Détails de l'application

**Nom court de l'application (30 caractères) :**
```
Food Scanner - Codex
```

**Titre court (80 caractères) :**
```
Scanner Alimentaire - Végétarien/Non-Végétarien - Codex Alimentarius
```

**Description complète :**
```
🌱 SCANNER DE PRODUITS ALIMENTAIRES
Identifiez instantanément si vos produits sont végétariens ou contiennent de la viande/alcool !

✅ FONCTIONNALITÉS
• Scan ultra-rapide de codes-barres et QR codes
• Symboles officiels Codex Alimentarius
• 11 types de codes supportés (EAN-13, UPC, QR, Data Matrix, PDF417, Aztec, ITF-14, etc.)
• Interface bilingue (Français/Anglais)
• Base de données mondiale Open Food Facts
• 100% gratuit, sans publicité

🟢 SYMBOLES OFFICIELS CODEX ALIMENTARIUS
• Cercle VERT dans carré vert = Végétarien (sans viande ni alcool)
• Triangle MARRON dans carré marron = Non-végétarien (contient viande ou alcool)
• Conforme aux normes internationales alimentaires

📊 TOUS LES CODES SUPPORTÉS
Europe : EAN-13, EAN-8
USA/Canada : UPC-A, UPC-E
Industriels : Code 128, Code 39
2D : QR Code, Data Matrix, PDF417, Aztec, ITF-14

🔒 RESPECT DE LA VIE PRIVÉE
• Aucun compte requis
• Pas d'historique enregistré
• Aucune donnée personnelle collectée
• Caméra utilisée uniquement pour le scan

🌍 PARFAIT POUR
• Végétariens et végétaliens
• Personnes évitant l'alcool
• Parents contrôlant l'alimentation des enfants
• Consommateurs responsables
• Régimes alimentaires spécifiques

📱 UTILISATION SIMPLE
1. Ouvrez l'application
2. Appuyez sur "Démarrer le Scan"
3. Pointez vers le code-barres du produit
4. Résultat instantané avec symbole Codex

Scannez, vérifiez, achetez en toute confiance !

Base de données : Open Food Facts (collaborative mondiale)
```

**Description courte (80 caractères) :**
```
Scanner alimentaire Codex - Détecte végétarien/viande/alcool par code-barres
```

### 2. Graphismes

**Vous devez fournir :**

#### A) Icône de l'application (déjà dans votre projet)
- Fichier : `frontend/assets/images/icon.png` (512x512px)
- Format : PNG, JPG

#### B) Image de présentation (Feature Graphic)
- Dimensions : **1024 x 500 pixels**
- Format : PNG ou JPG

**Contenu suggéré :**
```
[Arrière-plan vert/marron]
Texte au centre : "SCANNER DE PRODUITS ALIMENTAIRES"
Sous-texte : "Conforme Codex Alimentarius"
Icône de l'app + Symboles (cercle vert + triangle marron)
```

**Si vous n'avez pas de logiciel graphique :**
Utilisez Canva (gratuit) : https://www.canva.com/
- Créez un design personnalisé 1024x500px
- Ajoutez votre texte et symboles

#### C) Captures d'écran (minimum 2, recommandé 4-8)
Dimensions : 1080 x 1920 pixels (ou ratio 9:16)

**Captures suggérées :**
1. **Écran d'accueil** - "Scanner de Produits" avec bouton vert
2. **Écran de scan** - Caméra active avec cadre de scan
3. **Résultat végétarien** - Grand cercle VERT avec texte "VÉGÉTARIEN"
4. **Résultat non-végétarien** - Triangle MARRON avec texte "NON VÉGÉTARIEN"

**Comment obtenir les captures d'écran :**
- Testez l'app avec Expo Go sur votre téléphone
- Prenez des captures d'écran pendant l'utilisation
- Redimensionnez si nécessaire

### 3. Catégorisation

- **Application ou Jeu** : Application
- **Catégorie** : Alimentation et boissons
- **Tags** : scanner, alimentaire, végétarien, codes-barres

### 4. Coordonnées

- **Email** : [votre-email@example.com]
- **Site Web** (optionnel)
- **Numéro de téléphone** (optionnel)

**Enregistrez les modifications**

---

## Étape 6 : Configuration de l'Application (15 min)

### 1. Classification du contenu

Navigation : Présence sur Google Play > Classification du contenu

- Cliquez sur "**Démarrer le questionnaire**"
- **Email** : votre email
- **Catégorie** : Utilitaires
- Répondez aux questions :
  - Violence : Non
  - Contenu sexuel : Non
  - Langage grossier : Non
  - etc.
- **Soumettre**

### 2. Public cible et contenu

Navigation : Présence sur Google Play > Public cible et contenu

- **Tranche d'âge cible** : 3 ans et plus (PEGI 3)
- **Attire particulièrement les enfants** : Non
- **Intérêt de l'application** : Scanner de produits alimentaires
- **Enregistrer**

### 3. Sécurité des données

Navigation : Présence sur Google Play > Sécurité des données

Important ! Google exige cette section depuis 2022.

**Section 1 : Collecte et partage de données**
- **Votre application collecte-t-elle des données ?** → **NON**
- **Toutes les données utilisateur collectées sont-elles chiffrées ?** → N/A
- **Possibilité de supprimer les données ?** → N/A

**Section 2 : Pratiques de sécurité**
- Cochez : "Aucune donnée collectée"

**Enregistrer et envoyer**

### 4. Politique de confidentialité

Navigation : Présence sur Google Play > Politique de confidentialité

**Vous DEVEZ avoir une URL de politique de confidentialité.**

**Option rapide : Utiliser GitHub Pages (gratuit)**

1. Créez un fichier `privacy-policy.html` :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Politique de Confidentialité - Food Scanner</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
        h1 { color: #2E7D32; }
        h2 { color: #5D4037; margin-top: 30px; }
    </style>
</head>
<body>
    <h1>Politique de Confidentialité</h1>
    <p><strong>Dernière mise à jour : 2025</strong></p>
    
    <h2>1. Collecte de Données</h2>
    <p>L'application Food Scanner ne collecte, n'enregistre et ne stocke AUCUNE donnée personnelle.</p>
    
    <h2>2. Utilisation de la Caméra</h2>
    <p>La permission caméra est demandée uniquement pour scanner les codes-barres des produits alimentaires. 
    Aucune photo ou vidéo n'est enregistrée, stockée ou transmise.</p>
    
    <h2>3. API Externe</h2>
    <p>L'application interroge l'API Open Food Facts (https://openfoodfacts.org) pour obtenir 
    les informations nutritionnelles des produits. Cette API est publique et collaborative.</p>
    
    <h2>4. Aucun Historique</h2>
    <p>Aucun historique de scan n'est conservé. Les informations sont affichées en temps réel 
    puis immédiatement supprimées de la mémoire.</p>
    
    <h2>5. Pas de Publicité</h2>
    <p>L'application ne contient aucune publicité ni tracker publicitaire.</p>
    
    <h2>6. Pas de Compte Utilisateur</h2>
    <p>Aucun compte n'est requis pour utiliser l'application.</p>
    
    <h2>7. Permissions Requises</h2>
    <ul>
        <li><strong>Caméra</strong> : Nécessaire pour scanner les codes-barres</li>
    </ul>
    
    <h2>8. Modifications</h2>
    <p>Nous nous réservons le droit de modifier cette politique de confidentialité. 
    Les modifications seront publiées sur cette page.</p>
    
    <h2>9. Contact</h2>
    <p>Pour toute question concernant cette politique : <strong>[votre-email@example.com]</strong></p>
    
    <hr>
    <p><em>Food Scanner - Conforme Codex Alimentarius</em></p>
</body>
</html>
```

2. Uploadez sur GitHub Pages ou Netlify
3. Copiez l'URL (ex: `https://votrecompte.github.io/food-scanner/privacy-policy.html`)
4. Collez l'URL dans Play Console

---

## Étape 7 : Upload de l'AAB et Publication (10 min)

### 1. Créer une version de production

Navigation : Production > Versions > Créer une version

### 2. Importer l'AAB

- Cliquez sur "**Importer depuis l'ordinateur**"
- Sélectionnez votre fichier `.aab` téléchargé
- Attendez la validation (2-5 minutes)

### 3. Nom de la version

```
Version 1.0.0 - Lancement initial

Fonctionnalités :
• Scanner de codes-barres et QR codes
• Détection végétarien/non-végétarien
• Symboles Codex Alimentarius officiels
• Support 11 types de codes
• Interface bilingue FR/EN
```

### 4. Enregistrer et réviser la version

- Cliquez sur "**Enregistrer**"
- Puis "**Réviser la version**"

### 5. Déployer la version

- Vérifiez tous les détails
- Cliquez sur "**Déployer vers la production**"

🎉 **C'est envoyé !**

---

## Étape 8 : Attendre la Révision (1-7 jours)

Google va maintenant réviser votre application :

**Ce qu'ils vérifient :**
- Conformité aux politiques du Play Store
- Fonctionnement de l'application
- Descriptions correctes
- Politique de confidentialité valide
- Permissions appropriées

**Durée typique :**
- Première soumission : 3-7 jours
- Mises à jour futures : 1-3 jours

**Notification :**
- Vous recevrez un email quand l'app sera approuvée
- Ou si des modifications sont nécessaires

---

## ✅ Checklist Complète

Cochez au fur et à mesure :

**Préparation**
- [ ] Code exporté depuis Emergent
- [ ] EAS CLI installé sur l'ordinateur
- [ ] Compte Expo créé et connecté

**Build**
- [ ] Commande `eas build` exécutée
- [ ] Build réussi (pas d'erreurs)
- [ ] Fichier AAB téléchargé

**Play Console**
- [ ] Nouvelle application créée
- [ ] Nom et descriptions remplis
- [ ] Icône uploadée (512x512px)
- [ ] Feature graphic créée et uploadée (1024x500px)
- [ ] Au moins 2 captures d'écran uploadées
- [ ] Catégorie sélectionnée (Alimentation et boissons)
- [ ] Classification du contenu complétée
- [ ] Public cible configuré (3+)
- [ ] Sécurité des données remplie
- [ ] Politique de confidentialité en ligne
- [ ] URL politique ajoutée dans Play Console
- [ ] Email de contact ajouté

**Publication**
- [ ] AAB uploadé dans Production
- [ ] Notes de version rédigées
- [ ] Version révisée
- [ ] Version déployée vers production
- [ ] Confirmation reçue ("En révision")

---

## 🎯 Commandes Essentielles

### Générer l'AAB
```bash
cd frontend
eas build --platform android --profile production
```

### Voir l'historique des builds
```bash
eas build:list
```

### Vérifier le statut d'un build
```bash
eas build:view [BUILD_ID]
```

---

## 🆘 Problèmes Courants

### "Build failed"
**Solution :**
```bash
# Voir les logs détaillés
eas build:view [BUILD_ID]

# Réessayer le build
eas build --platform android --profile production --clear-cache
```

### "AAB incompatible"
**Vérifiez dans `app.json` :**
```json
{
  "android": {
    "package": "com.foodscanner.app",
    "versionCode": 1  // Doit être un nombre entier
  }
}
```

### "Politique de confidentialité requise"
- Créez une page HTML simple
- Hébergez sur GitHub Pages (gratuit)
- Ajoutez l'URL dans Play Console

### "Captures d'écran invalides"
- Dimensions minimum : 320px
- Format : PNG ou JPG
- Au moins 2 captures requises

---

## 🎉 Après Publication

### Votre app sera visible à :
```
https://play.google.com/store/apps/details?id=com.foodscanner.app
```

### Prochaines mises à jour :

1. Modifiez `app.json` :
```json
{
  "version": "1.1.0",
  "android": {
    "versionCode": 2  // Toujours incrémenter
  }
}
```

2. Rebuild :
```bash
eas build --platform android --profile production
```

3. Upload dans Play Console > Production > Nouvelle version

---

## 📞 Support

**Emergent Discord** : https://discord.gg/VzKfwCXC4A  
**Expo Documentation** : https://docs.expo.dev/  
**Play Console Help** : https://support.google.com/googleplay/android-developer/

---

**Bonne chance avec votre publication ! 🚀**

Durée totale estimée : **2-3 heures** + 1-7 jours de révision Google
