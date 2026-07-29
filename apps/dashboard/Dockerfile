FROM nginx:1.27-alpine
RUN apk add --no-cache bash gettext
COPY index.html styles.css app.js config.js /usr/share/nginx/html/
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
ENV HERMES_UPSTREAM=http://sadiprime-jarvis.railway.internal:8642
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
