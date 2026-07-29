# PARI + Hermes (Railway)

## Hermes variables
```
API_SERVER_ENABLED=true
API_SERVER_HOST=0.0.0.0
API_SERVER_PORT=8642
API_SERVER_KEY=change-me-pari
```
Redeploy Hermes service.

## Dashboard service
Root Directory: `apps/dashboard`
```
HERMES_UPSTREAM=http://<HERMES_SERVICE_NAME>.railway.internal:8642
```

## Chat auth
ONLINE double-click → API key = `change-me-pari`
