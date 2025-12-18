# Génération de clés API

## Comment créer une clé API

### Méthode 1 : Via l'API (sans authentification)

Vous pouvez créer une clé API directement via l'API sans être connecté :

```bash
curl -X POST http://localhost:8000/api/api-keys \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Mon app mobile",
    "email": "votre@email.com"
  }'
```

La réponse contiendra votre clé API :

```json
{
    "success": true,
    "api_key": "votre_cle_api_de_64_caracteres",
    "message": "API key created successfully!"
}
```

### Méthode 2 : Via le navigateur

1. Allez sur `/api-keys` dans votre navigateur (pas besoin de login)
2. Cliquez sur "Create" ou "Créer"
3. Entrez un nom pour votre clé API (ex: "Mon app mobile")
4. Entrez votre email (sera utilisé pour créer un compte automatiquement si nécessaire)
5. Cliquez sur "Save" ou "Enregistrer"
6. Une clé API de 64 caractères sera générée automatiquement

## Utilisation de la clé API

Une fois que vous avez votre clé API, vous pouvez l'utiliser pour vous authentifier sur toutes les routes. Il n'est **pas nécessaire** de se connecter via login/register.

### Authentification via header

Pour utiliser l'API ou accéder aux routes web, vous devez inclure la clé dans le header `x-api-key` de vos requêtes HTTP.

### Exemple avec curl

```bash
# Créer une clé API
curl -X POST http://localhost:8000/api/api-keys \
  -H "Content-Type: application/json" \
  -d '{"name": "Mon app", "email": "test@example.com"}'

# Utiliser la clé API pour accéder aux playlists
curl -H "x-api-key: VOTRE_CLE_API_ICI" http://localhost:8000/api/playlists

#si la reponse retourné ressemble a ça: {"data":[]}% , c'est que vous n'avez pas de musique dans votre playlist

# Accéder à la liste de vos clés API via le web
curl -H "x-api-key: VOTRE_CLE_API_ICI" http://localhost:8000/api-keys
```

### Exemple avec JavaScript (fetch)

```javascript
// Créer une clé API
fetch("http://localhost:8000/api/api-keys", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: "Mon app",
        email: "test@example.com",
    }),
})
    .then((response) => response.json())
    .then((data) => {
        console.log("Votre clé API:", data.api_key);

        // Utiliser la clé pour accéder aux playlists
        return fetch("http://localhost:8000/api/playlists", {
            headers: {
                "x-api-key": data.api_key,
            },
        });
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
```

## Endpoints disponibles

### API publique (sans authentification)

- `POST /api/api-keys` - Créer une nouvelle clé API (nécessite email)

### API protégée (nécessite x-api-key header)

- `GET /api/playlists` - Récupère toutes les playlists de l'utilisateur avec ses tracks
- `GET /api/api-keys` - Liste toutes vos clés API
- `GET /api/api-keys/{id}` - Détails d'une clé API
- `PUT /api/api-keys/{id}` - Modifier une clé API
- `DELETE /api/api-keys/{id}` - Supprimer une clé API

### Routes web (nécessite x-api-key header OU authentification classique)

- `GET /api-keys` - Liste de vos clés API
- `GET /api-keys/create` - Formulaire de création
- `POST /api-keys` - Créer une clé API
- `GET /api-keys/{id}` - Détails d'une clé API
- `GET /api-keys/{id}/edit` - Formulaire d'édition
- `PUT /api-keys/{id}` - Modifier une clé API
- `DELETE /api-keys/{id}` - Supprimer une clé API

## Sécurité

- Ne partagez jamais votre clé API
- Si votre clé est compromise, supprimez-la et créez-en une nouvelle
- Vous pouvez utiliser votre clé API pour accéder aux routes web sans avoir besoin de login/register
- Chaque utilisateur ne peut voir et gérer que ses propres clés API
