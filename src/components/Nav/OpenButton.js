import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import IconButton from "../UI/IconButton";
import { useNavState } from "../../containers/Nav";
import { colors } from "../../styles";

const StyledButton = styled(IconButton)`
  z-index: 1000000;
  position: absolute;
  display: block;
  top: 30px;
  right: 30px;

  color: ${colors.silver};
  transition: 100ms color;

  &:hover,
  &:active {
    color: ${colors.white};
  }
`;

const OpenButton = () => {
  const setOpen = useNavState()[1];
  return (
    <StyledButton onClick={() => setOpen(true)}>
      <FontAwesomeIcon icon="bars" size="2x" />
    </StyledButton>
  );
};

export default OpenButton;
