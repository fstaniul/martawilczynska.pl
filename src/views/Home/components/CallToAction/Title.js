import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const Name = styled.span`
  font-family: Niconne;
`;

const TextBlack = styled.span`
  font-weight: 900;
`;

const ForamttedStringMessage = props => (
  <FormattedMessage {...props}>{txt => txt}</FormattedMessage>
);

const Title = () => {
  return (
    <h2>
      <ForamttedStringMessage id="home.cta.choose-to" />{" "}
      <TextBlack>
        <ForamttedStringMessage id="home.cta.beautiful" />
      </TextBlack>
      <br />
      <ForamttedStringMessage id="home.cta.choose" />{" "}
      <Name>
        <ForamttedStringMessage id="home.cta.doctor-marta" />
      </Name>
    </h2>
  );
};

export default Title;
