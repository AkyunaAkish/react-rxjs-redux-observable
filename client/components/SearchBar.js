import React, { PureComponent } from 'react';
import AppBar from 'material-ui/AppBar';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

import { connect } from 'react-redux';
import { searchUsers, clearUsers } from '../actions';

class SearchBar extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $('.search-input').focus();
    }

    handleSearch(user) {
        if(!user || !user.length) {
            this.props.clearUsers();
        } else {
            this.props.searchUsers(user);
        }
    }

    render() {
        return (
            <div className='search-bar-container'>
                <AppBar className='search-bar' iconElementLeft={ 
                    <FormGroup className='search-input-form'>
                        <InputGroup>
                            <InputGroup.Addon className='input-icon-container'>
                                <Glyphicon className='input-icon' glyph='search'/>
                            </InputGroup.Addon>

                            <FormControl className='search-input'
                                         type='text' 
                                         onChange={ (event) => this.handleSearch(event.target.value) }
                                         placeholder='Search by GitHub Username'/>
                        </InputGroup>
                    </FormGroup>
                 }/>
            </div>
        );
    }
}

export default connect(null, { searchUsers, clearUsers })(SearchBar);