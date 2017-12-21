import React from 'react';
import { List, ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const QuotesList = ({ quotes }) => {
  return (
    <MuiThemeProvider>
      <List>
        {
          quotes.map(quote => <ListItem key={quote.id} primaryText={quote.author} secondaryText={<p>&quot;{quote.text}&quot;</p>} secondaryTextLines={2} />)
        }
      </List>
    </MuiThemeProvider>
  );
};

export default QuotesList;