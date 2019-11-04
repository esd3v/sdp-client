import * as React from 'react';
import lock from 'assets/icons/lock.svg';
import {Icon} from 'components/icons';

export const IconLock = React.forwardRef<HTMLSpanElement, any>((props, ref) =>
  <Icon id={lock.id} ref={ref} {...props}/>);
