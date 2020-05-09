import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const QuotesList = ({ quotes }) => {
  return (
    <List>
      {
        quotes.map(quote => <ListItem key={quote.id}>
          <ListItemText secondary={quote.author} primary={'"' + quote.text + '"'} />
        </ListItem>)
      }
    </List>
  );
};

export default QuotesList;