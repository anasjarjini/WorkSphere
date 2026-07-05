<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activez votre compte WorkSphere</title>
</head>
<body style="margin:0; padding:0; background-color:#F8FAFC; font-family:'Segoe UI',-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;">

    <!-- Espacement haut -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F8FAFC;">
        <tr>
            <td align="center" style="padding:40px 16px 20px;">

                <!-- Carte principale -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px; background-color:#FFFFFF; border-radius:12px; box-shadow:0 1px 3px rgba(0,0,0,0.08),0 1px 2px rgba(0,0,0,0.06);">

                    <!-- Header indigo -->
                    <tr>
                        <td style="background-color:#6366F1; border-radius:12px 12px 0 0; padding:32px 40px 24px; text-align:center;">
                            <h1 style="margin:0; color:#FFFFFF; font-size:22px; font-weight:700; letter-spacing:-0.3px;">
                                WorkSphere
                            </h1>
                            <p style="margin:6px 0 0; color:#C7D2FE; font-size:13px; font-weight:400;">
                                Plateforme RH
                            </p>
                        </td>
                    </tr>

                    <!-- Contenu -->
                    <tr>
                        <td style="padding:36px 40px 28px;">

                            <h2 style="margin:0 0 6px; color:#1E1B4B; font-size:20px; font-weight:700;">
                                Bienvenue sur WorkSphere, {{ $user->name }} !
                            </h2>

                            <p style="margin:16px 0 0; color:#475569; font-size:15px; line-height:1.6;">
                                Votre compte a été créé par votre administrateur RH. Pour finaliser votre inscription et accéder à votre espace, veuillez activer votre compte en cliquant sur le bouton ci-dessous.
                            </p>

                            <p style="margin:16px 0 0; color:#475569; font-size:15px; line-height:1.6;">
                                Vous pourrez ensuite définir votre mot de passe et personnaliser votre profil.
                            </p>

                            <!-- Bouton CTA -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0 0;">
                                <tr>
                                    <td align="center">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td align="center" style="background-color:#6366F1; border-radius:8px; box-shadow:0 1px 2px rgba(99,102,241,0.3);">
                                                    <a href="{{ $activationUrl }}"
                                                       style="display:inline-block; padding:14px 36px; color:#FFFFFF; font-size:15px; font-weight:600; text-decoration:none; letter-spacing:0.2px; border-radius:8px; background-color:#6366F1;">
                                                        Activer mon compte
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Lien de secours -->
                            <p style="margin:20px 0 0; color:#64748B; font-size:13px; line-height:1.5; text-align:center;">
                                Si le bouton ne fonctionne pas, copiez le lien suivant dans votre navigateur&nbsp;:<br>
                                <a href="{{ $activationUrl }}" style="color:#6366F1; word-break:break-all; font-size:12px;">
                                    {{ $activationUrl }}
                                </a>
                            </p>

                            <!-- Séparateur -->
                            <hr style="border:none; border-top:1px solid #E2E8F0; margin:32px 0 0;">

                            <!-- Footer info -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;">
                                <tr>
                                    <td style="padding:0;">
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td valign="top" style="width:28px; padding:2px 10px 0 0;">
                                                    <span style="display:inline-block; width:20px; height:20px; background-color:#EEF2FF; color:#6366F1; border-radius:50%; text-align:center; font-size:11px; font-weight:700; line-height:20px;">⏱</span>
                                                </td>
                                                <td valign="top">
                                                    <p style="margin:0; color:#64748B; font-size:12px; line-height:1.5;">
                                                        <strong style="color:#475569;">Lien valable 7 jours</strong><br>
                                                        Ce lien d'activation expire dans 7 jours. Passé ce délai, contactez votre administrateur RH pour en recevoir un nouveau.
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:12px 0 0;">
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td valign="top" style="width:28px; padding:2px 10px 0 0;">
                                                    <span style="display:inline-block; width:20px; height:20px; background-color:#FEF2F2; color:#EF4444; border-radius:50%; text-align:center; font-size:11px; font-weight:700; line-height:20px;">!</span>
                                                </td>
                                                <td valign="top">
                                                    <p style="margin:0; color:#64748B; font-size:12px; line-height:1.5;">
                                                        <strong style="color:#475569;">Vous n'avez pas demandé cet email ?</strong><br>
                                                        Si vous n'êtes pas à l'origine de cette demande, ignorez simplement cet email. Aucune action n'est requise de votre part.
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color:#F8FAFC; border-radius:0 0 12px 12px; border-top:1px solid #E2E8F0; padding:20px 40px; text-align:center;">
                            <p style="margin:0; color:#94A3B8; font-size:11px; line-height:1.5;">
                                &copy; {{ date('Y') }} WorkSphere &mdash; Plateforme RH. Tous droits réservés.<br>
                                Cet email a été généré automatiquement, merci de ne pas y répondre.
                            </p>
                        </td>
                    </tr>
                </table>

                <!-- Espacement bas -->
                <p style="margin:24px 0 0; color:#94A3B8; font-size:11px; text-align:center;">
                    WorkSphere &mdash; <span style="color:#6366F1;">Simplifiez la gestion RH de votre entreprise</span>
                </p>

            </td>
        </tr>
    </table>

</body>
</html>
