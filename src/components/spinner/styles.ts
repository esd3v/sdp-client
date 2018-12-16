import {keyframes} from 'emotion';
import styled from '@emotion/styled';
import {Props} from './types';
import {Spinner} from './spinner';
import * as variables from 'styles/variables';

const size = '64px';
const padding = '16px';

const basic = `
  box-shadow: ${variables.shadow};
  background-color: #fff;
`;

const full = `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.7);
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerStyled = styled(Spinner)((props: Props) => `
  padding: ${padding};
  display: flex;
  align-items: center;
  justify-content: center;
  ${props.full ? full : basic};
  & .spinner {
    display: inline-block;
    width: ${size};
    height: ${size};
    &:after {
      content: " ";
      display: block;
      width: 100%;
      height: 100%;
      margin: 1px;
      border-radius: 50%;
      border: 5px solid ${variables.dodgerBlue};
      border-color: ${variables.dodgerBlue} transparent ${variables.dodgerBlue} transparent;
      animation: ${animation} 1.2s linear infinite;
    },
  }
`);
