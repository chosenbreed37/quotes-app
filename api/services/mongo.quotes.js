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

const createDataStore = () => {
    connectToDb();
    return QuoteModel;
};

export default createDataStore;
