import React, { PureComponent } from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

class SearchResults extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='search-results-container'>
                <Paper className='search-result-paper' zDepth={ 1 }>
                    <h1>SearchResults</h1>
                </Paper>
            </div>
        );
    }
}

export default SearchResults;