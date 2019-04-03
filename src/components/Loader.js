import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../util/styles";

const AnimationFirst = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const AnimationSecond = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`;

const AnimationThird = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const StyledLoader = styled.div`
  display: block;
  margin: 0 auto;
  position: relative;
  width: 64px;
  height: 64px;

  div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${colors.blue};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 6px;
    animation: ${AnimationFirst} 0.6s infinite;
  }

  div:nth-child(2) {
    left: 6px;
    animation: ${AnimationSecond} 0.6s infinite;
  }

  div:nth-child(3) {
    left: 26px;
    animation: ${AnimationSecond} 0.6s infinite;
  }

  div:nth-child(4) {
    left: 45px;
    animation: ${AnimationThird} 0.6s infinite;
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <div />
      <div />
      <div />
      <div />
    </StyledLoader>
  );
};

export default Loader;
