import React from 'react';
import ReactResponsive from 'react-responsive';
import {breakpoints} from 'styles/mediaQueries';

export const Responsive: React.FunctionComponent<{
  min: keyof typeof breakpoints;
  max?: keyof typeof breakpoints;
}> = ({min, max, children}) =>
  <ReactResponsive
    minWidth={breakpoints[min]}
    {...(max && {maxWidth: breakpoints[max]})}
  >{children}
  </ReactResponsive>;
