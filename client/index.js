import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Loading material-ui themes
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Loading bootstrap dependencies
import 'bootstrap-loader';

// Loading custom scss styles
import './sass/style.scss';

import Layout from './components/Layout';

import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
    <Provider store={ store }>
      <Layout/>
    </Provider>
  </MuiThemeProvider>, document.querySelector('#app'));
