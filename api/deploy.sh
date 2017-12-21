#!/bin/bash
mkdir -p apps
cd apps
rm -rf quotes-api-node
git clone https://github.com/chosenbreed37/quotes-api-node.git
cd quotes-api-node
# sudo docker rm -f quotes-api-node
# sudo docker build . --tag quotes-api-node
# sudo docker run -d --name quotes-api-node -p 3000:3000 quotes-api-node
sudo docker-compose down
sudo docker-compose up -d
sudo docker exec -it quotesapinode_db_1 mongoimport --verbose --db quotes --collection quotes --type tsv --headerline --file /tmp/data/quotes.tsv --drop
echo "Quotes API Node running on  on port 3000..."
