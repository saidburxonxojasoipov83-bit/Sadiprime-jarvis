# SadiPrime Jarvis AI

Hermes + Railway + Telegram. Arxitektura bosqichma-bosqich.

## Holat

| Phase | Qism | Holat |
|-------|------|--------|
| 0 | Gateway + Telegram | ✅ |
| 1 | Memory (Postgres/Redis/Vault) | ⏳ Railway DB |
| 2 | Multi-Agent Layer | ✅ |
| 3 | Model Router + Fallback | ✅ |
| 4 | Vector / Knowledge Hub | keyin |
| 5 | Dashboard + Core Brain | keyin |

## Variables
- Majburiy: TELEGRAM_BOT_TOKEN, TELEGRAM_ALLOWED_USERS
- LLM: OPENROUTER_API_KEY (+ GEMINI/MISTRAL/CEREBRAS)
- Phase 1: DATABASE_URL, REDIS_URL
- Yangi config: SEED_OVERWRITE=1 (bir marta)
- Volume: /opt/data

## Docs
- docs/PHASE1_MEMORY.md
- docs/PHASE2_AGENTS.md
- docs/PHASE3_MODEL_ROUTER.md
