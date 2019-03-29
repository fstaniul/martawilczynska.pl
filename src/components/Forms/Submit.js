import React from "react";
import styled from "styled-components";
import { colors } from "../../util/styles";

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  background: ${colors.white};
  border-radius: 1000px;
  border: none;
  color: ${colors.gray};
  overflow: hidden;

  &:hover {
    color: ${colors.blue};
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
`;

const Submit = ({ children, ...props }) => {
  return (
    <StyledButton type="submit" {...props}>
      {children}
    </StyledButton>
  );
};

export default Submit;
