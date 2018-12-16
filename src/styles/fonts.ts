import {injectGlobal} from 'emotion';
import 'assets/fonts/Roboto-Regular.woff';
import 'assets/fonts/Roboto-Regular.woff2';
import 'assets/fonts/Roboto-Medium.woff';
import 'assets/fonts/Roboto-Medium.woff2';

injectGlobal({
  '@font-face': {
    fontFamily: 'Roboto',
    src: `url('assets/fonts/Roboto-Regular.woff2') format('woff2'), url('assets/fonts/Roboto-Regular.woff') format('woff')`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
}, {
  '@font-face': {
    fontFamily: 'Roboto',
    src: `url('assets/fonts/Roboto-Medium.woff2') format('woff2'), url('assets/fonts/Roboto-Medium.woff') format('woff')`,
    fontWeight: 500,
    fontStyle: 'normal',
  },
});
