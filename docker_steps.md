The best approach is to Dockerize WorkSphere in two stages: first a beginner-friendly development environment, then a production setup.

## Recommended architecture

```text
Browser
 ├── http://localhost:4200 → Angular frontend container
 └── http://localhost:8000 → Laravel backend container
                                  ├── MySQL container
                                  ├── Queue worker container
                                  └── Scheduler container
```

I recommend MySQL rather than SQLite because the current backend environment already uses MySQL, while [`.env.example`](/home/anasjarjini/Music/Project%20stage/WorkSphere/WorkSphere-backend/.env.example) still defaults to SQLite.

## Implementation plan

### Phase 1 — Learn Docker basics

Before changing the application, learn these concepts through WorkSphere:

1. Image vs container.
2. Writing a `Dockerfile`.
3. Port mapping: `4200:4200`, `8000:8000`, `3306:3306`.
4. Bind mounts for live code updates.
5. Named volumes for MySQL data and dependencies.
6. Container networking: Laravel will use `DB_HOST=mysql`, not `127.0.0.1`.
7. Docker Compose for starting the whole application.
8. Logs, shell access, rebuilds, and container cleanup.

Useful commands will include:

```bash
docker compose build
docker compose up -d
docker compose ps
docker compose logs -f backend
docker compose exec backend php artisan migrate
docker compose down
```

### Phase 2 — Development Docker environment

Create a root [`compose.yaml`](/home/anasjarjini/Music/Project%20stage/WorkSphere/compose.yaml) with these services:

| Service | Purpose | Port |
|---|---|---:|
| `frontend` | Angular 22 development server with hot reload | 4200 |
| `backend` | Laravel HTTP API | 8000 |
| `mysql` | Application database | 3306 |
| `queue` | Laravel queued emails/jobs | — |
| `scheduler` | Laravel scheduled commands | — |

Planned changes:

- Improve the existing backend [`Dockerfile`](/home/anasjarjini/Music/Project%20stage/WorkSphere/WorkSphere-backend/Dockerfile).
- Add `WorkSphere-frontend/Dockerfile` using Node 24.15, matching Angular 22’s requirements.
- Add a frontend `.dockerignore`.
- Add a safe `.env.docker.example`.
- Configure Angular with:

```bash
ng serve --host 0.0.0.0
```

- Configure Laravel Docker values:

```dotenv
APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:4200

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=worksphere

SANCTUM_STATEFUL_DOMAINS=localhost:4200
CORS_ALLOWED_ORIGINS=http://localhost:4200
```

- Preserve MySQL data through a named volume.
- Never copy the real `.env` or passwords into an image.
- Add health checks so Laravel waits for MySQL to become ready.
- Document initialization and daily commands.

The existing backend Dockerfile starts PHP-FPM on port 9000, which cannot directly answer browser HTTP requests. For development, I recommend `php artisan serve --host=0.0.0.0 --port=8000`. PHP-FPM and Nginx belong in the production phase.

### Phase 3 — Initialization workflow

The first startup should support:

```bash
docker compose build
docker compose up -d
docker compose exec backend php artisan key:generate
docker compose exec backend php artisan migrate --seed
```

Afterward:

- Angular: `http://localhost:4200`
- Laravel API: `http://localhost:8000/api`
- Logs: `docker compose logs -f`
- Artisan: `docker compose exec backend php artisan ...`
- Composer: `docker compose exec backend composer ...`
- npm: `docker compose exec frontend npm ...`

### Phase 4 — Verification

We should verify:

- Images build without relying on locally installed PHP, Composer, Node, or MySQL.
- Angular loads and reaches Laravel.
- Sanctum login and CSRF cookies work.
- Database migrations complete.
- Uploaded files remain accessible.
- Queue jobs process activation and password-reset emails.
- Scheduled attendance and reminder commands run.
- Database data survives `docker compose down` and restart.
- Backend tests and frontend build pass inside containers.

### Phase 5 — Production Docker setup

After development Docker is stable:

- Build Angular using a multi-stage image and serve it with Nginx.
- Run Laravel using PHP-FPM behind Nginx.
- Exclude development dependencies.
- Run containers as non-root users.
- Add production health checks and restart policies.
- Inject secrets at deployment time.
- Do not publish the MySQL port publicly.
- Add deployment-specific Compose overrides.

One unrelated modified Angular cache file already exists in the working tree; it should remain untouched. No files were changed during this planning step.