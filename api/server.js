import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import logger from './core/logger/app-logger';
import config from './core/config/config.dev';
import createQuotesRouter from './routes/quotes';
import createMemoryDataStore from './services/memory.quotes';
import createMongoDataStore from './services/mongo.quotes';

const port = config.serverPort;

logger.stream = {
    write: (message) => {
        logger.info(message);
    }
};

logger.info(`configuring server for [${config.env}]...`);

const dataStore = config.env === 'dev' ? createMemoryDataStore() : createMongoDataStore();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev', { stream: logger.stream }));

app.use('/quotes', createQuotesRouter({ dataStore }));

app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

app.listen(port, () => {
    logger.info('server started - ', port);
    app.emit('appStarted');
});

export default app;
