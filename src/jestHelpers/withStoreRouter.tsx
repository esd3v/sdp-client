import * as React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {store as defaultStore} from 'store';

const defaultHistory = createBrowserHistory();

export const withStoreRouter = ({
  component: Component,
  store = defaultStore,
  history = defaultHistory,
}: {
  component: JSX.Element;
  store?: typeof defaultStore;
  history?: typeof defaultHistory;
}) => (
  <Provider store={store}>
    <Router history={history}>
      {Component}
    </Router>
  </Provider>
);

