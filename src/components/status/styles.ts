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
  color: ${(() => {
    switch (props.type) {
      case 'error': return 'red';
      case 'success': return 'green';
      default: return 'inherit';
    }
  })()};
  box-shadow: ${variables.shadow};
  background-color: #fff;
  margin-bottom: 16px;
  word-break: break-word;
  border-radius: ${variables.borderRadius};
`);
