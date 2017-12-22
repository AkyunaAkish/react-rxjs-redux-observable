import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

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
                    { this.props.githubUsers.length ? JSON.stringify(this.props.githubUsers) : 'No Results' }
                </Paper>
            </div>
        );
    }
}

export default connect(({ githubUsers }) => ({ githubUsers }))(SearchResults);