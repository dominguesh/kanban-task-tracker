---
name: scaffold-infra
description: "Generates the Dockerfiles and docker-compose.dev.yml file for the Kanban App local development environment."
---

# Scaffold Infrastructure Skill

When invoked, your task is to generate the local development infrastructure for **Kanban App** (product slug `kanban-app`). For a second isolated stack, use distinct Postgres identifiers and a separate bridge network name (e.g. `kanban_app_2_network`).

## 1. Create docker-compose.dev.yml

Create a `docker-compose.dev.yml` at the project root with the following services:

- **frontend**: React/Vite container. Map port 5173. Bind mount the local `./frontend` directory to the container.
- **backend**: Node.js/Express container. Map port 3000. Bind mount the local `./backend` directory to the container.
- **db**: PostgreSQL database container (use the official Postgres image). Map port 5432. Use a named volume called `postgres_data` mapped to `/var/lib/postgresql/data`. Provide default environment variables for user, password, and db name.

## 2. Create Dockerfiles

- Create `/frontend/Dockerfile.dev` using a lightweight Node image. Expose port 5173.
- Create `/backend/Dockerfile.dev` using a lightweight Node image. Expose port 3000.

## 3. Network

- Connect all three services securely to a custom bridge network called `kanban_app_network` (use a distinct network name for a second stack).
