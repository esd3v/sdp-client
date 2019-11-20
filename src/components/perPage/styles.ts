import {css} from 'emotion';
import * as variables from 'styles/variables';

export const perPage = css`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #fff;
  box-shadow: ${variables.shadow};
  border-radius: ${variables.borderRadius};
  margin-bottom: 16px;
  & .label {
    margin-right: 8px;
  }
  & select {
    padding: 3px 8px;
  }
`;
