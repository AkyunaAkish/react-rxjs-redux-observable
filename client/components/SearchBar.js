import React, { PureComponent } from 'react';
import AppBar from 'material-ui/AppBar';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

import { connect } from 'react-redux';
import { searchUsers, clearUsers, setSearching } from '../actions';

class SearchBar extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            iconHovered: false,
            searchLength: 0
        };
    }

    componentDidMount() {
        $('.search-input').focus();
    }

    handleSearch(user) {
        this.setState({
            searchLength: user.length || 0 
        });
        
        if(!user || !user.length) {
            this.props.clearUsers();
            $('.search-input').focus();
        } else {
            this.props.setSearching(true);
            this.props.searchUsers(user);
        }
    }
    
    handleClear() {
        this.search.value = '';
        this.setState({ searchLength: 0 });
        $('.search-input').focus();
    }

    handleMouseEnterAndLeave(bool) {
        if (this.state.searchLength && bool) {
            this.setState({ iconHovered: true });
        } else if(!bool) {
            this.setState({ iconHovered: false });
        }
    }

    render() {
        let iconContainerClass = `input-icon-container${this.state.searchLength ? ' hovered-icon-container' : ''}`;

        return (
            <div className='search-bar-container'>
                <AppBar className='search-bar' iconElementLeft={ 
                    <FormGroup className='search-input-form'>
                        <InputGroup>
                            <InputGroup.Addon className={ iconContainerClass }
                                              onClick={ () => this.state.searchLength ? this.handleClear() : null }
                                              onMouseEnter={ () => this.handleMouseEnterAndLeave(true) }
                                              onMouseLeave={ () => this.handleMouseEnterAndLeave(false) }>

                                <Glyphicon className='input-icon'                                            
                                           glyph={ this.state.iconHovered ? 'remove' : 'search' } />
                                           
                            </InputGroup.Addon>

                            <FormControl className='search-input'
                                         type='text' 
                                         inputRef={ (el) => this.search = el } 
                                         onChange={ (event) => this.handleSearch(event.target.value) }
                                         placeholder='Search by GitHub Username'/>
                        </InputGroup>
                    </FormGroup>
                 }/>
            </div>
        );
    }
}

export default connect(null, { searchUsers, clearUsers, setSearching })(SearchBar);