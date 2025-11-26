# 🚀 SOLUTION 3 : CRÉER VOTRE FICHIER AAB VOUS-MÊME

## Guide Ultra-Simple - Étape par Étape

**⏱️ Temps total : 30-40 minutes**
**💰 Coût : 0€ (tout est gratuit)**

---

# 📋 APERÇU DES 5 GRANDES ÉTAPES

1. ✅ Installer Node.js (10 min)
2. ✅ Exporter votre code depuis Emergent (5 min)
3. ✅ Préparer votre ordinateur (5 min)
4. ✅ Créer le fichier AAB (20 min - automatique)
5. ✅ Télécharger votre fichier (2 min)

**C'est parti ! 🚀**

---

# 🎯 ÉTAPE 1 : INSTALLER NODE.JS (10 min)

## C'est quoi Node.js ?
Un logiciel gratuit nécessaire pour créer des applications. Pensez-y comme Microsoft Word, mais pour créer des apps.

---

## 📥 ACTION 1.1 : Télécharger Node.js

**1.** Ouvrez votre navigateur (Chrome, Firefox, etc.)

**2.** Allez sur ce site : **https://nodejs.org/**

**3.** Vous verrez 2 gros boutons verts :

```
┌─────────────────┐    ┌─────────────────┐
│  22.13.1 LTS    │    │  23.5.0 Current │
│  Recommended    │    │  Latest         │
│  [TÉLÉCHARGER]  │    │  [TÉLÉCHARGER]  │
└─────────────────┘    └─────────────────┘
```

**4.** Cliquez sur le bouton de **GAUCHE** (celui avec "LTS")

**5.** Un fichier va se télécharger (30-50 MB)

**6.** Attendez que le téléchargement se termine (1-3 minutes)

✅ **Fichier téléchargé !**

---

## 🔧 ACTION 1.2 : Installer Node.js

### Sur Windows :

**1.** Ouvrez votre dossier **Téléchargements**

**2.** Trouvez le fichier : `node-v22.xxx-x64.msi`

**3.** Double-cliquez dessus

**4.** Une fenêtre s'ouvre :
- Cliquez sur **"Next"** (Suivant)
- Cochez "I accept" → **"Next"**
- Laissez tout par défaut → **"Next"**
- Cliquez sur **"Install"**
- **Attendez 2-3 minutes** ⏳
- Cliquez sur **"Finish"**

### Sur Mac :

**1.** Ouvrez votre dossier **Téléchargements**

**2.** Trouvez le fichier : `node-v22.xxx.pkg`

**3.** Double-cliquez dessus

**4.** Une fenêtre s'ouvre :
- Cliquez sur **"Continuer"**
- Cliquez sur **"Accepter"**
- Cliquez sur **"Installer"**
- Entrez votre **mot de passe Mac**
- **Attendez 2-3 minutes** ⏳
- Cliquez sur **"Fermer"**

✅ **Node.js est installé !**

---

## ✔️ ACTION 1.3 : Vérifier l'installation

### Sur Windows :

**1.** Appuyez sur la touche **Windows** (en bas à gauche du clavier)

**2.** Tapez : `cmd`

**3.** Appuyez sur **Entrée**

**4.** Une fenêtre noire s'ouvre

**5.** Tapez :
```
node --version
```

**6.** Appuyez sur **Entrée**

**7.** Vous devriez voir :
```
v22.13.1
```
(ou un numéro similaire)

### Sur Mac :

**1.** Appuyez sur **Commande + Espace**

**2.** Tapez : `terminal`

**3.** Appuyez sur **Entrée**

**4.** Une fenêtre s'ouvre

**5.** Tapez :
```
node --version
```

**6.** Appuyez sur **Entrée**

**7.** Vous devriez voir :
```
v22.13.1
```

✅ **SI VOUS VOYEZ UN NUMÉRO = C'EST BON !**
❌ **Si erreur = Redémarrez l'ordinateur et réessayez**

---

# 🎯 ÉTAPE 2 : EXPORTER VOTRE CODE (5 min)

## 📱 ACTION 2.1 : Contacter le support pour l'export

Malheureusement, Emergent ne permet pas l'export direct du code par les utilisateurs. Vous devez demander au support.

**Envoyez ce message sur Discord :**

👉 https://discord.gg/VzKfwCXC4A

**Message à copier-coller :**
```
Bonjour,
J'ai besoin d'exporter le code complet de mon projet "Scanly" pour créer un fichier AAB.
Pouvez-vous me donner accès au code (ZIP ou GitHub) ?
Merci !
Email : medoulad@gmail.com
```

**Attendez leur réponse (1-24h)**

---

## 💾 ACTION 2.2 : Une fois que vous avez le code

Le support vous enverra soit :
- Un fichier **ZIP** à télécharger
- Un lien **GitHub** 

