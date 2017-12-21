import React from 'react';
import Quote from './quote';

const QuotesList = ({ quotes }) => {
  return (<div style={{ width: '50%', margin: '0 auto' }}>
     {
      quotes.map(quote => <Quote key={quote.id} {...quote } />)
    } 
  </div>);
};

export default QuotesList;