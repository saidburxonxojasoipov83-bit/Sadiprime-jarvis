# SadiPrime Jarvis AI

Iron Man level shaxsiy AI — Hermes Agent + Railway + Telegram.

## Holat

| Phase | Qism | Holat |
|-------|------|--------|
| 0 | Hermes + Telegram + Railway | ✅ |
| 1 | Memory (Postgres + Redis + Vault) | ⏳ Railway DB |
| 2 | Multi-Agent Layer | ✅ kod |
| 3 | Model Router | keyin |
| 4 | Vector / Knowledge Hub | keyin |
| 5 | Dashboard + Core Brain kengaytmasi | keyin |

## Deploy
1. Railway → GitHub repo `Sadiprime-jarvis`
2. Volume: `/opt/data`
3. Variables: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_ALLOWED_USERS`, `OPENROUTER_API_KEY`
4. (Phase 1) Postgres + Redis → `DATABASE_URL`, `REDIS_URL`

## Fayllar
```
├── Dockerfile / entrypoint.sh / railway.toml
├── config/config.yaml
├── config/AGENTS.md          ← Orchestrator
├── config/agents/*.md        ← Phase 2 rollar
└── docs/PHASE1_MEMORY.md
└── docs/PHASE2_AGENTS.md
```

## Xavfsizlik
Halokatli amallar — tasdiq. Tokenlarni GitHub'ga qo'ymang.
