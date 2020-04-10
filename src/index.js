import React from 'react';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import store from 'state/store/store';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Components
import theme from './theme/theme';

// Pages
import App from './routes/App/App';


const rootElement = document.getElementById('root');
const root = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
);

render(root, rootElement);
