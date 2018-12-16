import {injectGlobal} from 'emotion';

injectGlobal({
  html: {
    height: '100%',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto, Arial, sans-serif',
    color: '#333',
    fontSize: '16px',
    backgroundColor: '#eee',
  },
  'input, button': {
    border: 0,
    outline: 0,
  },
  '.tippy-backdrop': {
    backgroundColor: 'rgba(51, 51, 51, 0.85)',
  },
});
