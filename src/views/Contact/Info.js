import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { colors } from '../../util/styles';

const Container = styled.div`
  text-align: center;
  color: ${colors.white};

  div,
  a {
    line-height: 1em;
    margin-bottom: 0.5rem;
  }
`;

const Note = styled.div`
  font-size: 2.4rem;
  font-family: 'Indie Flower', cursive;
  margin-bottom: 2rem;
`;

const Name = styled.div`
  font-size: 4.2rem;
  font-weight: 300;
  letter-spacing: -0.1rem;
  margin-bottom: 1rem;
`;

const Phone = styled.a`
  text-decoration: none;
  color: ${colors.white};
  font-size: 3rem;
  font-weight: 400;
  cursor: pointer;

  :hover {
    color: ${colors.white};
    text-decoration: underline;
  }
`;

const Email = styled.a`
  text-decoration: none;
  color: ${colors.white};
  font-size: 2.4rem;
  font-weight: 400;
  cursor: pointer;

  :hover {
    color: ${colors.white};
    text-decoration: underline;
  }
`;

export default function Info() {
  return (
    <Container>
      <Note>
        <FormattedMessage id="contact.ask-question" />:
      </Note>
      <div>
        <Name>Marta Wilczyńska-Staniul</Name>
      </div>
      <div>
        <Phone href="tel:+48501531926">+48 501 531 926</Phone>
      </div>
      <Email href="mailto:martawilczynska.pl@gmail.com">martawilczynska.pl@gmail.com</Email>
    </Container>
  );
}
