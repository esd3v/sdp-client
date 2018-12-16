import * as React from 'react';
import * as styles from './styles';
import {Props} from './types';

export const Icon = React.forwardRef<HTMLSpanElement, Props>(({id, className, ...rest}, ref) => (
  <span ref={ref} className={className ? `${styles.wrapper} ${className}` : `${styles.wrapper}`} {...rest}>
    <svg className={styles.icon}>
      <use xlinkHref={`#${id}`} />
    </svg>
  </span>
));
