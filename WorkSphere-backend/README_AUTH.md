# Guide de Test — Login / Logout / Me

## Tableau des routes

| Méthode | Endpoint          | Middleware             | Rôle                                 |
|---------|-------------------|------------------------|--------------------------------------|
| POST    | `/api/login`      | `throttle:5,1`         | Connexion (public, rate-limité)       |
| POST    | `/api/logout`     | `auth:sanctum`         | Déconnexion (token courant seulement) |
| GET     | `/api/me`         | `auth:sanctum`         | Utilisateur connecté + relations      |

---

## Comment fonctionne `throttle:5,1`

- **Par IP** — Laravel utilise l'adresse IP de la requête comme clé de cache
- **Fenêtre glissante de 1 minute** — 5 requêtes maximum dans cette fenêtre
- **À la 6e tentative** → HTTP 429 avec headers :
  ```
  HTTP/1.1 429 Too Many Requests
  Retry-After: 42          ← secondes avant reset
  X-RateLimit-Limit: 5
  X-RateLimit-Remaining: 0
  ```
- Le compteur se **remet automatiquement à zéro** après la fenêtre de 1 minute
- Géré par le cache Laravel (file par défaut, Redis recommandé en production)

---

## Scénario 1 — ✅ Login réussi

```bash
curl -s -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@monentreprise.com",
    "password": "MonMotDePasse1!"
  }' | jq .
```

### Réponse — HTTP 200

```json
{
    "message": "Connexion réussie.",
    "user": {
        "id": 1,
        "name": "Jean Dupont",
        "email": "admin@monentreprise.com",
        "company_id": 1,
        "is_active": true,
        "employee": {
            "id": 1,
            "first_name": "Jean",
            "last_name": "Dupont",
            "job_title": "Administrateur RH"
        },
        "roles": [
            { "name": "administrateur_rh" }
        ],
        "company": {
            "id": 1,
            "name": "Mon Entreprise"
        }
    },
    "token": "1|AbCdEfGhIjKlMnOpQrStUvWxYz123456"
}
```

---

## Scénario 2 — ❌ Mauvais mot de passe (ou email inconnu)

```bash
curl -s -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@monentreprise.com",
    "password": "MauvaisMotDePasse"
  }' | jq .
```

### Réponse — HTTP 401

```json
{
    "message": "Identifiants invalides."
}
```

> **Note sécurité** : même message si l'email n'existe pas → un attaquant ne peut pas
> savoir si un email est enregistré dans la plateforme (**anti user-enumeration**).

---

## Scénario 3 — ⏳ Compte non activé (employé importé CSV mais pas encore activé)

```bash
curl -s -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "employe@monentreprise.com",
    "password": "MotDePasseCorrect1!"
  }' | jq .
```

### Réponse — HTTP 403

```json
{
    "message": "Votre compte n'est pas encore activé. Vérifiez votre email pour le lien d'activation.",
    "error": "account_inactive"
}
```

### Simuler un compte inactif via Tinker

```bash
php artisan tinker
```

```php
// Désactiver un compte pour tester
\App\Models\User::where('email', 'employe@monentreprise.com')
    ->update(['is_active' => false]);
```

---

## Scénario 4 — 🚫 Blocage après 5 tentatives ratées (rate limiting)

```bash
# Répéter 6 fois en moins d'une minute avec un mauvais mot de passe
for i in {1..6}; do
  echo "--- Tentative $i ---"
  curl -s -X POST http://localhost:8000/api/login \
    -H "Content-Type: application/json" \
    -d '{"email":"test@test.com","password":"faux"}' | jq .message
done
```

### Réponses

```
"Identifiants invalides."   # tentative 1
"Identifiants invalides."   # tentative 2
"Identifiants invalides."   # tentative 3
"Identifiants invalides."   # tentative 4
"Identifiants invalides."   # tentative 5
"Too Many Attempts."        # tentative 6 → HTTP 429 🚫
```

> Après 1 minute, le compteur se remet à zéro automatiquement.

---

## Scénario 5 — ✅ Logout (révocation du token courant uniquement)

```bash
# Utilise le token obtenu au login
TOKEN="1|AbCdEfGhIjKlMnOpQrStUvWxYz123456"

curl -s -X POST http://localhost:8000/api/logout \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" | jq .
```

### Réponse — HTTP 200

```json
{
    "message": "Déconnecté avec succès."
}
```

> Seul **ce token précis** est révoqué. Si le même user est connecté sur un autre appareil
> avec un token différent, cet autre token reste valide.

### Vérifier que le token est bien révoqué

```bash
# Ce call doit maintenant retourner 401 Unauthorized
curl -s -X GET http://localhost:8000/api/me \
  -H "Authorization: Bearer $TOKEN" | jq .
```

---

## Scénario 6 — ✅ GET /me (bootstrap Angular)

```bash
TOKEN="1|AbCdEfGhIjKlMnOpQrStUvWxYz123456"

curl -s -X GET http://localhost:8000/api/me \
  -H "Authorization: Bearer $TOKEN" | jq .
```

### Réponse — HTTP 200

```json
{
    "user": {
        "id": 1,
        "name": "Jean Dupont",
        "email": "admin@monentreprise.com",
        "is_active": true,
        "employee": { ... },
        "roles": [ { "name": "administrateur_rh" } ],
        "company": { ... }
    }
}
```

---

## Résumé des codes HTTP

| Scénario                     | Code HTTP            |
|------------------------------|----------------------|
| Login réussi                 | 200 OK               |
| Email/password invalides     | 401 Unauthorized     |
| Compte non activé            | 403 Forbidden        |
| Trop de tentatives (throttle)| 429 Too Many Requests|
| Logout réussi                | 200 OK               |
| Token révoqué / absent       | 401 Unauthorized     |

---

## Utilisation dans Angular (exemple de service)

```typescript
// Après login réussi, stocker le token
localStorage.setItem('token', response.token);

// Headers pour toutes les requêtes protégées
const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

// Bootstrap au démarrage de l'app — vérifier si la session est toujours valide
this.http.get('/api/me', { headers }).subscribe({
  next: (res) => this.currentUser.set(res.user),
  error: () => this.router.navigate(['/login']),  // token expiré → redirection
});
```
