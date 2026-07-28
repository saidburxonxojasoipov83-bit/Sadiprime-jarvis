# Phase 4 — Knowledge Hub + Vector Memory

Diagramma: Knowledge Hub + Vector DB (Qdrant)

## Holat

| Komponent | Holat |
|-----------|--------|
| Obsidian vault | ✅ MCP |
| Filesystem workspace | ✅ |
| Browser / web | ✅ Playwright |
| Postgres | ✅ DATABASE_URL |
| Qdrant semantic | ⏳ enabled:false until QDRANT_URL |
| GitHub loader | ⏳ token + enabled |

## Qdrant
Railway Docker `qdrant/qdrant` yoki https://cloud.qdrant.io

Variables:
```
QDRANT_URL=...
QDRANT_API_KEY=...
```

Keyin config da qdrant.enabled: true yoki SEED_OVERWRITE=1

## Oqim
Input → Vault / Postgres / Qdrant → Orchestrator javob