### Si c'est un ZIP :

**1.** Téléchargez le fichier ZIP

**2.** Faites un **clic droit** dessus

**3.** Choisissez **"Extraire tout"** ou **"Extract All"**

**4.** Extrayez sur le **Bureau** (pour le retrouver facilement)

**5.** Vous aurez un dossier : `scanly` ou `projet`

### Si c'est GitHub :

**1.** Allez sur le lien GitHub

**2.** Cliquez sur le bouton vert **"Code"**

**3.** Cliquez sur **"Download ZIP"**

**4.** Suivez les étapes ZIP ci-dessus

✅ **Vous avez maintenant le code sur votre ordinateur !**

---

# 🎯 ÉTAPE 3 : PRÉPARER VOTRE ORDINATEUR (10 min)

## 🔧 ACTION 3.1 : Installer EAS CLI

**1.** Ouvrez le Terminal (fenêtre noire) :
- **Windows** : Appuyez sur touche Windows, tapez `cmd`, Entrée
- **Mac** : Commande+Espace, tapez `terminal`, Entrée

**2.** Dans la fenêtre noire, tapez EXACTEMENT :
```
npm install -g eas-cli
```

**3.** Appuyez sur **Entrée**

**4.** Attendez 1-2 minutes (des lignes vont défiler)

**5.** Quand ça s'arrête, tapez :
```
eas --version
```

**6.** Appuyez sur **Entrée**

**7.** Vous devriez voir un numéro (ex: `13.2.0`)

✅ **SI VOUS VOYEZ UN NUMÉRO = C'EST BON !**

---

## 👤 ACTION 3.2 : Créer un compte Expo (gratuit)

**1.** Allez sur : **https://expo.dev/signup**

**2.** Remplissez :
- **Email** : medoulad@gmail.com (ou un autre)
- **Username** : medoulad (ou ce que vous voulez)
- **Password** : créez un mot de passe

**3.** Cliquez sur **"Sign Up"**

**4.** Vérifiez votre email

**5.** Cliquez sur le lien de confirmation

✅ **Compte créé !**

**⚠️ NOTEZ VOS IDENTIFIANTS :**
- Email : _____________________
- Mot de passe : _____________________

---

## 🔑 ACTION 3.3 : Se connecter à Expo

**1.** Dans le Terminal (fenêtre noire), tapez :
```
eas login
```

**2.** Appuyez sur **Entrée**

**3.** Il demande "Email" :
- Tapez votre email Expo
- Appuyez sur **Entrée**

**4.** Il demande "Password" :
- Tapez votre mot de passe
- ⚠️ **NORMAL** : vous ne voyez pas les caractères
- Appuyez sur **Entrée**

**5.** Vous voyez : `Logged in as [votre-email]`

✅ **Connecté !**

---

## 📂 ACTION 3.4 : Aller dans le dossier de votre projet

**1.** Dans le Terminal, tapez :
```
cd 
```
(avec un espace après "cd")

**2.** **NE PAS APPUYER SUR ENTRÉE ENCORE !**

**3.** Ouvrez l'**Explorateur** (Windows) ou **Finder** (Mac)

**4.** Trouvez votre dossier extrait (sur le Bureau normalement)

**5.** Ouvrez-le jusqu'à voir le dossier **"frontend"**

**6.** **Faites GLISSER** le dossier "frontend" dans le Terminal

**7.** Le chemin complet apparaît (ex: `C:\Users\VotreNom\Desktop\scanly\frontend`)

**8.** **MAINTENANT** appuyez sur **Entrée**

✅ **Vous êtes dans le bon dossier !**

---

## 📦 ACTION 3.5 : Installer les dépendances

**1.** Dans le Terminal, tapez :
```
npm install
```

**2.** Appuyez sur **Entrée**

**3.** **ATTENDEZ 3-5 MINUTES** (beaucoup de lignes vont défiler)

**4.** Quand ça s'arrête, vous voyez une ligne vide

✅ **Dépendances installées !**

---

# 🎯 ÉTAPE 4 : CRÉER LE FICHIER AAB (20 min)

## 🏗️ ACTION 4.1 : Lancer la construction

**C'EST LA GRANDE ÉTAPE !**

**1.** Dans le Terminal, tapez EXACTEMENT :
```
eas build --platform android --profile production
```

**2.** Appuyez sur **Entrée**

---

## ❓ ACTION 4.2 : Répondre aux questions

### QUESTION 1 : "Generate a new Android Keystore?"
```
? Generate a new Android Keystore? (Y/n)
```

**→ Tapez : `Y`**

**→ Appuyez sur Entrée**

---

### QUESTION 2 : "Would you like to automatically create an EAS project?"
```
? Would you like to automatically create an EAS project for...? (Y/n)
```

