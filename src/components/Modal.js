import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../util/styles";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  z-index: 10000000;
`;

const ModalItemContainer = styled.div`
  flex: 1 auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  align-self: ${({ align }) => align};
  color: ${colors.white};
  font-size: 2.5rem;
  padding: 0 2rem;
  background: transparent;
  outline: none;
  border: none;
  height: 100%;

  &:hover {
    background: ${colors.black};
    background: rgba(0, 0, 0, 0.6);
    color: ${colors.white};
  }
`;

const NextButton = ({ icon, ...props }) => (
  <Button {...props}>
    <FontAwesomeIcon icon={icon} />
  </Button>
);

const Modal = ({ children, prev, next, close }) => {
  const onClick = useCallback(
    func => event => {
      event.stopPropagation();
      func();
    },
    []
  );

  useEffect(() => {
    const listener = event => {
      event = event || window.event;
      let isEscape = false;
      if ("key" in event) isEscape = event.key === "Escape" || event.key === "Esc";
      else isEscape = event.keyCode === 27;

      if (isEscape) close();
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [close]);

  return (
    <Wrapper onClick={() => close()}>
      <NextButton icon="chevron-left" onClick={onClick(prev)} align="flex-left" />
      <ModalItemContainer>{children}</ModalItemContainer>
      <NextButton icon="chevron-right" onClick={onClick(next)} align="flex-right" />
    </Wrapper>
  );
};

Modal.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
};

export default Modal;
