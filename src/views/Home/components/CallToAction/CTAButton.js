import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { colors } from "../../../../util/styles";
import { useLocale, localizePath } from "../../../../util/locale";

const Button = styled(Link)`
  display: inline-block;
  outline: none;
  background: transparent;
  padding: 1.5rem 5rem;
  font-size: 2rem;
  font-weight: 300;
  text-transform: none;
  color: ${colors.white};
  height: auto;
  border-radius: 1000px;
  border: 1px solid ${colors.white};
  transition: all 150ms linear;
  text-decoration: none;
  letter-spacing: 0.1rem;

  &:hover,
  &:focus,
  &:active {
    color: ${colors.blue};
    background: ${colors.white};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
    border: 1px solid ${colors.white};
    text-decoration: none;
  }
`;

const CTAButton = () => {
  const [locale] = useLocale();

  return (
    <Button to={localizePath(locale, "contact")}>
      <FormattedMessage id="home.cta.button" />
    </Button>
  );
};

export default CTAButton;
