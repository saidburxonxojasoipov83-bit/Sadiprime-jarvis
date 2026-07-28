# SadiPrime Jarvis — based on official Hermes Agent image
FROM nousresearch/hermes-agent:latest

USER root

# SadiPrime config templates
COPY config/config.yaml /opt/sadiprime/config.yaml
COPY config/AGENTS.md /opt/sadiprime/AGENTS.md
COPY .env.example /opt/sadiprime/.env.example
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh \
    && mkdir -p /opt/data /data \
    && chown -R hermes:hermes /opt/sadiprime /entrypoint.sh 2>/dev/null || true

# Official image uses /opt/data as HERMES_HOME when volume is mounted
ENV HERMES_HOME=/opt/data \
    HOME=/opt/data

USER hermes
WORKDIR /opt/data

ENTRYPOINT ["/entrypoint.sh"]
