import React from 'react';
import rest from 'restler';
import NewQuoteDialog from '../material-ui/new-quote-dialog';

export default class NewQuoteContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { quotes: [] };
    }

    onAddNewQuote = (quote) => {
        rest.postJson(this.props.apiUrl + '/quotes', quote)
            .on('complete', (result) => {
                console.log('>>> result: ', result);
                if (this.props.newQuoteAdd) {
                    this.props.newQuoteAdd({...quote, id: result});
                }
            })
            .on('error', err => {
                console.log(err);
            });
    }

    render() {
        return <NewQuoteDialog addNewQuote={this.onAddNewQuote} />
    }
}