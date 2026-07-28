# SadiPrime Jarvis AI

Hermes + Railway + Telegram — arxitektura bosqichma-bosqich.

## Holat

| Phase | Qism | Holat |
|-------|------|--------|
| 0 | Gateway + Telegram | ✅ |
| 1 | Memory (Postgres/Redis/Vault) | ⏳ Railway DB |
| 2 | Multi-Agent Layer | ✅ |
| 3 | Model Router + Fallback | ✅ |
| 4 | Knowledge Hub + Vector | ✅ kod (Qdrant ixtiyoriy) |
| 5 | Dashboard + Security layer | keyin |

## Variables
- Telegram: TELEGRAM_BOT_TOKEN, TELEGRAM_ALLOWED_USERS
- LLM: OPENROUTER_API_KEY (+ GEMINI/MISTRAL/CEREBRAS)
- DB: DATABASE_URL, REDIS_URL
- Vector: QDRANT_URL, QDRANT_API_KEY
- Yangi config: SEED_OVERWRITE=1
- Volume: /opt/data

## Docs
docs/PHASE1_MEMORY.md … docs/PHASE4_KNOWLEDGE.md
