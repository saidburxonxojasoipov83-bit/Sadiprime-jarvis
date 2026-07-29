# Hermes integratsiyasi

## Arxitektura

```
Telegram ──► Hermes Gateway (messaging)
                    │
                    ├── tools / agents / memory
                    │
PARI Dashboard ──► API Server :8642
                   POST /v1/chat/completions
                   GET  /v1/models
```

## 1. Railway — Hermes service Variables

| Variable | Qiymat |
|----------|--------|
| TELEGRAM_BOT_TOKEN | (mavjud) |
| TELEGRAM_ALLOWED_USERS | (mavjud) |
| OPENROUTER_API_KEY | (yoki boshqa LLM) |
| API_SERVER_ENABLED | true |
| API_SERVER_HOST | 0.0.0.0 |
| API_SERVER_PORT | 8642 |
| API_SERVER_KEY | change-me-pari |

Redeploy. Logda: `API server listening on http://0.0.0.0:8642`

## 2. Dashboard service

Root: `apps/dashboard`

| Variable | Qiymat |
|----------|--------|
| HERMES_UPSTREAM | http://<hermes-service-name>.railway.internal:8642 |

## 3. Test

ONLINE double-click → URL `/api/hermes`, Key `change-me-pari`
Chat: Salom

## Endpoints

GET /v1/models | POST /v1/chat/completions | model: hermes-agent
