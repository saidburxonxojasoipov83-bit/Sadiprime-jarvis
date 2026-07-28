# SadiPrime Jarvis AI

Hermes Agent + Railway + Telegram.
Arxitektura: `docs/ARCHITECTURE.md`

## Phase holati

| # | Qism | Holat |
|---|------|--------|
| 0 | Gateway + Telegram | ✅ |
| 1 | Memory (Postgres/Redis) | ⏳ siz qo'shasiz |
| 2 | Multi-Agent | ✅ |
| 3 | Model Router | ✅ |
| 4 | Knowledge + Vector | ✅ |
| 5 | Security + Ops | ✅ |

## Tez start
1. Railway ← GitHub Sadiprime-jarvis
2. Volume `/opt/data`
3. Vars: TELEGRAM_BOT_TOKEN, TELEGRAM_ALLOWED_USERS, OPENROUTER_API_KEY
4. SEED_OVERWRITE=1 → redeploy → o'chiring
5. Telegram: /sethome keyin Salom

## Docs
PHASE1 … PHASE5 + ARCHITECTURE.md
