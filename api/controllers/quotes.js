import logger from '../core/logger/app-logger';

const createController = ({ dataStore }) => {
    const controller = {};

    controller.getAll = async (req, res) => {
        try {
            const quotes = await dataStore.getAll();
            logger.info('Sending all quotes...');
            res.send(quotes);
        } catch (err) {
            logger.error('Error in retrieving quotes- ' + err);
            res.send('Error retrieving quotes...');
        }
    };

    return controller;
};

export default createController;
