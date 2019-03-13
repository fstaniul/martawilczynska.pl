import React from "react";
import styled from "styled-components";
import { colors } from "../../../styles";
import { TranslatedLocaleLink } from "../../../locale";

const StyledButton = styled(TranslatedLocaleLink)`
  border: 1px solid ${colors.white};
  border-radius: 1000px;
  padding: 0.7rem 3rem;
  background: transparent;
  outline: none;
  cursor: pointer;
  color: ${colors.white};
  text-decoration: none;
  width: 100%;
  display: block;
  text-align: center;
  transition: 200ms all;

  &:hover {
    color: ${colors.black};
    background: ${colors.white};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  }
`;

const Button = () => {
  return <StyledButton to="contact" id="home.cta.button" />;
};

export default Button;
