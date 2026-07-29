# Dashboard Railway deploy

## 1. Yangi service
Railway project:
1. **+ New** → **GitHub Repo** → Sadiprime-jarvis
2. **Root Directory** = `apps/dashboard`
3. Dockerfile builder

## 2. Domain
Settings → Networking → Generate Domain

## 3. Hermes URL
ONLINE ga double-click:
- Proxy: `/api/hermes` (default)
- Yoki to'g'ridan: `https://YOUR-HERMES.up.railway.app`

## 4. Private network
nginx.conf dagi `hermes.railway.internal` ni Hermes service nomiga moslang.
