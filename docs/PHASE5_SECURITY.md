# Phase 5 — Security Layer + Operations

## Hozir (Hermes + Railway)

| Nazorat | Qanday |
|---------|--------|
| Telegram allowlist | TELEGRAM_ALLOWED_USERS |
| Secrets | Railway Variables only |
| Destructive ops | AGENTS.md tasdiq |
| MCP least privilege | github/render/supabase off by default |
| HTTPS | Railway edge |

## Qoidalar
1. Token oshkor → revoke + yangi
2. GitHub fine-grained token
3. Production DELETE/DROP — tasdiq
4. SEED_OVERWRITE doimiy yoqilmasin

## Dashboard
Kelajak: alohida Next.js service. Hozir: Telegram + Railway UI.
