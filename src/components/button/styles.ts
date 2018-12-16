import {css} from 'emotion';
import {lighten, darken} from 'polished';
import * as variables from 'styles/variables';

const amount = 0.075;

export const button = css`
  color: #fff;
  background-color: ${variables.dodgerBlue};
  min-width: 64px;
  &:hover {
    background-color: ${lighten(amount, variables.dodgerBlue)};
  }
  &:active {
    background-color: ${darken(amount, variables.dodgerBlue)};
  }
`;
