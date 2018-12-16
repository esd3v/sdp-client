import {css} from 'emotion';
import {lighten} from 'polished';
import * as variables from 'styles/variables';

export const topicItem = css`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #fff;
  &:hover {
    background-color: ${lighten(0.34, variables.dodgerBlue)};
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid #d4d4d4;
  }
`;

export const left = css`
  margin-right: 8px;
  overflow: hidden;
  white-space: nowrap;
`;

export const right = css`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: auto;
  font-size: 14px;
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
