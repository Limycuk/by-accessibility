import React from 'react';
import { ConnectedRouter } from 'react-router-redux';

import createStore, { history } from '../../store';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={() => <span>test</span>} />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
