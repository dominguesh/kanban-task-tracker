# Harness engineering (educational note)

This document is **not** a vendor integration guide. It exists for **academic and portfolio clarity**: how **AI-assisted engineering** is expected to behave in **Kanban App** development, and how this repo expresses **governance** beyond ad-hoc prompting.

---

## 1. Terms (working definitions)

- **Context engineering** — Curating what the model sees: file paths, error output, architecture excerpts, and task framing so answers are grounded and small in scope.
- **Harness engineering** — An **evolution of context engineering**: the **repeatable system** around the model — rules, checklists, review steps, tool boundaries, and human gates — so that assistance stays **aligned, auditable, and safe enough** for real codebases.

In this repository the **harness** is largely **local and explicit**: `.cursor/rules`, **hooks**, and **skills**, plus these docs.

---

## 2. What is enforced vs documented

| Mechanism | Role |
|-----------|------|
| **Hooks** | Heuristic **blocking** or warning on secret-like patterns in shell and writes — see `.cursor/hooks.json`. |
| **Rules** | Persistent **expectations** for stack, security, and product phase (`.cursor/rules/*.mdc`). |
| **Skills** | **Procedures** the agent should follow for verification (e.g. env-health); they do not replace hooks. |
| **Docs** (`ARCHITECTURE`, `CONTROLS`, `PRODUCT`, this file) | **Intent and evidence** for reviewers; humans and agents read them before large changes. |

Harness engineering here means: **do not rely on a single prompt**; rely on **layered** constraints that a reviewer can inspect.

---

## 3. Prompting discipline (lightweight)

When using chat or agent modes on this project:

1. **State phase** — v1 landing vs v2 domain work vs infra-only.
2. **Point to files** — Prefer references to `docs/PRODUCT.md` and `docs/ARCHITECTURE.md` over re-explaining the whole repo.
3. **Keep diffs focused** — Matches project convention: minimal, reviewable changes.

---

## 4. Evolution

**Kanban-specific** rules (e.g. terminology for boards/lists/cards, API naming, tenancy invariants) are planned for **v2** when the schema and UI exist. Until then, global rules and product docs carry the harness.

---

*Educational artifact only; not a substitute for organizational AI policy or enterprise MLOps.*
