import Mongoose from 'mongoose';
import logger from '../core/logger/app-logger';
import config from '../core/config/config.dev';

Mongoose.Promise = global.Promise;

const CONNECTED = 1;

const connectToDb = async () => {
    const dbHost = config.dbHost;
    const dbPort = config.dbPort;
    const dbName = config.dbName;
    if (Mongoose.connection.readyState !== CONNECTED) {
        try {
            await Mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, { useMongoClient: true });
            logger.info('Connected to mongo!!!');
        } catch (err) {
            logger.error('Could not connect to MongoDB');
            logger.error(err);
        }
    } else {
        logger.info('Currently connected to MongoDB...');
    }
};

export default connectToDb;
