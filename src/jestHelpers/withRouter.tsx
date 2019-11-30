import * as React from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const defaultHistory = createBrowserHistory();

export const withRouter = ({
  component: Component,
  history = defaultHistory,
}: {
  component: JSX.Element;
  history?: typeof defaultHistory;
}) => (
  <Router history={history}>
    {Component}
  </Router>
);

