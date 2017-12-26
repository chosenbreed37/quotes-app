import React from 'react';
import rest from 'restler';
import QuotesList from '../material-ui/quotes-list';

export default class QuoteListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { quotes: [] };

        console.log('>>> props: ', props);
    }

    componentDidMount() {
        rest.get(this.props.apiUrl + '/quotes')
            .on('complete', (quotes) => {
                this.setState({ quotes });
            })
            .on('error', err => {
                console.log('Error retrieving quotes...');
                console.log(err);
                console.log('Falling back to static file...');
                const quotes = require('../../quotes.json');
                this.setState({ quotes });
            });
    }

    render() {
        return <QuotesList quotes={this.state.quotes} />
    }
}