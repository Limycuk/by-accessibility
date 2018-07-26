import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import createStore, { history } from '../../store';
import Header from '../Header';
import Home from '../../pages/Home';

const { store } = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default withStyles(styles)(App);
