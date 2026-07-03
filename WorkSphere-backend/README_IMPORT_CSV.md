# Import des Employés via CSV

## Structure du fichier CSV

Le fichier CSV utilisé pour l'initialisation des employés doit impérativement respecter la structure suivante (les en-têtes de colonnes doivent être exactement ceux-ci) :

| Colonne      | Type / Format     | Obligatoire | Description                                                                 |
|--------------|-------------------|-------------|-----------------------------------------------------------------------------|
| `first_name` | String            | Oui         | Prénom de l'employé                                                         |
| `last_name`  | String            | Oui         | Nom de famille de l'employé                                                 |
| `email`      | Email, String     | Oui         | Adresse email (unique dans le système, servira de login)                    |
| `role`       | Enum              | Oui         | Doit être EXACTEMENT `manager` ou `employe`. **`administrateur_rh` sera rejeté.** |
| `job_title`  | String            | Oui         | Titre du poste (ex: Développeur Backend)                                    |
| `department` | String            | Non         | Nom du département (ex: IT, Ressources Humaines)                            |
| `hire_date`  | Date (YYYY-MM-DD) | Oui         | Date d'embauche de l'employé                                                |
| `salary`     | Decimal           | Non         | Salaire (ex: 45000.50)                                                      |

## Règles Métiers Importantes (Backend)

1. **Rôle Administrateur RH Unique** : 
   Une entreprise ne peut posséder qu'**un seul et unique** utilisateur ayant le rôle `administrateur_rh`. Ce rôle est automatiquement attribué au créateur du compte (lors de l'inscription de l'entreprise). Par conséquent, lors du traitement de l'import CSV, le backend devra rejeter toute ligne contenant le rôle `administrateur_rh`. Une méthode `hasAdminRh()` est disponible sur le modèle `Company` pour faire des vérifications de sécurité si besoin.
   
2. **Statut d'activation (`is_active`)** :
   Les utilisateurs générés lors de l'import CSV devront être créés avec `is_active = false`. Ils s'activeront plus tard via le mécanisme des `activation_tokens`. L'administrateur RH, en revanche, a son compte avec `is_active = true` dès le départ.
   
3. **Relation Unique (One-to-One)** :
   La table `employees` possède une contrainte d'unicité sur la colonne `user_id`. Un utilisateur ne peut avoir qu'une seule fiche employé.
