import * as React from 'react';
import {Provider} from 'react-redux';
import {store as defaultStore} from 'store';

export const withStore = ({
  component: Component,
  store = defaultStore,
}: {
  component: JSX.Element;
  store?: typeof defaultStore;
}) => (
  <Provider store={store}>
    {Component}
  </Provider>
);

