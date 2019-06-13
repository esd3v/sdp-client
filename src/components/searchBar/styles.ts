import {css} from 'emotion';
import * as variables from 'styles/variables';
import {mq} from 'styles/mediaQueries';

export const searchBar = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  & > *:first-of-type {
    margin-bottom: 16px;
    box-shadow: ${variables.shadow};
  }
  button {
    min-height: 36px;
  }
  ${mq.sm} {
    flex-direction: row;
    & > *:first-of-type {
      margin-bottom: 0;
    }
  }
`;
