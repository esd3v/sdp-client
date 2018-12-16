import * as React from 'react';
import {Props} from './types';

export const Spinner: React.SFC<Props> = ({className}) => (
  <div className={className}>
    <div className="spinner"/>
  </div>
);
