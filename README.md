[Please see repository's wiki.](https://github.com/nynvr/nynvrio-website/wiki)





# deployment
- vpc
- security group
- ecs cluster
- ecs service
- ecs task definition
- task
- container

# ENV: Development
- `docker compose up --build`

# ENV: Production / Build
- `docker compose -f ./docker-compose.test-build.yml up --build`
  - we need to test build locally

# python version management
- ? no need to worry - dockerfile handles the version management

# nodejs version management
- ? no need to worry - dockerfile handles the version management

# hot reload
- backend
  - we need to restart the server in order to copy the correct file to the container
- web
  - we need to restart the server in order to copy the correct file to the container


## Backend Service

### Local development
- Configure environment
    - Please refer to `/backend/app/.env-template` for the required environment variables
    - Make sure that environment variables are properly set in `/backend/app/.env`
        - DEBUG=True
        - DJANGO_SECRET_KEY=local_secret_key
        - DB_HOST=db
        - DB_PORT=5432
        - DB_NAME=nynvriodb
        - DB_USER=nynvrio
        - DB_PASSWORD=nynvriopass
    - `/backend/app/.env` file is referenced both in `docker-compose.yml` and `/backend/app/nynvrio/settings.py`
    - The shell script, `/backend/scripts/run.sh` will evaluate the DEBUG environment variable and determine whether to run on development or production mode
- Build a Docker Image and start a new Docker Container
    - From the project root, run `docker compose up --build`
    - This will also run the `web` and `db` services
    - Database
        - The app is connected to a PostgreSQL service configured in the `docker-compose.yml`
        - The database credentials are stored and configured in the `/backend/app/.env`
    - Initial data
        - The initial data was generated using the `python manage.py dumpdata` built-in command
        - The shell script `/backend/scripts/run.sh` will load initial data from `/backend/scripts/backend/scripts/local.initialdata.20241009.json` using the `python manage.py loaddata` built-in command
        - user (admin)
            - username: nynvr
            - email:
            - password: password
            - token: f53c73f61a57935dfdd2384a9269c8c2793f0075
    - Static files
        - We are running `python manage.py collectstatic --noinput` even in non production environment
            - The reason is, we don't want any surprises that static files are not being served
        - We are using [whitenoise](https://whitenoise.readthedocs.io/en/stable/index.html)
        - STATIC_URL = '/static/'
        - STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
    - "Hot reload"
        - "Hot reload" means code changes will reflect without rebuilding the app and restarting the server
        - The app will be run in development server enabling for "hot reload"
        - This is possible by using volumes in `docker-compose.yml`
- Code the changes.

### Production deployment
- Configure environment
    - Make sure that environment variables are properly set in `/backend/app/.env`
        - DEBUG=False
        - DJANGO_SECRET_KEY={{TODO}}
        - DB_HOST={{TODO}}
        - DB_PORT={{TODO}}
        - DB_NAME={{TODO}}
        - DB_USER={{TODO}}
        - DB_PASSWORD={{TODO}}
- Build a Docker Image and start a new Docker Container
    - From the project root, run `docker compose up --build`
    - This will also run the `web` and `db` services
- If first time setting up the app in production
    - We need to create super user - `python manage.py createsuperuser`
    - Create superuser's token for the web service
- TODO: Database
- TODO: Static files




## Web Service

### Local development
- Environment
    - Please refer to `/web/.env-template` for the required environment variables
    - Make sure that environment variables are properly set in `/web/.env`
        - NODE_ENV=development
        - NYNVRIO_API_URL=http://backend:8000
        - NYNVRIO_TOKEN=f53c73f61a57935dfdd2384a9269c8c2793f0075
        - GOOGLEANALYTICS_ID=aaa
    - Next.js automatically loads data from .env file as environment variables for all environments (local, development, test, production)
    - `/web/.env` file is referenced in `docker-compose.yml`
- Build a Docker Image and start a new Docker Container
    - From the project root, run `docker compose up --build`
    - This will also run the `backend` and `db` services
    - "Hot reload"
        - "Hot reload" means code changes will reflect without rebuilding the app and restarting the server
        - The app will be run in development server enabling for "hot reload"
        - This is possible by using volumes in `docker-compose.yml`

### Production deployment
- Make sure `DEBUG=False` is properly set in `/backend/app/.env`
- Create super user - `python manage.py createsuperuser`
- Create superuser's token for the web service
- 




## Docker commands
- `docker compose down`
- `docker compose build`
- `docker compose up`
- `docker system prune -a`
- `docker image prune -a`
- `docker volume prune -a`
- `docker network prune`
- `docker container prune`