# Phase 3 — Model Router & LLM Management

Diagramma: ModelRouter | Fallback | CostOptimizer

## Config
- Asosiy: OpenRouter
- Fallback: OpenRouter models → Gemini → Mistral → Cerebras

## Variables
OPENROUTER_API_KEY (tavsiya)
GEMINI_API_KEY, MISTRAL_API_KEY, CEREBRAS_API_KEY (ixtiyoriy)

## Yangi config yuklash
Railway Variables: SEED_OVERWRITE=1 → Redeploy
(keyin SEED_OVERWRITE ni o'chirish mumkin)
