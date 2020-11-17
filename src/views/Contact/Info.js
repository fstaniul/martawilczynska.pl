import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { colors } from '../../util/styles';
import Note from './Note';

const Container = styled.div`
  text-align: center;
  color: ${colors.white};

  div,
  a {
    line-height: 1em;
    margin-bottom: 0.5rem;
  }
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

const Address = styled.div`
    font-size: 2rem;
    margin-top: 1.5rem;
    
    ${Container} & {
        line-height: 1.2em;
    }
`

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
      <Address>
          ul. Malownicza 5<br/>
          54-081 Wrocław
      </Address>
    </Container>
  );
}
