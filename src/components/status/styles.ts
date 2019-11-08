import styled from '@emotion/styled';
import {Props} from './types';
import {Status} from './status';
import * as variables from 'styles/variables';

export const StatusStyled = styled(Status)((props: Props) => `
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props.type === 'error') && 'red'};
  box-shadow: ${variables.shadow};
  background-color: #fff;
  margin-bottom: 16px;
  word-break: break-word;
`);
