# SadiPrime Jarvis AI — Hermes Agent on Railway
FROM python:3.12-slim-bookworm

ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    HERMES_HOME=/data/hermes \
    HOME=/data \
    PATH="/root/.local/bin:/opt/hermes/.venv/bin:${PATH}"

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl git ca-certificates build-essential \
    ffmpeg nodejs npm \
    && rm -rf /var/lib/apt/lists/*

# Install uv
RUN curl -LsSf https://astral.sh/uv/install.sh | sh

# Install Hermes Agent
ARG HERMES_REF=v2026.6.5
WORKDIR /opt/hermes
RUN git clone --depth 1 --branch "${HERMES_REF}" https://github.com/NousResearch/hermes-agent.git . \
    || (git clone --depth 1 https://github.com/NousResearch/hermes-agent.git . && git checkout "${HERMES_REF}" || true)

RUN uv venv /opt/hermes/.venv \
    && . /opt/hermes/.venv/bin/activate \
    && uv pip install -e ".[messaging]" \
    && pip install faster-whisper piper-tts --break-system-packages || true

# Our config templates
COPY config/config.yaml /opt/sadiprime/config.yaml
COPY config/AGENTS.md /opt/sadiprime/AGENTS.md
COPY .env.example /opt/sadiprime/.env.example
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

WORKDIR /data
VOLUME ["/data"]

EXPOSE 8080
ENTRYPOINT ["/entrypoint.sh"]
