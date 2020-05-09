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

const match = (quote, searchTerm) => {
    const q = searchTerm.toUpperCase();
    return quote.text && quote.text.toUpperCase().includes(q) 
    || quote.author && quote.author.toUpperCase().includes(q) 
    || quote.source && quote.source.toUpperCase().includes(q);
}

service.getSome = (searchTerm) => {
    var subset = quotes.filter(quote => match(quote, searchTerm));
    return Promise.resolve(subset);
}

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
