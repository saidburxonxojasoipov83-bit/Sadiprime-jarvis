# SadiPrime Jarvis AI

Iron Man level shaxsiy AI-yordamchi — Hermes Agent asosida.  
Railway'da 24/7 ishlaydi. Telegram orqali boshqariladi.

```
Siz (Telegram)
      │
      ▼
Railway (Hermes + SadiPrime config)
      ├── Obsidian vault (xotira)
      ├── Kod yozish (terminal)
      ├── GitHub / Render / Supabase / Browser
      ├── STT / TTS
      └── LLM: OpenRouter → Gemini → Mistral → Cerebras
```

## Tez deploy (Railway)

1. https://railway.com → **New Project** → **Deploy from GitHub repo**
2. `saidburxonxojasoipov83-bit/Sadiprime-jarvis` ni tanlang
3. **Volume** qo'shing: mount path = `/data`
4. **Variables** ga quyidagilarni yozing:

| Variable | Majburiy | Qayerdan |
|----------|----------|----------|
| `TELEGRAM_BOT_TOKEN` | ✅ | @BotFather |
| `TELEGRAM_ALLOWED_USERS` | ✅ | @userinfobot (raqamli ID) |
| `OPENROUTER_API_KEY` | ✅ | openrouter.ai/keys |
| `GITHUB_PERSONAL_ACCESS_TOKEN` | ixtiyoriy | GitHub Settings |
| `RENDER_API_KEY` | ixtiyoriy | Render dashboard |
| `SUPABASE_ACCESS_TOKEN` | ixtiyoriy | Supabase |
| `DATABASE_URL` | ixtiyoriy | Postgres connection string |
| `GROQ_API_KEY` | ixtiyoriy | STT zaxira |
| `ELEVENLABS_API_KEY` | ixtiyoriy | sifatli TTS |

5. **Deploy** bosing
6. Telegramda botga yozing: `Salom! O'zingni tanishtir.`

> Volume `/data` bo'lmasa — har redeployda xotira yo'qoladi.

## Fayllar

```
Sadiprime-jarvis/
├── Dockerfile          — Hermes + SadiPrime
├── entrypoint.sh       — config seed + gateway start
├── railway.toml
├── .env.example
├── .gitignore
├── setup.sh            — lokal o'rnatish
└── config/
    ├── config.yaml     — MCP, STT/TTS, model, Telegram
    └── AGENTS.md       — rol + xavfsizlik qoidalari
```

## Arxitektura yo'li (bosqichma-bosqich)

| Phase | Nima | Holat |
|-------|------|-------|
| 0 | Hermes + Telegram + Railway | **Hozir** |
| 1 | Redis + Postgres memory | Keyin |
| 2 | Multi-agent (Coding, Research, Personal) | |
| 3 | Web Dashboard + WebSocket | |
| 4 | Vector DB (Qdrant) + Knowledge Hub | |
| 5 | Full Core Brain + Security + K8s | |

## Xavfsizlik

- `.env` GitHub'ga kirmaydi
- `TELEGRAM_ALLOWED_USERS` — faqat sizning ID
- `AGENTS.md` — force push, DROP, o'chirish oldidan tasdiq so'raydi

## Havolalar

- Hermes docs: https://hermes-agent.nousresearch.com/docs/
- OpenRouter: https://openrouter.ai/keys
- Railway: https://railway.com
