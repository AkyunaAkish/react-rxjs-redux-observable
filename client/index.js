import React from 'react';
import ReactDOM from 'react-dom';

// Loading material-ui themes
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Loading bootstrap dependencies
import 'bootstrap-loader';

// Loading custom scss styles
import './sass/style.scss';

import Layout from './components/Layout';

ReactDOM.render(
  <MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
    <Layout/>
  </MuiThemeProvider>, document.querySelector('#app'));
