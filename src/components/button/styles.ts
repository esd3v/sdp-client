import {css} from 'emotion';
import {lighten, darken} from 'polished';
import * as variables from 'styles/variables';

const amount = 0.075;

export const button = css`
  color: #fff;
  font-size: 16px;
  background-color: ${variables.dodgerBlue};
  box-shadow: ${variables.shadow};
  min-width: 64px;
  &:hover:enabled  {
    background-color: ${lighten(amount, variables.dodgerBlue)};
  }
  &:active:enabled {
    background-color: ${darken(amount, variables.dodgerBlue)};
  }
  &:disabled {
    background-color: ${darken(0.25, '#fff')};
  }
`;
