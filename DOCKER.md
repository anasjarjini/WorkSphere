# WorkSphere Docker development environment

The development stack contains Angular, Laravel, MySQL, a Laravel queue worker,
and the Laravel scheduler.

The backend image uses PHP 8.4 because the committed Composer lock file includes
Symfony 8.1 packages that require PHP 8.4.1 or newer.

## First start

The backend requires its normal Laravel `.env` file and application key:

```bash
test -f WorkSphere-backend/.env || cp WorkSphere-backend/.env.example WorkSphere-backend/.env
docker compose build
docker compose run --rm --no-deps backend php artisan key:generate
docker compose up -d
```

The `migrate` service runs `php artisan migrate --force` automatically after
MySQL becomes healthy. It is safe to run again because Laravel only applies
pending migrations.

Open:

- Angular: <http://localhost:4200>
- Laravel health endpoint: <http://localhost:8000/up>
- MySQL from the host: `127.0.0.1:3307`

Containers connect to MySQL with hostname `mysql` and port `3306`. The host
port `3307` is only for database tools installed on the host.

## Daily commands

```bash
docker compose up -d
docker compose ps
docker compose logs -f
docker compose logs -f backend
docker compose exec backend php artisan migrate:status
docker compose exec backend php artisan test
docker compose exec frontend npm run build
docker compose down
```

After changing `composer.lock` or `package-lock.json`, rebuild the images and
refresh the corresponding dependency volume:

```bash
docker compose build backend frontend
docker compose run --rm backend composer install
docker compose run --rm frontend npm ci
```

## Configuration

Docker-specific values can be changed by copying `.env.docker.example` to the
repository root as `.env`. Laravel secrets remain in
`WorkSphere-backend/.env`, which is excluded from the Docker image.

The default forwarded ports are:

| Service | Host port | Container port |
| --- | ---: | ---: |
| Angular | 4200 | 4200 |
| Laravel | 8000 | 8000 |
| MySQL | 3307 | 3306 |

## Data and cleanup

Source files are bind-mounted, so changes on the host are immediately visible
inside the development containers. Composer packages, npm packages, and MySQL
data are stored in named volumes.

```bash
# Stop and remove containers; keep database and dependencies.
docker compose down

# Delete containers and all named volumes, including the MySQL database.
docker compose down -v
```

Use `docker compose down -v` only when intentionally resetting all Docker data.
