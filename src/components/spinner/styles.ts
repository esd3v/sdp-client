import {keyframes} from 'emotion';
import styled from '@emotion/styled';
import {Props} from './types';
import {Spinner} from './spinner';
import * as variables from 'styles/variables';

const circleSize = '11px';
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

const animation1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const animation2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`;

const animation3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const SpinnerStyled = styled(Spinner)((props: Props) => `
  padding: ${padding};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 96px;
  border-radius: ${variables.borderRadius};
  ${props.full ? full : basic};
  & .spinner {
    display: flex;
    align-items: center;
    position: relative;
    width: 55px;
    height: ${circleSize};
    & div {
      position: absolute;
      width: ${circleSize};
      height: ${circleSize};
      border-radius: 50%;
      background-color: ${variables.dodgerBlue};
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
      &:nth-of-type(1) {
        left: 6px;
        animation: ${animation1} 0.6s infinite;
      }
      &:nth-of-type(2) {
        left: 6px;
        animation: ${animation2} 0.6s infinite;
      }
      &:nth-of-type(3) {
        left: 26px;
        animation: ${animation2} 0.6s infinite;
      }
      &:nth-of-type(4) {
        left: 45px;
        animation: ${animation3} 0.6s infinite;
      }
    },
  }
`);
