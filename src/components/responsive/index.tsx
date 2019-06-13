import * as React from 'react';
import ReactResponsive from 'react-responsive';
import {breakpoints} from 'styles/mediaQueries';

interface Responsive {
  min: keyof typeof breakpoints;
  max?: keyof typeof breakpoints;
}

export const Responsive: React.SFC<Responsive> = ({min, max, children}) =>
  <ReactResponsive
    minWidth={breakpoints[min]}
    {...(max && {maxWidth: breakpoints[max]})}
  >{children}
  </ReactResponsive>;
