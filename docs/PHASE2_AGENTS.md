# Phase 2 — Agent Layer (Multi-Agents)

Diagramma: AGENT LAYER (MULTI AGENTS)

## Amalga oshirilgan
- Core Orchestrator qoidalari → `config/AGENTS.md`
- Specialist kartochkalar → `config/agents/*.md`
  - ceo, architect, coding, debug, research
  - devops, database, security, personal

## Qanday ishlaydi (Hermes)
Bitta Hermes jarayoni — rollar **prompt/orchestrator** orqali.
Kelajakda alohida worker processlar (Phase 5) qo'shilishi mumkin.

## Telegram misollar
```
CEO sifatida: oyiga 3 ta mahsulot uchun ustuvorlik rejasini tuz
```
```
Coding agent: Pythonda oddiy TODO CLI yoz va ishga tushir
```
```
Debug: quyidagi xatoni tahlil qil: ...
```

## Phase 1 eslatma
Postgres/Redis hali Railway'da qo'shilmasa ham agentlar ishlaydi.
Vault + workspace yetarli boshlang'ich xotira.
