import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from 'store';

export const withStore = (Component: React.FunctionComponent) => (
  <Provider store={store}>
      <Component/>
  </Provider>
);
