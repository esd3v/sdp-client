import * as React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {store} from 'store';

const customHistory = createBrowserHistory();

export const withStoreRouter = (Component: React.FunctionComponent) => (
  <Provider store={store}>
    <Router history={customHistory}>
      <Component/>
    </Router>
  </Provider>
);
