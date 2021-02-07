docker inspect $1 \
    -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' \
    | xargs -I '$0' echo 'http://$0:8001/messages' \
    | xargs -I '$:target' artillery run ./searchMessages.yml --target '$:target'
