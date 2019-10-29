import React from 'react';
import {Props} from './types';

export const Spinner: React.FunctionComponent<Props> = ({className}) => (
  <div className={className}>
    <div className="spinner">
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  </div>
);
