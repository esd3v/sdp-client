import * as React from 'react';
import chat from 'assets/icons/chat.svg';
import {Icon} from 'components/icons';

export const IconChat = React.forwardRef<HTMLSpanElement, any>((props, ref) =>
  <Icon id={chat.id} ref={ref} {...props}/>);
