FROM mongo

COPY messages.json /messages.json
CMD mongoimport --host mongodb --authenticationDatabase admin \
    --username benchmark --password benchmark \
    --db benchmark --collection messages --type json --file ./messages.json --jsonArray