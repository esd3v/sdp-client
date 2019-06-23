import * as React from 'react';
import {Main} from 'components/main';
import {Route} from 'react-router-dom';

export const Root: React.SFC = () =>
  <Route
    path={[
      '/app/:appID/page/:page',
      '/app/:appID',
      '*',
    ]}
    component={Main}
  />;
