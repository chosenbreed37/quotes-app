const quotes = require('./quotes.json');

const service = {};

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

service.getAll = () => Promise.resolve(quotes);

service.add = (quote) => {
    var id = guid();
    var newQuote = { id, text: quote.text, author: quote.author, source: quote.source };
    quotes.push(newQuote);
    return Promise.resolve(newQuote);
};

const createDataStore = () => {
    return service;
};

export default createDataStore;
