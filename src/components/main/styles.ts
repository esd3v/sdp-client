import {css} from 'emotion';
import {mq} from 'styles/mediaQueries';

export const main = css`
  padding: 12px;
  margin: 0 auto;
  ${mq.sm} {
    width: 576px;
    padding: 32px;
  }
`;
