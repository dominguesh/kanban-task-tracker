# Kanban App — product and delivery context

This document captures **what we are building**, **for whom**, and **how phases roll out**. It complements [ARCHITECTURE.md](ARCHITECTURE.md) (how the system is wired) and [CONTROLS.md](CONTROLS.md) (how risk is managed).

---

## 1. Naming

| Artifact | Name / convention |
|----------|-------------------|
| Product (human) | **Kanban App** |
| Product slug | **`kanban-app`** (repos, docs, marketing copy) |
| Docker Hub images (CI) | **`kanban-backend`**, **`kanban-frontend`** (unchanged; see `.github/workflows/ci.yml`) |
| Local Postgres user / database | **`kanban_app`** (underscore; Postgres-safe identifier aligned with the slug) |
| Compose bridge network | **`kanban_app_network`** |

---

## 2. Goals

### 2.1 Primary (portfolio)

For the **Audience** defined on the root [README.md](../README.md), demonstrate professional skill in:

- **System design** — clear boundaries, evolution from monolith-friendly v1 toward multi-tenant v2+.
- **Network** — v1 follows the **segmented dev Compose** and **self-hosted Pangolin / reverse-proxy** narrative in [ARCHITECTURE.md §1.1](ARCHITECTURE.md#11-portfolio-deployment-posture-pangolin-reverse-proxy-and-zero-trust); **more network detail after v2** when traffic patterns grow.
- **Security** — OWASP-aware implementation, secrets hygiene, least exposure (DB not on host by default), production non-root images.
- **SDLC** — versioned code, documented phases, environments **dev** and **prod** only for now.
- **DevSecOps** — hooks, rules, skills; **CI**: build and push images to Docker Hub **on push to `main`** (no PR pipeline requirement yet).
- **AI-assisted engineering** — **harness engineering** (structured context, review loops, policy boundaries) documented in [HARNESS_ENGINEERING.md](HARNESS_ENGINEERING.md); **kanban-specific** Cursor rules land in **v2** with domain features.

### 2.2 Secondary (personal use)

A **project, issue, and task** tracker using **kanban-style** work visualization, growing from a simple public face into full boards and, eventually, **practice-aligned** kanban (WIP limits, explicit policies, flow metrics — exact set to be refined when approaching the **final** phase).

---

## 3. Tenancy and authentication (by phase)

| Phase | Tenancy | Authentication |
|-------|---------|------------------|
| **v1** | Architecture anticipates **multi-tenant** persistence; **no** end-user auth | None |
| **v2** | **Multi-tenant** (data isolation design required before schema work) | **Email + password** |
| **Final** | Same | **2FA** and **magic link** (plus hardened session/token story) |

---

## 4. Product phases (feature depth)

### 4.1 v1 — day one

- A **basic, generic landing page** (public marketing / entry surface).
- Existing stack remains: **React (Vite)**, **Node (Express)**, **PostgreSQL** in Docker Compose.
- **No** kanban board UI requirement in v1.

### 4.2 v2 — core product

- **Boards → lists → cards**
- **Drag-and-drop**
- **Card:** description, due dates, labels, comments, attachments
- **Search / filter**
- **Activity log**
- **API style** (REST vs alternatives) and **real-time** (e.g. WebSockets vs polling) are **explicitly undecided** until **after v2 scoping**; choose during design for v2 implementation.
- **Kanban-specific** `.cursor` rules are added in **v2** alongside these features.

### 4.3 Final — practice maturity

- **Kanban best practices** as agreed at implementation time (e.g. WIP limits, swimlanes, policies on columns, cumulative flow or throughput signals).
- **Optional integrations** (e.g. GitHub Issues) — evaluated when the core product is stable.

---

## 5. Environments and CI

- **Environments:** **development** (Compose) and **production** (container runtime behind edge); no separate staging environment in scope yet.
- **CI (today):** GitHub Actions on **`main`** — login to Docker Hub, build `backend/Dockerfile.prod` and `frontend/Dockerfile.prod`, push **`…/kanban-backend:latest`** and **`…/kanban-frontend:latest`**.
- **Planned:** PR checks, image scanning, `npm audit`, SBOM, or signing — tracked in [CONTROLS.md](CONTROLS.md) as the matrix evolves.

---

## 6. Open decisions (intentionally deferred)

Record ADRs or short notes here as choices land.

| Topic | Status |
|-------|--------|
| REST vs GraphQL vs other API shape | **After v2** scope freeze |
| Real-time vs async refresh | **After v2** |
| Third-party integrations | **Final** phase, optional |

---

*Update this file when phases or auth scope change; keep [README.md](../README.md) roadmap summary in sync.*
