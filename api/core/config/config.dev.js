import path from 'path';

const config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'db';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'quotes';
config.serverPort = process.env.serverPort || 3003;
config.env = process.env.NODE_ENV || 'dev';

export default config;

