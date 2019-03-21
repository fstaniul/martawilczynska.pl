import React from "react";
import styled from "styled-components";
import { colors, query } from "../../../styles";
import { TranslatedLocaleLink } from "../../../locale";

const StyledButton = styled(TranslatedLocaleLink)`
  border: 1px solid ${colors.white};
  border-radius: 1000px;
  background: transparent;
  outline: none;
  cursor: pointer;
  color: ${colors.white};
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: 200ms all;
  width: 100%;
  padding: 1rem;

  ${query.md`
    width: auto;
    padding: 1rem 8rem;
  `}

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
