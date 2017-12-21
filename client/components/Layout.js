import React, { PureComponent } from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class Layout extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='layout-container'>
                <SearchBar/>
                <SearchResults/>
            </div>
        );
    }
}

export default Layout;