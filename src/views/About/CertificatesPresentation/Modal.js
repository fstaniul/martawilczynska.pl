import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../../util/styles";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  align-self: ${({ align }) => align};
  color: ${colors.white};
  font-size: 2.5rem;
  padding: 0 0.5rem;
  background: transparent;
  outline: none;
  border: none;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const NextButton = ({ icon, ...props }) => (
  <Button {...props}>
    <FontAwesomeIcon icon={icon} />
  </Button>
);

const Modal = ({ children, prev, next }) => {
  return (
    <Wrapper>
      <NextButton icon="chevron-left" onClick={prev} align="left" />
      {children}
      <NextButton icon="chevron-right" onClick={next} align="right" />
    </Wrapper>
  );
};

export default Modal;
