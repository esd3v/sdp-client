import * as React from 'react';
import * as styles from './styles';
import {Props} from './types';

export const Button: React.SFC<Props> = ({onClick, children = 'Button'}) =>
  <button className={styles.button} onClick={onClick}>{children}</button>;
