import * as React from 'react';
import {Props} from './types';

export const Status: React.SFC<Props> = ({message, className}) =>
  <div className={className}>{message}</div>;
