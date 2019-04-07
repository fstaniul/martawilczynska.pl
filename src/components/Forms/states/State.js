import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../../util/styles';

export const StateWrapper = styled.div`
  color: ${({ color }) => color};
  border-color: ${({ color }) => color};
`;

StateWrapper.defaultProps = {
  color: colors.blue
};

export const StateCircle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  font-size: 4.2rem;
  border: 10px solid;
  border-color: inherit;
  color: inherit;
  text-align: center;
  margin: 0 auto 2rem;
`;

export const StateIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StateText = styled.div`
  color: inherit;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const loaderAnimation = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const StyledStateLoader = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 2rem;
  border-color: inherit;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    margin: 0;
    border: 10px solid transparent;
    border-radius: 50%;
    animation: ${loaderAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${colors.blue} transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export function StateLoader() {
  return (
    <StyledStateLoader>
      <div />
      <div />
      <div />
      <div />
    </StyledStateLoader>
  );
}
