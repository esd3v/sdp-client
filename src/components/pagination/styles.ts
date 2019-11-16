import {css} from 'emotion';
import * as variables from 'styles/variables';

const highlighted = css`
  color: #fff;
  background-color: ${variables.dodgerBlue};
`;

export const container = css`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 16px 0;
`;

export const pageItem = css`
  display: 'flex',
`;

export const pageLink = css`
  width: 32px;
  height: 100%;
  cursor: pointer;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${variables.shadow};
  background-color: #fff;
  &:hover {
    ${highlighted}
  }
`;

export const activeLink = css`
  & a {
    ${highlighted}
  };
`;

export const button = css`
  ${pageLink};
  width: auto;
  height: auto;
  color: initial;
  font-size: 16px;
  a {
    padding: 6px 8px;
  }
`;

export const mobileButton = css`
  padding: 6px 8px;
`;

export const select = css`
  width: 50%;
  margin: 0 16px;
`;
