const quotes = require('./quotes.json');

const service = {};

service.getAll = () => Promise.resolve(quotes);

const createDataStore = () => {
    return service;
};

export default createDataStore;
