import * as React from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const customHistory = createBrowserHistory();

export const withRouter = (Component: React.FunctionComponent) => (
  <Router history={customHistory}>
    <Component/>
  </Router>
);
