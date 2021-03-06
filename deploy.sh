#!/bin/bash
mkdir -p apps
cd apps
rm -rf quotes-app
git clone https://github.com/chosenbreed37/quotes-app.git
cd quotes-app
sudo docker-compose down
sudo docker rmi quotesapp_ui
sudo docker rmi quotesapp_api
mv ./ui/src/config/config.prod.js ./ui/src/config/config.js
sudo docker-compose up --build -d
sudo docker exec -it quotesapp_db_1 mongoimport --verbose --db quotes --collection quotes --type tsv --headerline --file /tmp/data/quotes.tsv --drop
