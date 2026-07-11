<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\User;
use App\Models\Department;
use App\Models\Task;
use App\Models\TaskAssignment;
use App\Models\TaskComment;
use App\Models\Announcement;
use Illuminate\Database\Seeder;

class DemoDataSeeder extends Seeder
{
    /**
     * Seed departments, tasks, and announcements with demo data.
     */
    public function run(): void
    {
        $companies = Company::all();

        if ($companies->isEmpty()) {
            $this->command->warn('No companies found — skipping demo data.');
            return;
        }

        foreach ($companies as $company) {
            $this->seedDepartments($company);
            $this->seedTasks($company);
            $this->seedAnnouncements($company);
        }

        $this->command->info('✅ Demo data seeded successfully!');
    }

    /**
     * Create departments for a company.
     */
    private function seedDepartments(Company $company): void
    {
        $departments = [
            ['name' => 'Ressources Humaines', 'company_id' => $company->id],
            ['name' => 'Développement', 'company_id' => $company->id],
            ['name' => 'Marketing', 'company_id' => $company->id],
            ['name' => 'Design', 'company_id' => $company->id],
            ['name' => 'Finance', 'company_id' => $company->id],
            ['name' => 'Support Client', 'company_id' => $company->id],
        ];

        foreach ($departments as $dept) {
            Department::firstOrCreate(
                ['name' => $dept['name'], 'company_id' => $dept['company_id']],
                $dept
            );
        }
    }

    /**
     * Create tasks and assign them to users in the company.
     */
    private function seedTasks(Company $company): void
    {
        $users = User::where('company_id', $company->id)->get();
        $departments = Department::where('company_id', $company->id)->get();

        if ($users->isEmpty()) {
            return;
        }

        $tasks = [
            [
                'title' => 'Mise à jour du site vitrine',
                'description' => 'Refonte de la page d\'accueil avec les nouvelles couleurs de la marque. Inclut l\'optimisation mobile et l\'accessibilité.',
                'status' => 'IN_PROGRESS',
                'priority' => 'Haute',
                'due_date' => now()->addDays(14),
            ],
            [
                'title' => 'Préparation rapport trimestriel RH',
                'description' => 'Compiler les indicateurs RH du trimestre : recrutements, départs, congés, et formation.',
                'status' => 'TODO',
                'priority' => 'Moyenne',
                'due_date' => now()->addDays(30),
            ],
            [
                'title' => 'Campagne emailing newsletter',
                'description' => 'Concevoir et envoyer la newsletter mensuelle aux clients. Contenu : nouveaux produits, offres spéciales.',
                'status' => 'TODO',
                'priority' => 'Basse',
                'due_date' => now()->addDays(21),
            ],
            [
                'title' => 'Audit sécurité application',
                'description' => 'Réaliser un audit de sécurité complet : revue des accès, des logs, et des dépendances.',
                'status' => 'REVIEW',
                'priority' => 'Haute',
                'due_date' => now()->addDays(7),
            ],
            [
                'title' => 'Wireframes nouvelle feature',
                'description' => 'Créer les wireframes pour la nouvelle fonctionnalité de gestion des congés. Validation avec l\'équipe produit.',
                'status' => 'DONE',
                'priority' => 'Moyenne',
                'due_date' => now()->subDays(2),
            ],
            [
                'title' => 'Mise à jour procédure onboarding',
                'description' => 'Réviser et mettre à jour le guide d\'onboarding pour les nouveaux employés. Ajouter la section télétravail.',
                'status' => 'TODO',
                'priority' => 'Moyenne',
                'due_date' => now()->addDays(10),
            ],
            [
                'title' => 'Analyse des coûts Q3',
                'description' => 'Analyser les dépenses du troisième trimestre et préparer le budget prévisionnel Q4.',
                'status' => 'IN_PROGRESS',
                'priority' => 'Haute',
                'due_date' => now()->addDays(5),
            ],
            [
                'title' => 'Formation outils collaboratifs',
                'description' => 'Organiser une session de formation sur les nouveaux outils collaboratifs (Slack, Notion, Jira).',
                'status' => 'TODO',
                'priority' => 'Basse',
                'due_date' => now()->addDays(45),
            ],
        ];

        foreach ($tasks as $taskData) {
            $task = Task::firstOrCreate(
                ['title' => $taskData['title']],
                $taskData
            );

            // Assigner la tâche à 1-3 utilisateurs aléatoires
            $assignees = $users->random(min(rand(1, 3), $users->count()));

            foreach ($assignees as $assignee) {
                TaskAssignment::firstOrCreate([
                    'task_id' => $task->id,
                    'user_id' => $assignee->id,
                ]);
            }

            // Ajouter un commentaire sur la tâche
            $commenter = $users->random();
            TaskComment::create([
                'task_id' => $task->id,
                'user_id' => $commenter->id,
                'content' => fake()->sentence(15),
            ]);
        }
    }

    /**
     * Create demo announcements for each department.
     */
    private function seedAnnouncements(Company $company): void
    {
        $departments = Department::where('company_id', $company->id)->get();

        if ($departments->isEmpty()) {
            return;
        }

        $meetingAnnouncement = [
            'title' => 'Réunion d\'équipe hebdomadaire',
            'content' => 'Notre réunion d\'équipe aura lieu ce vendredi à 10h en salle de conférence A. Ordre du jour : avancement des projets en cours, points bloquants, et planification de la semaine prochaine.',
            'type' => 'meeting',
            'meeting_date' => now()->next('Friday')->setHour(10)->setMinute(0),
            'meeting_link' => 'https://meet.google.com/abc-defg-hij',
        ];

        $trainingAnnouncement = [
            'title' => 'Formation : Nouvelles technologies',
            'content' => 'Une session de formation sur les nouvelles technologies sera organisée le mois prochain. Inscriptions ouvertes jusqu\'au 15 du mois. Thèmes : IA générative, DevOps, et cybersécurité.',
            'type' => 'training',
            'training_link' => 'https://training.company.com/workshop',
        ];

        $generalAnnouncement = [
            'title' => '🎉 Bienvenue aux nouveaux arrivants !',
            'content' => 'Nous avons le plaisir d\'accueillir trois nouveaux talents dans notre équipe ce mois-ci. Faites-leur bon accueil !',
            'type' => 'general',
        ];

        $announcements = [$meetingAnnouncement, $trainingAnnouncement, $generalAnnouncement];

        $deptCount = 0;
        foreach ($departments as $department) {
            // Ne créer les annonces que pour les 3 premiers départements (éviter trop de répétitions)
            if ($deptCount++ >= 3) {
                break;
            }

            foreach ($announcements as $announcement) {
                Announcement::firstOrCreate(
                    [
                        'department_id' => $department->id,
                        'title' => $announcement['title'],
                    ],
                    array_merge($announcement, ['department_id' => $department->id])
                );
            }
        }
    }
}
