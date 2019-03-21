import React from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import { media, fluidTypography } from "../../../styles";

const Wrapper = styled.h1`
  font-weight: 400;
  ${fluidTypography(20, 42, media.sm, media.lg)}
`;

const Name = styled.span`
  font-family: "Niconne", cursive;
`;

const Text = ({ intl: { formatMessage } }) => {
  return (
    <Wrapper>
      {formatMessage({ id: "home.cta.choose-to-be" }).toUpperCase()}{" "}
      <strong>
        {formatMessage({ id: "home.cta.beautiful" }).toUpperCase()}
      </strong>
      <br />
      {formatMessage({ id: "home.cta.choose" }).toUpperCase()}{" "}
      <Name>{formatMessage({ id: "home.cta.doctor-marta" })}</Name>
    </Wrapper>
  );
};

export default injectIntl(Text);
