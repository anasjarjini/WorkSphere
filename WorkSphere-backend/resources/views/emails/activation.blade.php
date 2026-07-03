<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Activation de votre compte WorkSphere</title>
</head>
<body style="font-family: Arial, sans-serif; background:#f5f5f5; padding: 40px;">
    <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 40px;">
        <h2 style="color: #1a1a2e;">Bienvenue sur WorkSphere, {{ $user->name }} !</h2>
        <p>Votre compte a été créé par votre administrateur RH. Cliquez sur le bouton ci-dessous pour activer votre compte et définir votre mot de passe.</p>
        <p>
            <a href="{{ $activationUrl }}"
               style="display:inline-block; padding: 12px 24px; background:#6c63ff; color:#fff; border-radius:6px; text-decoration:none; font-weight:bold;">
                Activer mon compte
            </a>
        </p>
        <p style="color:#999; font-size:12px;">Ce lien expire dans 7 jours. Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.</p>
        <hr style="border:none; border-top:1px solid #eee; margin-top:30px;">
        <p style="color:#bbb; font-size:11px;">WorkSphere — Plateforme RH</p>
    </div>
</body>
</html>
