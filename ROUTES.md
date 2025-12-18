# Guide des routes de l'application

Ce document liste toutes les routes disponibles dans l'application et explique comment y accéder.

## Base URL

- **Développement** : `http://localhost:8000`
- **Production** : Remplacez par votre domaine

## Méthodes d'authentification

L'application supporte deux méthodes d'authentification :

1. **Authentification classique** : Login/Register via le navigateur
2. **Authentification par clé API** : Utilisation du header `x-api-key`

Pour créer une clé API, voir [API_KEYS.md](./API_KEYS.md)

---

## Routes publiques (sans authentification)

### Pages principales

#### Accueil
- **URL** : `GET /`
- **Description** : Redirige vers la page des tracks
- **Accès** : Public

#### Liste des tracks
- **URL** : `GET /tracks`
- **Description** : Affiche tous les tracks disponibles
- **Accès** : Public
- **Exemple** : `http://localhost:8000/tracks`

#### Détails d'un track
- **URL** : `GET /tracks/{track}`
- **Description** : Affiche les détails d'un track spécifique
- **Accès** : Public
- **Exemple** : `http://localhost:8000/tracks/1`

### Création de tracks

#### Créer un track
- **URL** : `POST /tracks`
- **Description** : Créer un nouveau track (avec upload de fichier audio/image)
- **Accès** : Public (mais recommandé d'être authentifié)
- **Méthode** : POST avec FormData
- **Champs** :
  - `title` (optionnel) : Titre du track
  - `artist` (optionnel) : Artiste
  - `image` (optionnel) : Fichier image (max 2MB)
  - `audio` (optionnel) : Fichier audio (max 10MB)

#### Modifier un track
- **URL** : `PUT /tracks/{track}`
- **Description** : Modifier un track existant
- **Accès** : Public
- **Méthode** : PUT avec FormData

#### Supprimer un track
- **URL** : `DELETE /tracks/{track}`
- **Description** : Supprimer un track
- **Accès** : Public

---

## Routes API Keys (authentification optionnelle)

Ces routes peuvent être accessibles avec ou sans authentification. Si vous fournissez une clé API dans le header `x-api-key`, vous serez automatiquement authentifié.

### Liste des clés API
- **URL** : `GET /api-keys`
- **Description** : Liste toutes vos clés API
- **Accès** : 
  - Sans auth : Redirige vers `/api-keys/create`
  - Avec clé API : Affiche vos clés
  - Avec login : Affiche vos clés
- **Exemple** : `http://localhost:8000/api-keys`

### Créer une clé API
- **URL** : `GET /api-keys/create`
- **Description** : Formulaire de création d'une clé API
- **Accès** : Public
- **Exemple** : `http://localhost:8000/api-keys/create`

- **URL** : `POST /api-keys`
- **Description** : Créer une nouvelle clé API
- **Accès** : Public (crée un compte automatiquement si email fourni)
- **Champs** :
  - `name` (requis) : Nom de la clé API
  - `email` (requis) : Email pour créer/associer un compte

### Détails d'une clé API
- **URL** : `GET /api-keys/{apiKey}`
- **Description** : Affiche les détails d'une clé API
- **Accès** : Propriétaire uniquement (via clé API ou login)
- **Exemple** : `http://localhost:8000/api-keys/1`

### Modifier une clé API
- **URL** : `GET /api-keys/{apiKey}/edit`
- **Description** : Formulaire d'édition
- **Accès** : Propriétaire uniquement

- **URL** : `PUT /api-keys/{apiKey}`
- **Description** : Modifier le nom d'une clé API
- **Accès** : Propriétaire uniquement
- **Champs** :
  - `name` (requis) : Nouveau nom

### Supprimer une clé API
- **URL** : `DELETE /api-keys/{apiKey}`
- **Description** : Supprimer une clé API
- **Accès** : Propriétaire uniquement

---

## Routes Playlists (authentification requise)

Ces routes nécessitent une authentification (login classique ou clé API).

### Liste des playlists
- **URL** : `GET /playlists`
- **Description** : Liste toutes vos playlists
- **Accès** : Authentifié uniquement
- **Exemple** : `http://localhost:8000/playlists`

### Créer une playlist
- **URL** : `GET /playlists/create`
- **Description** : Formulaire de création
- **Accès** : Authentifié uniquement

- **URL** : `POST /playlists`
- **Description** : Créer une nouvelle playlist
- **Accès** : Authentifié uniquement
- **Champs** :
  - `title` (requis) : Titre de la playlist

### Détails d'une playlist
- **URL** : `GET /playlists/{playlist}`
- **Description** : Affiche une playlist avec ses tracks
- **Accès** : Propriétaire uniquement
- **Exemple** : `http://localhost:8000/playlists/1`

### Modifier une playlist
- **URL** : `GET /playlists/{playlist}/edit`
- **Description** : Formulaire d'édition
- **Accès** : Propriétaire uniquement

- **URL** : `PUT /playlists/{playlist}`
- **Description** : Modifier le titre d'une playlist
- **Accès** : Propriétaire uniquement
- **Champs** :
  - `title` (requis) : Nouveau titre

### Supprimer une playlist
- **URL** : `DELETE /playlists/{playlist}`
- **Description** : Supprimer une playlist
- **Accès** : Propriétaire uniquement

---

## Routes API REST (authentification par clé API)

Ces routes nécessitent le header `x-api-key` pour fonctionner.

### Créer une clé API (publique)
- **URL** : `POST /api/api-keys`
- **Description** : Créer une clé API via l'API
- **Accès** : Public
- **Headers** : `Content-Type: application/json`
- **Body** :
  ```json
  {
    "name": "Mon app",
    "email": "test@example.com"
  }
  ```
- **Réponse** :
  ```json
  {
    "success": true,
    "api_key": "votre_cle_api_64_caracteres",
    "message": "API key created successfully!"
  }
  ```

### Liste des playlists
- **URL** : `GET /api/playlists`
- **Description** : Récupère toutes les playlists de l'utilisateur avec ses tracks
- **Accès** : Clé API requise
- **Headers** : `x-api-key: VOTRE_CLE_API`
- **Réponse** :
  ```json
  {
    "data": [
      {
        "id": 1,
        "slug": "ma-playlist",
        "title": "Ma Playlist",
        "user_id": 1,
        "tracks": [...]
      }
    ]
  }
  ```

### Liste des clés API
- **URL** : `GET /api/api-keys`
- **Description** : Liste toutes vos clés API
- **Accès** : Clé API requise
- **Headers** : `x-api-key: VOTRE_CLE_API`

### Détails d'une clé API
- **URL** : `GET /api/api-keys/{apiKey}`
- **Description** : Détails d'une clé API
- **Accès** : Clé API requise (propriétaire uniquement)

### Modifier une clé API
- **URL** : `PUT /api/api-keys/{apiKey}`
- **Description** : Modifier le nom d'une clé API
- **Accès** : Clé API requise (propriétaire uniquement)
- **Headers** : `Content-Type: application/json`
- **Body** :
  ```json
  {
    "name": "Nouveau nom"
  }
  ```

### Supprimer une clé API
- **URL** : `DELETE /api/api-keys/{apiKey}`
- **Description** : Supprimer une clé API
- **Accès** : Clé API requise (propriétaire uniquement)

---

## Routes d'authentification

### Dashboard
- **URL** : `GET /dashboard`
- **Description** : Tableau de bord utilisateur
- **Accès** : Authentifié + Email vérifié
- **Exemple** : `http://localhost:8000/dashboard`

### Login
- **URL** : `GET /login`
- **Description** : Page de connexion
- **Accès** : Public

### Register
- **URL** : `GET /register`
- **Description** : Page d'inscription
- **Accès** : Public

### Settings
Les routes de paramètres sont disponibles sous `/settings/*` (voir `routes/settings.php`)

---

## Exemples d'utilisation

### Avec curl (clé API)

```bash
# Créer une clé API
curl -X POST http://localhost:8000/api/api-keys \
  -H "Content-Type: application/json" \
  -d '{"name": "Mon app", "email": "test@example.com"}'

# Récupérer les playlists
curl -H "x-api-key: VOTRE_CLE_API" \
  http://localhost:8000/api/playlists

# Accéder à la page web avec clé API
curl -H "x-api-key: VOTRE_CLE_API" \
  http://localhost:8000/api-keys
```

### Avec JavaScript (fetch)

```javascript
// Créer une clé API
fetch('http://localhost:8000/api/api-keys', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Mon app',
        email: 'test@example.com'
    })
})
.then(response => response.json())
.then(data => {
    console.log('Clé API créée:', data.api_key);
    
    // Utiliser la clé pour accéder aux playlists
    return fetch('http://localhost:8000/api/playlists', {
        headers: {
            'x-api-key': data.api_key
        }
    });
})
.then(response => response.json())
.then(data => console.log('Playlists:', data));
```

### Accès web avec clé API

Pour accéder aux pages web avec votre clé API, vous pouvez utiliser un outil comme Postman ou ajouter le header dans votre navigateur via une extension.

---

## Notes importantes

1. **Clés API** : Une fois créée, votre clé API vous authentifie automatiquement sur toutes les routes web et API
2. **Sessions** : L'authentification classique utilise des sessions cookies
3. **CORS** : Les routes API peuvent nécessiter une configuration CORS pour les requêtes cross-origin
4. **Rate limiting** : Certaines routes peuvent avoir des limites de taux (à configurer selon vos besoins)

Pour plus d'informations sur les clés API, consultez [API_KEYS.md](./API_KEYS.md)

