import React from 'react';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import store from 'state/store/store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar/NavBar';
import App from './routes/App/App';
import theme from './theme/theme';

// Pages
import Settings from './routes/Settings/Settings';
import PageNotFound from './routes/PageNotFound/PageNotFound';

// Components

const rootElement = document.getElementById('root');
const root = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/settings" component={Settings} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);

render(root, rootElement);
