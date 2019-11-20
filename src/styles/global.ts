import {injectGlobal} from 'emotion';

injectGlobal`
  html {
    height: 100%;
    font-size: 16px;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Arial, sans-serif;
    color: #333;
    font-size: 16px;
    background-color: #e5e5e5;
  }
  input, button {
    border: 0;
    outline: 0;
  }
  button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
  }
  .tippy-backdrop {
    background-color: rgba(51, 51, 51, 0.85);
  }
`;
