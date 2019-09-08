import * as React from 'react';
import {Props} from './types';

export const Status: React.SFC<Props> = ({title, className}) =>
  <div className={className}>{title}</div>;
