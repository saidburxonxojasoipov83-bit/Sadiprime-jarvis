#!/usr/bin/env bash
set -euo pipefail

export HERMES_HOME="${HERMES_HOME:-/data/hermes}"
export HOME="${HOME:-/data}"
mkdir -p "$HERMES_HOME" "$HERMES_HOME/vault" "$HERMES_HOME/workspace"

# Seed config if missing
if [ ! -f "$HERMES_HOME/config.yaml" ]; then
  echo "==> Seeding config.yaml from SadiPrime template"
  cp /opt/sadiprime/config.yaml "$HERMES_HOME/config.yaml"
fi

if [ ! -f "$HERMES_HOME/AGENTS.md" ]; then
  echo "==> Seeding AGENTS.md"
  cp /opt/sadiprime/AGENTS.md "$HERMES_HOME/AGENTS.md"
fi

# Write .env from Railway Variables (if present)
ENV_FILE="$HERMES_HOME/.env"
touch "$ENV_FILE"

write_var() {
  local key="$1"
  local val="${!key:-}"
  if [ -n "$val" ]; then
    grep -v "^${key}=" "$ENV_FILE" > "${ENV_FILE}.tmp" 2>/dev/null || true
    mv "${ENV_FILE}.tmp" "$ENV_FILE" 2>/dev/null || true
    echo "${key}=${val}" >> "$ENV_FILE"
  fi
}

for key in \
  TELEGRAM_BOT_TOKEN TELEGRAM_ALLOWED_USERS \
  OPENROUTER_API_KEY ANTHROPIC_API_KEY \
  GROQ_API_KEY ELEVENLABS_API_KEY \
  GEMINI_API_KEY MISTRAL_API_KEY CEREBRAS_API_KEY \
  GITHUB_PERSONAL_ACCESS_TOKEN RENDER_API_KEY \
  SUPABASE_ACCESS_TOKEN DATABASE_URL
do
  write_var "$key"
done

echo "==> HERMES_HOME=$HERMES_HOME"
echo "==> Starting Hermes gateway..."

if [ -f /opt/hermes/.venv/bin/activate ]; then
  source /opt/hermes/.venv/bin/activate
fi

cd "$HERMES_HOME"

if command -v hermes >/dev/null 2>&1; then
  exec hermes gateway start
elif [ -x /opt/hermes/.venv/bin/hermes ]; then
  exec /opt/hermes/.venv/bin/hermes gateway start
else
  echo "ERROR: hermes binary not found. Check build logs."
  ls -la /opt/hermes/ || true
  exit 1
fi
