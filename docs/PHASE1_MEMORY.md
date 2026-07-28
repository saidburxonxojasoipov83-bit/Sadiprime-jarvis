# Phase 1 — Memory System

Arxitektura diagrammasi: Memory System qatlami.

| Tur | Texnologiya | Railway |
|-----|-------------|---------|
| Working (short-term) | Redis | Redis plugin |
| Conversation / Long-term | PostgreSQL | Postgres plugin |
| Knowledge / Notes | Obsidian vault | Volume `/opt/data` |
| Semantic (vector) | Qdrant | Phase 4 |

## Railway qadamlari

### 1. PostgreSQL
1. Project → **New** → **Database** → **PostgreSQL**
2. Deploy tugagach → Connect / Variables
3. `DATABASE_URL` ni nusxalang
4. Sadiprime-jarvis Variables:
   DATABASE_URL=postgresql://...

### 2. Redis
1. Project → **New** → **Database** → **Redis**
2. REDIS_URL ni oling
3. Service Variables: REDIS_URL=redis://...

### 3. Volume
Mount path: /opt/data

### 4. Redeploy

## Tekshirish
Telegram: Vault'imga Phase1 qayd yarat.
