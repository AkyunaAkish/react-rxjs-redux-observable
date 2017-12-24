import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import LoadingSpinner from './LoadingSpinner';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';

class SearchResults extends PureComponent {
    constructor(props) {
        super(props);
    }

    renderInitialContent() {
        return (
            <div className='initial-content-container'>
                <img src='/images/github.png' />
                <h4>Welcome! You can search for GitHub users with the search bar above.</h4>
            </div>
        );  
    }

    renderUsers(users) {
        return users.map((user, i) => {
            return (
                <a href={ user.html_url } key={ i } target='_blank'>
                    <ListItem primaryText={ user.login }
                              className='github-user'
                              leftAvatar={ <Avatar src={ user.avatar_url } /> } />
                </a>
            );
        });
    }

    render() {
        return (
            <div className='search-results-container'>
                <Paper className={ `search-result-paper${this.props.isSearching ? ' is-searching' : ''}` } 
                       zDepth={ 1 }>
                    
                       { !this.props.hasSearched ?  this.renderInitialContent()  : <span></span> }
                    
                    { this.props.githubUsers.length && !this.props.isSearching && this.props.hasSearched ? 
                                                        <h5 className='text-right margin-right-sm'>
                                                         { `${this.props.githubUsers.length} 
                                                            GitHub 
                                                            user${this.props.githubUsers.length > 1 ? 's' : ''} 
                                                            found` }
                                                        </h5> 
                                                    : <span></span> }
                    <List>
                        { this.props.githubUsers.length && !this.props.isSearching ? this.renderUsers(this.props.githubUsers) : <span></span> }
                        { !this.props.isSearching && !this.props.githubUsers.length && this.props.hasSearched ? <h2>No Results</h2> : <span></span>  }
                        { this.props.isSearching ? <LoadingSpinner/> : <span></span>  }
                    </List>
                </Paper>
            </div>
        );
    }
}

export default connect(({ githubUsers }) => ({ 
                                                githubUsers: githubUsers.users, 
                                                isSearching: githubUsers.isSearching, 
                                                hasSearched: githubUsers.hasSearched 
                                            }))(SearchResults);