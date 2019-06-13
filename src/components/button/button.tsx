import * as React from 'react';
import * as styles from './styles';
import {Props} from './types';

export const Button: React.SFC<Props> = ({onClick, className, children = 'Button', ...rest}) =>
  <button
    className={`${styles.button} ${className}`}
    onClick={onClick}
    {...rest}
  >{children}
  </button>;
