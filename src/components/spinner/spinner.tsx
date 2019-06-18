import * as React from 'react';
import {Props} from './types';

export const Spinner: React.SFC<Props> = ({status, className}) => (
  <div className={className}>
    <div className="status">{status}</div>
    <div className="spinner">
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  </div>
);
