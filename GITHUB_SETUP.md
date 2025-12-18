# Instructions pour créer le dépôt GitHub

## Étape 1 : Créer le dépôt sur GitHub

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur le bouton **"New"** ou **"+"** en haut à droite
3. Remplissez les informations :
   - **Repository name** : `laraclette_IIM` (ou le nom de votre choix)
   - **Description** : "Application de streaming musical avec Laravel et Vue.js"
   - **Visibility** : Public ou Private (selon votre préférence)
   - **NE PAS** cocher "Initialize this repository with a README" (on en a déjà un)
4. Cliquez sur **"Create repository"**

## Étape 2 : Lier le dépôt local à GitHub

Une fois le dépôt créé sur GitHub, vous verrez des instructions. Utilisez celles pour **"push an existing repository"** :

```bash
# Ajouter le remote GitHub (remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE_USERNAME/laraclette_IIM.git

# Ou si vous utilisez SSH :
git remote add origin git@github.com:VOTRE_USERNAME/laraclette_IIM.git
```

## Étape 3 : Faire le premier commit

```bash
# Vérifier que tous les fichiers sont bien ajoutés
git status

# Faire le commit initial
git commit -m "Initial commit: Application de streaming musical Laravel + Vue.js"

# Renommer la branche principale en main (si nécessaire)
git branch -M main

# Pousser vers GitHub
git push -u origin main
```

## Étape 4 : Vérifier

Allez sur votre dépôt GitHub, vous devriez voir tous vos fichiers !

## Commandes Git utiles

```bash
# Voir l'état du dépôt
git status

# Ajouter des fichiers modifiés
git add .

# Faire un commit
git commit -m "Description des changements"

# Pousser vers GitHub
git push

# Voir l'historique des commits
git log --oneline

# Créer une nouvelle branche
git checkout -b nom-de-la-branche

# Retourner sur la branche main
git checkout main
```

## Fichiers à ne pas oublier de mettre à jour

Avant de pousser, assurez-vous que :

1. ✅ Le fichier `.env` n'est **PAS** dans le dépôt (il est dans `.gitignore`)
2. ✅ Le fichier `README.md` est à jour
3. ✅ Les fichiers de documentation (`API_KEYS.md`, `ROUTES.md`) sont présents
4. ✅ Le fichier `.env.example` existe pour que les autres puissent configurer le projet

## Problèmes courants

### Erreur : "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/VOTRE_USERNAME/laraclette_IIM.git
```

### Erreur : "failed to push some refs"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Oublier de mettre à jour le README avec le bon nom d'utilisateur
N'oubliez pas de remplacer `VOTRE_USERNAME` dans le `README.md` par votre vrai nom d'utilisateur GitHub !

