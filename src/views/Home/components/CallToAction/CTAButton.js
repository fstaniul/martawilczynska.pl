import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { colors } from "../../../../util/styles";
import { LocaleLink } from "../../../../util/locale";

const Button = styled(LocaleLink)`
  display: inline-block;
  outline: none;
  background: transparent;
  font-weight: 700;
  text-transform: none;
  color: ${colors.white};
  height: auto;
  border-radius: 1000px;
  border: 1px solid ${colors.white};
  text-decoration: none;
  letter-spacing: 0.1rem;
  line-height: 50px;
  height: 50px;
  width: 400px;
  max-width: 100%;
  text-align: center;
  box-sizing: border-box;

  @media screen and (max-width: 400px) {
    width: 90%;
    margin: 0 5%;
  }

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
  return (
    <Button to="contact">
      <FormattedMessage id="home.cta.button" />
    </Button>
  );
};

export default CTAButton;
