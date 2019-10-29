import React from 'react';
import * as styles from './styles';
import {Props} from './types';

export const Button: React.FunctionComponent<Props> = ({
  onClick,
  className,
  children = 'Button',
  ...rest
}) =>
  <button
    className={`${styles.button} ${className}`}
    onClick={onClick}
    {...rest}
  >{children}
  </button>;
