# ADR 0001: Stack and architecture

Status: proposed (2026-11-24). Ticketing choice confirmed; the rest are defaults until confirmed.

An ADR (architecture decision record) captures one decision, why it was made, and what was rejected, so a future reader doesn't have to guess.

## Decision

| Area         | Choice                                                                                           | Rejected alternatives                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| Language     | TypeScript everywhere, pnpm monorepo                                                             | Python + FastAPI: richer AI ecosystem, but TS libraries now cover our needs and keep one language |
| Backend      | NestJS                                                                                           | Express alone: less structure for a multi-module service                                          |
| Review UI    | Next.js (App Router)                                                                             | Slack approval buttons, a CLI                                                                     |
| LLM          | Anthropic Claude via the official TS SDK, behind a provider interface                            | OpenAI (equally valid, swappable), local models via Ollama                                        |
| Agent loop   | Our own tool-calling loop on the raw SDK                                                         | LangChain.js, Vercel AI SDK                                                                       |
| Embeddings   | Local open-source model (transformers.js), behind an interface                                   | Hosted embedding APIs: need a key and cost money in every CI run                                  |
| Vector store | Postgres + pgvector                                                                              | Pinecone, Chroma, in-memory                                                                       |
| Ticketing    | Zendesk-shaped mock API by default, plus a GitHub Issues adapter, both behind `TicketingAdapter` | Zendesk only: trials expire, so the repo would stop working for reviewers                         |
| Sample docs  | Docs for a fictional SaaS, written for this repo                                                 | An open-source project's docs: license terms vary, no control over edge cases                     |
| Approval     | Server-side state machine; the send path refuses anything not approved                           | UI-only gating                                                                                    |
| Evals        | Own TS eval runner, three layers, thresholds gate pull requests                                  | promptfoo, LangSmith, Braintrust                                                                  |

## Consequences

- Reviewers can clone and run everything with Docker and Node; only answer-quality evals and live drafting need an API key.
- Swapping the LLM, embedding model or ticketing system means writing one new adapter, not touching the agent.
