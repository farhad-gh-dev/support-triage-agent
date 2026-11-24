# Support Triage Agent

An AI agent that triages support tickets, drafts replies grounded in product docs (RAG), and waits for a human to approve every reply before it is sent. Its quality is measured by an eval suite that runs in CI.

> Work in progress, built in phases: spec and skeleton, RAG, ticketing tool calls, approval flow, evals in CI, docs.

- [Architecture](docs/architecture.md)
- [Decision record: stack and architecture](docs/decisions/0001-stack-and-architecture.md)

## Run it locally

Requirements: Node 22, pnpm 10, Docker.

```bash
pnpm install
cp .env.example .env
pnpm db:up        # Postgres with pgvector
pnpm dev          # API on :3001, review UI on :3000
```

Check the API: `curl localhost:3001/health` returns `{"status":"ok"}`.

## Scripts

| Command                                      | What it does                     |
| -------------------------------------------- | -------------------------------- |
| `pnpm dev`                                   | Run API and web in watch mode    |
| `pnpm lint` / `pnpm typecheck` / `pnpm test` | The checks CI runs               |
| `pnpm build`                                 | Production build of both apps    |
| `pnpm db:up` / `pnpm db:down`                | Start or stop the local database |
