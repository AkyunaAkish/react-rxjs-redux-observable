import React, { PureComponent } from 'react';
import AppBar from 'material-ui/AppBar';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

class SearchBar extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='search-bar-container'>
                <AppBar iconElementLeft={ 
                    <FormGroup className='search-input-form'>
                        <InputGroup>
                            <InputGroup.Addon className='input-icon-container'>
                                <Glyphicon className='input-icon' glyph='search'/>
                            </InputGroup.Addon>

                            <FormControl className='search-input' type='text' placeholder='Search by GitHub Username'/>
                        </InputGroup>
                    </FormGroup>
                 }/>
            </div>
        );
    }
}

export default SearchBar;