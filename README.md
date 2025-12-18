# Laraclette - Application de streaming musical

Application web de streaming musical inspirée de Spotify, construite avec Laravel, Vue.js, Inertia.js et Tailwind CSS.

## 🎵 Fonctionnalités

- **Gestion de tracks** : Ajout, modification, suppression de morceaux avec upload de fichiers audio et images
- **Lecteur audio intégré** : Lecteur audio persistant avec contrôles de lecture, shuffle, queue
- **Playlists** : Création et gestion de playlists personnalisées
- **API REST** : API complète avec authentification par clé API
- **Interface moderne** : Design inspiré de Spotify avec mode sombre
- **Recherche** : Recherche de tracks en temps réel
- **Authentification** : Système d'authentification classique ou par clé API

## 🚀 Technologies utilisées

- **Backend** : Laravel 12
- **Frontend** : Vue.js 3 (Composition API)
- **Framework CSS** : Tailwind CSS 4
- **Adapter** : Inertia.js
- **UI Components** : Shadcn/UI (Reka UI)
- **Icons** : Lucide Vue Next
- **Routes** : Ziggy.js

## 📋 Prérequis

- PHP >= 8.2
- Composer
- Node.js >= 18
- npm ou yarn
- SQLite (ou MySQL/PostgreSQL)

## 🔧 Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/VOTRE_USERNAME/laraclette_IIM.git
   cd laraclette_IIM
   ```

2. **Installer les dépendances PHP**
   ```bash
   composer install
   ```

3. **Installer les dépendances Node.js**
   ```bash
   npm install
   ```

4. **Configurer l'environnement**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Configurer la base de données**
   
   Modifiez `.env` pour configurer votre base de données :
   ```env
   DB_CONNECTION=sqlite
   DB_DATABASE=/chemin/vers/database/database.sqlite
   ```
   
   Ou créez le fichier SQLite :
   ```bash
   touch database/database.sqlite
   ```

6. **Exécuter les migrations**
   ```bash
   php artisan migrate
   ```

7. **Créer le lien symbolique pour le storage**
   ```bash
   php artisan storage:link
   ```

8. **Compiler les assets**
   ```bash
   npm run build
   ```
   
   Ou en mode développement :
   ```bash
   npm run dev
   ```

9. **Lancer le serveur**
   ```bash
   php artisan serve
   ```

L'application sera accessible sur `http://localhost:8000`

## 📚 Documentation

- **[ROUTES.md](./ROUTES.md)** : Documentation complète de toutes les routes de l'application
- **[API_KEYS.md](./API_KEYS.md)** : Guide pour créer et utiliser les clés API

## 🔑 Utilisation de l'API

### Créer une clé API

```bash
curl -X POST http://localhost:8000/api/api-keys \
  -H "Content-Type: application/json" \
  -d '{"name": "Mon app", "email": "test@example.com"}'
```

### Utiliser la clé API

```bash
curl -H "x-api-key: VOTRE_CLE_API" \
  http://localhost:8000/api/playlists
```

Pour plus de détails, consultez [API_KEYS.md](./API_KEYS.md) et [ROUTES.md](./ROUTES.md).

## 🗂️ Structure du projet

```
laraclette_IIM/
├── app/
│   ├── Http/
│   │   ├── Controllers/      # Contrôleurs Laravel
│   │   └── Middleware/        # Middlewares personnalisés
│   └── Models/                # Modèles Eloquent
├── database/
│   └── migrations/            # Migrations de base de données
├── resources/
│   ├── js/
│   │   ├── components/        # Composants Vue réutilisables
│   │   ├── composables/       # Composables Vue
│   │   ├── layouts/           # Layouts Inertia
│   │   └── pages/             # Pages Inertia
│   └── views/                 # Templates Blade
├── routes/
│   ├── web.php                # Routes web
│   └── api.php                # Routes API
└── public/                     # Assets publics
```

## 🎨 Fonctionnalités principales

### Lecteur audio

- Contrôles de lecture (play/pause, suivant/précédent)
- Mode shuffle
- Affichage de la queue
- Contrôle du volume
- Barre de progression interactive

### Gestion des tracks

- Upload de fichiers audio (MP3, WAV, OGG, M4A)
- Upload d'images de couverture
- Métadonnées (titre, artiste)
- Recherche en temps réel
- Édition et suppression

### Playlists

- Création de playlists personnalisées
- Ajout de tracks aux playlists
- Gestion des playlists (édition, suppression)

## 🔒 Sécurité

- Authentification Laravel Fortify
- Validation des fichiers uploadés
- Protection CSRF
- Authentification par clé API pour l'API REST

## 📝 Scripts disponibles

```bash
# Développement
npm run dev          # Lancer Vite en mode développement
php artisan serve    # Lancer le serveur Laravel

# Production
npm run build        # Compiler les assets pour la production
npm run build:ssr    # Compiler avec SSR

# Code quality
npm run lint         # Linter le code
npm run format       # Formater le code
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est sous licence MIT.

## 👤 Auteur

Développé dans le cadre d'un projet académique.

---

Pour toute question ou problème, consultez la documentation dans les fichiers `ROUTES.md` et `API_KEYS.md`.
