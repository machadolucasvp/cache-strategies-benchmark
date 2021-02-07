echo \
"$(docker inspect $1 -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}')":\
"$(docker inspect $1 -f '{{ .Config.Env }}' | tr ' ' '\n' | grep API_PORT | sed 's/^.*=//')"\
| xargs -I '$:dns' echo 'http://$:dns/messages' \
| xargs -I '$:target' artillery run ./searchMessages.yml --target '$:target'
