import {css} from 'emotion';
import {lighten} from 'polished';
import * as variables from 'styles/variables';
import {mq} from 'styles/mediaQueries';

export const topicItem = css`
  padding: 12px;
  background-color: #fff;
  &:hover {
    background-color: ${lighten(0.34, variables.dodgerBlue)};
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid #d4d4d4;
  }
  &:first-child {
    border-radius: ${variables.borderRadius} ${variables.borderRadius} 0 0;
  }
  &:last-child {
    border-radius: 0 0 ${variables.borderRadius} ${variables.borderRadius};
  }
`;

export const top = css`
  overflow: hidden;
  white-space: nowrap;
`;

export const bottom = css`
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  margin-left: auto;
  font-size: 14px;
  flex-wrap: wrap;
  justify-content: flex-end;
  ${mq.sm} {
    flex-wrap: initial;
    justify-content: initial;
  }
`;

export const header = css`
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const title = css`
  color: inherit;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const author = css`
  height: 18px;
  font-size: 14px;
  margin-right: auto;
  flex-basis: 100%;
  ${mq.sm} {
    flex-basis: initial;
  }
`;

export const icon = css`
  fill: ${variables.dodgerBlue};
`;

export const iconChat = css`
  margin: 0 6px;
`;

export const iconTitle = css`
  margin-right: 6px;
`;
