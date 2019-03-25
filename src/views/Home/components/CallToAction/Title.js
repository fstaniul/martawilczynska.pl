import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const H2 = styled.h2`
  text-align: center;
`;

const Name = styled.span`
  font-family: Niconne;
  white-space: nowrap;
`;

const TextBlack = styled.span`
  font-weight: 900;
`;

const ForamttedStringMessage = props => (
  <FormattedMessage {...props}>{txt => txt}</FormattedMessage>
);

const Title = () => {
  return (
    <H2>
      <ForamttedStringMessage id="home.cta.choose-to" />{" "}
      <TextBlack>
        <ForamttedStringMessage id="home.cta.beautiful" />
      </TextBlack>
      <br />
      <ForamttedStringMessage id="home.cta.choose" />{" "}
      <Name>
        <ForamttedStringMessage id="home.cta.doctor-marta" />
      </Name>
    </H2>
  );
};

export default Title;