**→ Tapez : `Y`**

**→ Appuyez sur Entrée**

---

### QUESTION 3 (peut-être) : "Project name"
```
? What would you like to name your project?
```

**→ Tapez : `scanly`**

**→ Appuyez sur Entrée**

---

## 🎉 ACTION 4.3 : Le build démarre !

Vous verrez :
```
✔ Build started
🔗 Build URL: https://expo.dev/accounts/medoulad/projects/scanly/builds/xxxxx
```

**1.** COPIEZ ce lien (sélectionnez-le + Ctrl+C ou Cmd+C)

**2.** COLLEZ-le dans votre navigateur

**3.** Vous verrez une page avec :
- Une barre de progression
- Des logs qui défilent
- Le statut "Building..."

---

## ⏳ ACTION 4.4 : ATTENDEZ (15-25 minutes)

**C'EST AUTOMATIQUE !**

- ⏳ La barre progresse lentement
- 🔨 Le serveur Expo construit votre app
- ☕ Allez prendre un café !

**NE FERMEZ PAS :**
- ❌ Le Terminal
- ❌ La page web

**VOUS POUVEZ :**
- ✅ Utiliser d'autres programmes
- ✅ Naviguer sur internet
- ✅ Regarder des vidéos

---

## ✅ ACTION 4.5 : Build terminé !

Après 15-25 minutes, vous verrez :

**Sur la page web :**
```
✅ Build completed successfully!
```

**Un gros bouton bleu apparaît :**
```
[Download] 
```

🎉 **C'EST PRÊT !**

---

# 🎯 ÉTAPE 5 : TÉLÉCHARGER VOTRE FICHIER AAB (2 min)

## 📥 ACTION 5.1 : Télécharger

**1.** Cliquez sur le bouton bleu **"Download"**

**2.** Un fichier se télécharge :
```
build-1234567890.aab
```
(ou un nom similaire)

**3.** Taille : environ 30-80 MB

**4.** Le téléchargement prend 1-3 minutes

---

## 💾 ACTION 5.2 : Sauvegarder le fichier

**1.** Le fichier va dans votre dossier **Téléchargements**

**2.** **Déplacez-le sur votre BUREAU** pour le retrouver facilement

**3.** **Renommez-le si vous voulez :**
- De : `build-1234567890.aab`
- À : `scanly.aab`

✅ **VOUS AVEZ VOTRE FICHIER AAB ! 🎉🎉🎉**

---

# 🎊 FÉLICITATIONS !

## ✅ CE QUE VOUS AVEZ FAIT :

1. ✅ Installé Node.js
2. ✅ Exporté votre code
3. ✅ Installé EAS CLI
4. ✅ Créé un compte Expo
5. ✅ Lancé le build
6. ✅ Téléchargé le fichier AAB

**VOUS AVEZ LE FICHIER AAB POUR PUBLIER SCANLY ! 🚀**

---

# 📱 PROCHAINE ÉTAPE : PUBLIER SUR PLAY STORE

## 🎯 Dites-moi maintenant :

> "J'ai créé le fichier AAB de Scanly ! Je suis prêt pour Play Console !"

## 🚀 Je vais ensuite vous guider pour :

1. Vous connecter à Google Play Console
2. Créer l'application "Scanly"
3. Copier-coller les textes (déjà prêts)
4. Ajouter les images
5. Uploader votre fichier `scanly.aab`
6. Publier l'application

**⏱️ Temps : 30-45 minutes**

---

# 🆘 PROBLÈMES COURANTS

## Problème 1 : "node: command not found"
**Solution :**
1. Redémarrez votre ordinateur
2. Réessayez `node --version`

## Problème 2 : "npm install" prend trop de temps
**Solution :**
- C'est NORMAL si ça prend 5-10 minutes
- Attendez patiemment

## Problème 3 : "Build failed"
**Solution :**
1. Vérifiez votre connexion internet
2. Relancez : `eas build --platform android --profile production`

## Problème 4 : "I don't have permission"
**Solution :**
- Sur Windows : Faites un clic droit sur le Terminal, "Exécuter en tant qu'administrateur"
- Sur Mac : Ajoutez `sudo` avant la commande

## Problème 5 : "Cannot find module"
**Solution :**
1. Vérifiez que vous êtes dans le bon dossier (frontend)
2. Relancez : `npm install`

---

# 📞 BESOIN D'AIDE ?

**Dites-moi où vous êtes bloqué :**
- "Je n'arrive pas à installer Node.js"
- "Je ne trouve pas le dossier frontend"
- "Le build a échoué"
- Autre chose ?

**Je vous aide immédiatement ! 😊**

---

**🚀 Commencez par l'ÉTAPE 1 maintenant !**

**Dites-moi quand vous êtes prêt ou si vous avez des questions ! 💪**
