#!/usr/bin/env bash
set -euo pipefail

export HERMES_HOME="${HERMES_HOME:-/opt/data}"
export HOME="${HOME:-/opt/data}"
mkdir -p "$HERMES_HOME" "$HERMES_HOME/vault" "$HERMES_HOME/workspace" 2>/dev/null || true

seed() {
  local src="$1" dst="$2"
  if [ "${SEED_OVERWRITE:-}" = "1" ] || [ ! -f "$dst" ]; then
    echo "==> Seeding $(basename "$dst") (overwrite=${SEED_OVERWRITE:-0})"
    cp "$src" "$dst" || true
  fi
}

seed /opt/sadiprime/config.yaml "$HERMES_HOME/config.yaml"
seed /opt/sadiprime/AGENTS.md "$HERMES_HOME/AGENTS.md"

ENV_FILE="$HERMES_HOME/.env"
touch "$ENV_FILE" 2>/dev/null || true

sync_var() {
  local key="$1"
  local val="${!key:-}"
  if [ -n "$val" ]; then
    if grep -q "^${key}=" "$ENV_FILE" 2>/dev/null; then
      sed -i "s|^${key}=.*|${key}=${val}|" "$ENV_FILE" 2>/dev/null || true
    else
      echo "${key}=${val}" >> "$ENV_FILE"
    fi
  fi
}

for key in \
  TELEGRAM_BOT_TOKEN TELEGRAM_ALLOWED_USERS \
  OPENROUTER_API_KEY ANTHROPIC_API_KEY \
  GROQ_API_KEY ELEVENLABS_API_KEY \
  GEMINI_API_KEY MISTRAL_API_KEY CEREBRAS_API_KEY \
  GITHUB_PERSONAL_ACCESS_TOKEN RENDER_API_KEY \
  SUPABASE_ACCESS_TOKEN DATABASE_URL REDIS_URL
do
  sync_var "$key" || true
done

echo "==> HERMES_HOME=$HERMES_HOME"
echo "==> Starting Hermes gateway..."

if command -v hermes >/dev/null 2>&1; then
  exec hermes gateway run
else
  exec hermes gateway start
fi
