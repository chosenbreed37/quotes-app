import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class NewQuoteDialog extends React.Component {

    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({...this.state,  open: true });
    };

    handleCancel = () => {
        this.setState({...this.state,  open: false });
    };

    handleSubmit = () => {
        this.setState({...this.state, open: false });
        if (this.props.addNewQuote) {
            this.props.addNewQuote({ text: this.state.quoteText, 
                author: this.state.quoteAuthor, 
                source: this.state.quoteSource 
            });
        }
    };

    onQuoteTextChange = (e) => {
        const value = e.target.value;
        this.setState({...this.state, quoteText: value});
    };

    onAuthorChange = (e) => {
        const value = e.target.value;
        this.setState({...this.state, quoteAuthor: value});
    };

    onSourceChange = (e) => {
        const value = e.target.value;
        this.setState({...this.state, quoteSource: value});
    };

    render() {
        const actions = [
            <Button
                primary={true}
                onClick={this.handleCancel}
            >Cancel</Button>,
            <Button
                primary={true}
                onClick={this.handleSubmit}
            >Subtmit</Button>,
        ];

        return (
                <div>
                    <Button onClick={this.handleOpen}>Add</Button>
                    <Dialog
                        title="New Quote"
                        actions={actions}
                        modal={true}
                        open={this.state.open} >
                        <div>
                            <TextField id="quoteText" 
                                hintText="Lorem ipsum dolor sit amet" 
                                floatingLabelText="Text" fullWidth multiLine 
                                onChange={this.onQuoteTextChange} />
                        </div>
                        <div>
                            <TextField id="quoteAuthor" 
                                hintText="Lorem ipsum dolor sit amet" 
                                floatingLabelText="Author" 
                                onChange={this.onAuthorChange} />
                        </div>
                        <div>
                            <TextField id="quoteSource"
                                hintText="Lorem ipsum dolor sit amet" 
                                floatingLabelText="Source"
                                onChange={this.onSourceChange} />
                        </div>
                    </Dialog>
                </div>
        );
    }
}