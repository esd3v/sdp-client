import * as React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {store} from 'store';
import {Main} from './components/main';
require('./styles/global');
require('./styles/fonts');

render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('root'),
);
