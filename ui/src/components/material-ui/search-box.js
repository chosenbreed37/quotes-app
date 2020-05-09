import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const SearchBox = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div>
            <TextField value={searchTerm} variant='outlined' onChange={onChangeSearchTerm} />
            <Button onClick={() => { onSearch(searchTerm) }}>Search</Button>
        </div>
    );
}

export default SearchBox;