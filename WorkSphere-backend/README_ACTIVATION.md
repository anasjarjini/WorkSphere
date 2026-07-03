# Guide de Test — Activation de Compte Employé

## Endpoint

```
POST /api/activate
Content-Type: application/json
```

### Body attendu

```json
{
    "token": "VOTRE_TOKEN_ICI",
    "password": "MonMotDePasse1!",
    "password_confirmation": "MonMotDePasse1!"
}
```

---

## Prérequis : Récupérer un token valide

Après un import CSV, chaque employé a un `ActivationToken` en base.
Récupérez-en un via Tinker :

```bash
php artisan tinker
```

```php
// Voir tous les tokens (avec statut)
\App\Models\ActivationToken::with('user')
    ->get(['id', 'user_id', 'token', 'expires_at', 'used_at']);

// Récupérer le token brut d'un token précis
$t = \App\Models\ActivationToken::first();
echo $t->token;
```

---

## Scénario 1 — ✅ Token valide (activation réussie)

### Simuler (token frais, pas encore utilisé)

```php
// Dans Tinker : vérifier que expires_at est dans le futur et used_at est null
$t = \App\Models\ActivationToken::first();
echo $t->expires_at;  // doit être > maintenant
echo $t->used_at;     // doit être null
```

### Requête cURL

```bash
curl -s -X POST http://localhost:8000/api/activate \
  -H "Content-Type: application/json" \
  -d '{
    "token": "COPIEZ_VOTRE_TOKEN_ICI",
    "password": "MonMotDePasse1!",
    "password_confirmation": "MonMotDePasse1!"
  }' | jq .
```

### Réponse attendue — HTTP 200

```json
{
    "message": "Compte activé avec succès.",
    "user": {
        "id": 3,
        "name": "John Doe",
        "email": "john@entreprise.com",
        "company_id": 1,
        "is_active": true,
        "employee": {
            "id": 2,
            "first_name": "John",
            "last_name": "Doe",
            "job_title": "Développeur",
            ...
        },
        "roles": [
            { "name": "employe" }
        ]
    },
    "token": "3|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

---

## Scénario 2 — ⏰ Token expiré

### Simuler un token expiré via Tinker

```bash
php artisan tinker
```

```php
// Option A : expirer UN token précis
\App\Models\ActivationToken::where('token', 'VOTRE_TOKEN')->update([
    'expires_at' => now()->subHour(),  // 1h dans le passé
]);

// Option B : expirer LE PREMIER token de la table
\App\Models\ActivationToken::first()->update([
    'expires_at' => now()->subMinutes(1),
]);
```

### Requête cURL

```bash
curl -s -X POST http://localhost:8000/api/activate \
  -H "Content-Type: application/json" \
  -d '{
    "token": "TOKEN_EXPIRÉ",
    "password": "MonMotDePasse1!",
    "password_confirmation": "MonMotDePasse1!"
  }' | jq .
```

### Réponse attendue — HTTP 410 Gone

```json
{
    "message": "Ce lien a expiré. Veuillez demander un nouveau lien à votre administrateur.",
    "error": "token_expired"
}
```

---

## Scénario 3 — 🔒 Token déjà utilisé

### Simuler un token déjà utilisé via Tinker

```bash
php artisan tinker
```

```php
// Marquer manuellement un token comme déjà utilisé
\App\Models\ActivationToken::where('token', 'VOTRE_TOKEN')->update([
    'used_at' => now(),
]);
```

> **Astuce** : Après le Scénario 1 (activation réussie), le même token est automatiquement marqué
> `used_at = now()`. Rejouer la même requête déclenchera ce scénario 3.

### Requête cURL

```bash
curl -s -X POST http://localhost:8000/api/activate \
  -H "Content-Type: application/json" \
  -d '{
    "token": "TOKEN_DÉJÀ_UTILISÉ",
    "password": "MonMotDePasse1!",
    "password_confirmation": "MonMotDePasse1!"
  }' | jq .
```

### Réponse attendue — HTTP 410 Gone

```json
{
    "message": "Ce compte a déjà été activé. Vous pouvez vous connecter directement.",
    "error": "token_already_used"
}
```

---

## Scénario 4 — ❌ Token inexistant (token falsifié ou lien corrompu)

### Requête cURL

```bash
curl -s -X POST http://localhost:8000/api/activate \
  -H "Content-Type: application/json" \
  -d '{
    "token": "token-completement-faux-abc123",
    "password": "MonMotDePasse1!",
    "password_confirmation": "MonMotDePasse1!"
  }' | jq .
```

### Réponse attendue — HTTP 422 Unprocessable Entity

> Géré directement par le `FormRequest` (règle `exists:activation_tokens,token`),
> le controller n'est jamais atteint.

```json
{
    "message": "The token field is invalid.",
    "errors": {
        "token": [
            "Ce lien d'activation est invalide ou n'existe pas."
        ]
    }
}
```

---

## Scénario 5 — ❌ Mot de passe trop faible

```bash
curl -s -X POST http://localhost:8000/api/activate \
  -H "Content-Type: application/json" \
  -d '{
    "token": "TOKEN_VALIDE",
    "password": "faible",
    "password_confirmation": "faible"
  }' | jq .
```

### Réponse attendue — HTTP 422

```json
{
    "message": "The password field must be at least 8 characters. ...",
    "errors": {
        "password": [
            "The password field must be at least 8 characters.",
            "The password field must contain at least one uppercase and one lowercase letter.",
            "The password field must contain at least one number.",
            "The password field must contain at least one symbol."
        ]
    }
}
```

---

## Résumé des codes HTTP

| Cas                        | Code HTTP | `error` key          |
|----------------------------|-----------|----------------------|
| Activation réussie         | 200 OK    | —                    |
| Token inexistant           | 422       | (erreur de validation)|
| Mot de passe faible        | 422       | (erreur de validation)|
| Token expiré               | 410 Gone  | `token_expired`      |
| Token déjà utilisé         | 410 Gone  | `token_already_used` |

---

## Utiliser le token Sanctum retourné

Après une activation réussie, utilisez le `token` retourné pour les requêtes authentifiées :

```bash
curl -s -X GET http://localhost:8000/api/user \
  -H "Authorization: Bearer 3|xxxxxxxxxxx" | jq .
```
