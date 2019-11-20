import {injectGlobal} from 'emotion';
import RobotoRegularWoff from 'assets/fonts/Roboto-Regular.woff';
import RobotoRegularWoff2 from 'assets/fonts/Roboto-Regular.woff2';
import RobotoMediumWoff from 'assets/fonts/Roboto-Medium.woff';
import RobotoMediumWoff2 from 'assets/fonts/Roboto-Medium.woff2';

injectGlobal`
  @font-face {
    font-family: 'Roboto';
    font-weight: 'normal';
    font-style: 'normal';
    src:
      url('${RobotoRegularWoff2}') format('woff2'),
      url('${RobotoRegularWoff}') format('woff');
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-style: normal;
    src:
      url('${RobotoMediumWoff2}') format('woff2'),
      url('${RobotoMediumWoff}') format('woff');
  },
`;
