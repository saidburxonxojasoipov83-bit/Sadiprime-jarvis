# PARI Dashboard — Hermes ulanish

## Lokal
```bash
cd apps/dashboard
python3 -m http.server 5173
```
http://localhost:5173

## Hermes URL ulash
1. Railway → Sadiprime-jarvis → **Settings → Networking → Generate Domain**
2. Dashboard oching
3. Yuqoridagi **ONLINE** yozuviga **ikki marta bosing**
4. URL kiriting, masalan:
   `https://xxx.up.railway.app`
5. API key bo'lsa — kiriting (ko'pincha bo'sh)

Yoki brauzer console:
```js
localStorage.setItem("PARI_HERMES_URL", "https://YOUR.up.railway.app")
location.reload()
```

## Nima ishlaydi
- Health check → ONLINE / OFFLINE
- Chat Console → `POST /v1/chat/completions`
- CORS: bloklansa proxy kerak
