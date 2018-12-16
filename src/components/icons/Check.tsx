import * as React from 'react';
import check from 'assets/icons/check.svg';
import {Icon} from 'components/icons';

export const IconCheck = React.forwardRef<HTMLSpanElement, any>((props, ref) =>
  <Icon id={check.id} ref={ref} {...props}/>);
