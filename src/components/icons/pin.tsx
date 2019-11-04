import * as React from 'react';
import pin from 'assets/icons/pin.svg';
import {Icon} from 'components/icons';

export const IconPin = React.forwardRef<HTMLSpanElement, any>((props, ref) =>
  <Icon id={pin.id} ref={ref} {...props}/>);
