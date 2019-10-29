import React from 'react';
import {Props} from './types';

export const Status: React.FunctionComponent<Props> = ({message, className}) =>
  <div className={className}>{message}</div>;
