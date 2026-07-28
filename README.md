# SadiPrime Jarvis AI — Hermes + Obsidian + Telegram (Railway'da)

Bulutda 24/7 ishlaydigan shaxsiy AI-yordamchi. Sizda kompyuter yo'qligi
sababli hammasi Railway'ning bulut serverida ishlaydi, siz faqat
Telegram orqali muloqot qilasiz.

```
Siz (Telegram, telefondan)
      │
      ▼
Railway bulut serveri
      │
      ├── Hermes Agent (gateway + agent loop)
      ├── Obsidian-uslubidagi vault (serverning o'z diskida)
      ├── STT: faster-whisper (lokal, server ichida)
      ├── TTS: Piper (lokal, server ichida)
      ├── Terminal/kod yozish (Jarvisning o'z konteynerida)
      └── LLM: OpenRouter → Gemini → Mistral → Cerebras (zaxira zanjiri)
```

**Nima ishlaydi, nima ishlamaydi:**

| Funksiya | Holat |
|---|---|
| Telegram orqali suhbat | ✅ |
| Obsidian-uslubidagi xotira (vault) | ✅ (serverda saqlanadi) |
| Kod yozish/ishga tushirish | ✅ (Jarvisning o'z konteynerida) |
| GitHub (repo, push, PR, issue) | ✅ |
| Render (deploy, loglar, boshqaruv) | ✅ |
| Supabase (baza, auth, storage) | ✅ |
| PostgreSQL (to'g'ridan-to'g'ri SQL) | ✅ |
| Brauzer (Playwright — sahifa ochish, test) | ✅ |
| Ovozli xabar (STT/TTS) | ✅ |
| Sizning shaxsiy kompyuteringizni boshqarish | ❌ (kompyuter yo'q) |
| Sizning telefoningizni masofadan boshqarish | ❌ (texnik jihatdan bulutdan imkonsiz) |

> Telefonni masofadan boshqarish uchun boshqaruvchi dastur jismonan telefon
> bilan bir tarmoqda yoki USB orqali ulangan bo'lishi kerak. Bulutdagi
> server buni qila olmaydi.

---

## Sizga qolgan yagona ishlar

### A. Kalitlarni olish
- [ ] Telegram bot: `@BotFather` → `/newbot` → tokenni saqlang
- [ ] Telegram user ID: `@userinfobot` → raqamni saqlang
- [ ] OpenRouter kalit: https://openrouter.ai/keys
- [ ] (ixtiyoriy) Gemini, Mistral, Cerebras, GitHub, Render, Supabase

### B. Railway'da ishga tushirish
- [ ] https://railway.com — GitHub bilan ro'yxatdan o'ting
- [ ] New Project → Deploy from GitHub → `Sadiprime-jarvis`
- [ ] Variables ga kalitlarni kiriting (`.env.example` ga qarang)
- [ ] Deploy

### C. Tekshirish
Telegramda botga yozing:
```
Salom! O'zingni tanishtir.
```

---

## Fayllar tuzilishi

```
Sadiprime-jarvis/
├── README.md
├── .env.example
├── .gitignore
├── setup.sh
└── config/
    ├── config.yaml
    └── AGENTS.md
```

## Xavfsizlik

- `.env` hech qachon GitHub'ga push qilinmaydi
- `TELEGRAM_ALLOWED_USERS` ga faqat o'zingizning ID
- Halokatli amallar uchun `config/AGENTS.md` da tasdiqlash qoidasi bor

## Foydali havolalar

- Hermes: https://hermes-agent.nousresearch.com/docs/
- Railway Hermes: https://railway.com/deploy/hermes-agent-1
- Obsidian MCP: https://github.com/StevenStavrakis/obsidian-mcp
