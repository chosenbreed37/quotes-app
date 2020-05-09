import React, { Component } from 'react';
import rest from 'restler';
import logo from './assets/images/mustache.png';
import './App.css';
import QuotesList from './components/material-ui/quotes-list';
import NewQuoteDialog from './components/material-ui/new-quote-dialog';
import SearchBox from './components/material-ui/search-box';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quotes: [] };
  }

  componentDidMount() {
  }

  onAddNewQuote = (quote) => {
    rest.postJson(this.props.config.api_url + '/quotes', quote)
      .on('complete', (result) => {
        const quotes = [{ ...quote, id: result }].concat(this.state.quotes);
        this.setState({ quotes });
      })
      .on('error', err => {
        console.log(err);
      });
  }

  onSearch = (searchTerm) => {
    rest.get(this.props.config.api_url + '/quotes?q=' + searchTerm)
      .on('complete', (quotes) => {
        this.setState({ quotes });
      })
      .on('error', err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBox onSearch={this.onSearch} />
          <NewQuoteDialog addNewQuote={this.onAddNewQuote} />
          <hr />
        </header>
        <p className="App-intro">
        </p>
        <QuotesList quotes={this.state.quotes} />
      </div>
    );
  }
}

export default App;
