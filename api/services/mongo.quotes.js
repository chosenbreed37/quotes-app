import mongoose, { Schema } from 'mongoose';
import connectToDb from '../db/connect';

const QuoteSchema = new Schema({
    Text: String,
    Author: String,
    Source: String
});

const QuoteModel = mongoose.model('Quote', QuoteSchema);

QuoteModel.getAll = () => {
    return QuoteModel
        .find({})
        .then(docs => docs.map(q => ({ id: q._id, text: q.Text, author: q.Author, source: q.Source })));
};

QuoteModel.add = (quote) => {
    return QuoteModel.create({ Text: quote.text, Author: quote.author, Source: quote.source }, 
        function(err, newQuote) {
            if (err) return undefined 
            else return {id: newQuote._id, text: newQuote.Text, author: newQuote.Author, source: newQuote.Source};
        });
};

const createDataStore = () => {
    connectToDb();
    return QuoteModel;
};

export default createDataStore;
