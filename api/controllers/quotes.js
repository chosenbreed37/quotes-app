import logger from '../core/logger/app-logger';

const createController = ({ dataStore }) => {
    const controller = {};

    controller.getAll = async (req, res) => {
        try {
            // check for search term
            const searchTerm = req.query.q;
            if (searchTerm) {
                logger.info('Detected search term: ', searchTerm);
                const quotes = await dataStore.getSome(searchTerm);
                logger.info('Sending matching quotes...');
                res.send(quotes);
            } else {   
                const quotes = await dataStore.getAll();
                logger.info('Sending all quotes...');
                res.send(quotes);
            }
        } catch (err) {
            logger.error('Error in retrieving quotes- ' + err);
            res.send('Error retrieving quotes...');
        }
    };

    controller.add = async (req, res) => {
        try {
            var quote = { text: req.body.text, author: req.body.author, source: req.body.source };
            console.log('>>> quote: ', quote);
            var result = await dataStore.add(quote);
            res.send(result.id);
        } catch (err) {
            logger.error('Error adding new quote- ' + err);
            res.send('Error adding new quote...');
        }
    }

    return controller;
};

export default createController;
