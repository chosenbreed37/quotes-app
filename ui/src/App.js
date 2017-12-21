import React, { Component } from 'react';
import logo from './assets/images/mustache.png';
import './App.css';

import QuoteListContainer from './components/containers/quote-list-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Le Moustache</h1>
          <hr />
        </header>
        <p className="App-intro">
        </p>
        <QuoteListContainer env={this.props.config && this.props.config.env} apiUrl={this.props.config && this.props.config.api_url} />
      </div>
    );
  }
}

export default App;
