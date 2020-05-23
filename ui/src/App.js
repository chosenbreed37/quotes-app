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
    this.state = { term: '', quotes: [] };
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
        this.setState({ term: searchTerm, quotes });
      })
      .on('error', err => {
        console.log(err);
      });
  }

  onChangeSearchTerm = (term) => {
    this.setState({ ...this.state, term });
  }

  onSubmit = (evt) => {
    this.onSearch(this.state.term);
    evt.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.onSubmit}>
            <SearchBox onSearch={this.onSearch} onChangeSearchTerm={this.onChangeSearchTerm} />
          </form>
          {/* <NewQuoteDialog addNewQuote={this.onAddNewQuote} /> */}
        </header>
        {/* <p className="App-intro">
        </p> */}
        {this.quotes && this.quotes.length && <hr/>}
        <QuotesList quotes={this.state.quotes} />
      </div>
    );
  }
}

export default App;
