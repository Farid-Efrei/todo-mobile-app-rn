# 📱 Todo Mobile App - React Native

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-0.79.5-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-~53.0.20-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Convex](https://img.shields.io/badge/Convex-1.25.4-FF6B6B?style=for-the-badge&logo=convex&logoColor=white)

_Une application de gestion de tâches élégante et moderne construite avec React Native et Expo_

</div>

---

## 🌟 À propos | About

**FR:** Cette application Todo moderne offre une expérience utilisateur fluide et intuitive pour gérer vos tâches quotidiennes. Développée avec les dernières technologies React Native et Expo, elle propose une interface élégante avec support du thème sombre/clair et une synchronisation en temps réel.

**EN:** This modern Todo application offers a smooth and intuitive user experience for managing your daily tasks. Built with the latest React Native and Expo technologies, it features an elegant interface with dark/light theme support and real-time synchronization.

---

## 🚀 Technologies utilisées | Tech Stack

### Frontend

- **React Native 0.79.5** - Framework mobile cross-platform
- **Expo ~53.0.20** - Plateforme de développement
- **TypeScript 5.8.3** - Typage statique
- **Expo Router ~5.1.4** - Navigation file-based
- **React Native Reanimated ~3.17.4** - Animations fluides

### Backend & Database

- **Convex 1.25.4** - Backend-as-a-Service avec base de données temps réel
- **Real-time synchronization** - Mise à jour instantanée

### UI/UX

- **Expo Linear Gradient** - Dégradés élégants
- **Expo Vector Icons** - Icônes vectorielles
- **React Native Safe Area Context** - Gestion des zones sûres
- **Custom theming** - Système de thèmes personnalisé

---

## ✨ Fonctionnalités | Features

- ✅ **Gestion complète des tâches** | Complete task management
- 🎨 **Thème sombre/clair** | Dark/Light theme
- 📱 **Interface responsive** | Responsive design
- ⚡ **Synchronisation temps réel** | Real-time sync
- 🔄 **Édition en ligne** | Inline editing
- 📊 **Statistiques de progression** | Progress statistics
- 🎯 **Interface intuitive** | Intuitive interface
- 🌐 **Support multiplateforme** | Cross-platform support (iOS, Android, Web)

---

## 🛠️ Installation et Configuration | Setup

### Prérequis | Prerequisites

- Node.js (v18 ou plus récent | v18 or newer)
- npm ou yarn
- Expo CLI (`npm install -g @expo/cli`)
- Un compte Convex (gratuit | free account)

### 1. Cloner le projet | Clone the project

```bash
git clone https://github.com/Farid-Efrei/todo-mobile-app-rn.git
cd todo-mobile-app-rn
```

### 2. Installer les dépendances | Install dependencies

```bash
npm install
```

### 3. Configuration Convex | Convex Setup

```bash
# Installer Convex CLI | Install Convex CLI
npm install -g convex

# Se connecter à Convex | Login to Convex
npx convex login

# Initialiser le projet Convex | Initialize Convex project
npx convex init

# Déployer le schéma | Deploy schema
npx convex deploy
```

### 4. Lancer l'application | Start the app

```bash
# Démarrer le serveur de développement | Start development server
npm start

# Ou pour une plateforme spécifique | Or for specific platform
npm run android  # Android
npm run ios       # iOS
npm run web       # Web
```

---

## 🚀 Scripts disponibles | Available Scripts

```bash
npm start          # Démarrer Expo | Start Expo
npm run android    # Lancer sur Android | Run on Android
npm run ios        # Lancer sur iOS | Run on iOS
npm run web        # Lancer sur Web | Run on Web
npm run lint       # Vérifier le code | Lint code
npm run reset-project  # Réinitialiser | Reset project
```

---

## 📱 Déploiement | Deployment

### EAS Build (Recommandé | Recommended)

```bash
# Installer EAS CLI | Install EAS CLI
npm install -g eas-cli

# Se connecter | Login
eas login

# Configurer le build | Configure build
eas build:configure

# Build pour production | Build for production
eas build --platform all
```

### Expo Go (Développement | Development)

L'application peut être testée directement avec Expo Go en scannant le QR code généré par `npm start`.

---

## 🏗️ Architecture du projet | Project Architecture

```
📁 todo-mobile-app-rn/
├── 📁 app/                    # Navigation (Expo Router)
│   ├── 📁 (tabs)/            # Navigation par onglets
│   └── _layout.tsx           # Layout principal
├── 📁 assets/                # Ressources statiques
│   ├── 📁 images/            # Images et icônes
│   └── 📁 styles/            # Styles partagés
├── 📁 components/            # Composants réutilisables
├── 📁 convex/                # Backend Convex
│   ├── schema.ts             # Schéma base de données
│   └── todos.ts              # API des tâches
└── 📁 hooks/                 # Hooks personnalisés
```

---

## 🎯 Fonctionnalités à venir | Upcoming Features

- [ ] 📅 **Dates d'échéance** | Due dates
- [ ] 🏷️ **Catégories et tags** | Categories and tags
- [ ] 🔔 **Notifications push** | Push notifications
- [ ] 👥 **Partage de listes** | List sharing
- [ ] 📈 **Analytiques avancées** | Advanced analytics
- [ ] 🎨 **Thèmes personnalisés** | Custom themes
- [ ] 🔍 **Recherche et filtres** | Search and filters
- [ ] ☁️ **Synchronisation cloud** | Cloud sync

---

## 👨‍💻 À propos de l'auteur | About the Author

<div align="center">

### 🌟 Fairytale-Dev

_Étudiant développeur idéaliste et rêveur_ | _Idealistic and dreamy student developer_

Passionné de technologie, de jeux vidéo et d'animes, je créé des applications avec l'espoir de rendre le monde un peu plus magique, une ligne de code à la fois.

_Passionate about technology, video games and anime, I create applications with the hope of making the world a little more magical, one line of code at a time._

---

**"Coder, c'est comme écrire une histoire - chaque fonction a son rôle, chaque variable son caractère"**

_"Coding is like writing a story - every function has its role, every variable its character"_

</div>

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

**FR:**

- 🐛 Signaler des bugs
- 💡 Proposer de nouvelles fonctionnalités
- 🔧 Soumettre des pull requests
- 📖 Améliorer la documentation

**EN:**

- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- 📖 Improve documentation

---

## 📄 Licence | License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

_This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details._

---

## 🙏 Remerciements | Acknowledgments

- [Expo Team](https://expo.dev) pour l'écosystème incroyable
- [Convex](https://convex.dev) pour le backend temps réel
- [React Native Community](https://reactnative.dev) pour le framework
- Tous les contributeurs open source | All open source contributors

---

<div align="center">

**Fait avec ❤️ par Fairytale-Dev**

_Made with ❤️ by Fairytale-Dev_

[🌟 Star ce projet](https://github.com/Farid-Efrei/todo-mobile-app-rn) si il vous plaît !

_[🌟 Star this project](https://github.com/Farid-Efrei/todo-mobile-app-rn) if you like it!_

</div>
