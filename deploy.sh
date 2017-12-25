#!/bin/bash
mkdir -p apps
cd apps
rm -rf quotes-app
git clone https://github.com/chosenbreed37/quotes-app.git
cd quotes-app
sudo docker-compose down
mv ./ui/src/config/config.prod.js ./ui/src/config/config.js
sudo docker-compose up -d
sudo docker exec -it quotesapp_db_1 mongoimport --verbose --db quotes --collection quotes --type tsv --headerline --file /tmp/data/quotes.tsv --drop
echo "Quotes App Node running on  on port 3000..."
