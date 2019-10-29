import * as React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {render} from 'react-dom';
import {store} from 'store';
import {Root} from 'components/routes/root';
import {ErrorBoundary} from 'components/errorBoundary';
require('./styles/global');
require('./styles/fonts');

const customHistory = createBrowserHistory();

render(
  (
    <Provider store={store}>
      <Router history={customHistory}>
        <ErrorBoundary>
          <Root/>
        </ErrorBoundary>
      </Router>
    </Provider>
  ),
  document.getElementById('root'),
);
