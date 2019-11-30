import * as React from 'react';
import {createBrowserHistory} from 'history';
import {render} from 'react-dom';
import {store} from 'store';
import {withStoreRouter} from 'helpers/react';
import {Root} from 'components/routes/root';
import {ErrorBoundary} from 'components/errorBoundary';
require('./styles/global');
require('./styles/fonts');

const history = createBrowserHistory();

render(withStoreRouter({
  component: (
    <ErrorBoundary>
      <Root/>
    </ErrorBoundary>
  ),
  history,
  store,
}),
  document.getElementById('root'),
);
