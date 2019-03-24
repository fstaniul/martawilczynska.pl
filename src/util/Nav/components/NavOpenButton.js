import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import IconButton from "../../../components/IconButton";
import { useNavState } from "../useNavState";
import { colors } from "../../styles";

const StyledButton = styled(IconButton)`
  z-index: 1000000;
  position: absolute;
  display: block;
  top: 30px;
  right: 30px;
  padding: 0;
  margin: 0;

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
