A personal portfolio and blogging website

# Getting started
- Clone the repo
  - `git clone git@github.com:nynvr/nynvr.io.git`
- Run docker compose
  - `docker compose up --build`
  - This will run 3 services,
     - backend service
        - `http://0.0.0.0:8000/`
        - `http://0.0.0.0:8000/api/`
        - `http://0.0.0.0:8000/admin`
        - Django app
     - web service
        - `http://0.0.0.0:3000/`
        - Next.js app
     - db service
        - PostgreSQL

# Local development
- Python and Node.js version management
  - Docker will handle the version management
  - As of 16OCT2024,
    - Python - v3.12
    - Node.js - v20.18
- "Hot reload"
  - No need to "restart" the services to make code changes
  - Docker Compose is using "volumes"

# Tech stack
- Python v3.12, Django v5.1
- JavaScript, TypeScript, React, Next.js v14.2
- Tailwind CSS v3.4
- Shadcn v2.1
- AWS
  - AWS ECS
  - AWS RDS
- Github Actions

# Production deployment
- Backend
    - Set ECS Service
    - Set Temporary Task Definition
- Web
    - Set ECS Service
    - Set Temporary Task Definition

# Misc: Docker commands
- `docker compose up --build`
- `docker compose -f ./docker-compose.test-build.yml up --build`
- `docker compose down`
- `docker compose build`
- `docker compose up`
- `docker system prune -a`
- `docker image prune -a`
- `docker volume prune -a`
- `docker network prune`
- `docker container prune`