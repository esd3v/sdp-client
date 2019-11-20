import {css} from 'emotion';
import * as variables from 'styles/variables';
import {mq} from 'styles/mediaQueries';

export const searchBar = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 16px;
  & > * {
    box-shadow: ${variables.shadow};
  }
  input {
    width: 100%;
    padding: 12px 8px;
    margin-bottom: 16px;
    border-radius: ${variables.borderRadius};
  }
  button {
    min-height: 36px;
    min-width: 104px;
  }
  ${mq.sm} {
    flex-direction: row;
    & > *:first-of-type {
      margin-bottom: 0;
    }
    input {
      padding: 12px 8px;
      width: 77%;
    }
  }
`;
