import React from 'react';
import styled from 'styled-components';
import { colors } from '../../util/styles';
import ShowDirectionsButton from './ShowDirectionsButton';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const InfoContainer = styled.div`
  margin-right: 2rem;
`;

const Name = styled.h4`
  color: ${({ active }) => (active ? colors.blue : colors.black)};
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Section = styled.div`
  padding-bottom: 2rem;

  &:nth-last-child(1) {
    padding-bottom: 0;
  }
`;

const Text = styled.div`
  line-height: 1.1em;
  color: ${colors.black};
`;

const Email = styled.a`
  line-height: 1.1em;
  color: ${colors.blue};
  font-weight: 700;
  text-decoration: none;
`;

const Hours = styled.div`
  font-size: 1.2rem;
  line-height: 1em;
  color: ${colors.gray};
`;

const Note = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${colors.gray};
  letter-spacing: 0;
`;

function Directions({ name, street, town, phone, email, children, note, onClick, active }) {
  return (
    <Wrapper>
      <InfoContainer>
        <Name active={active}>
          {name}
          <Note>{note}</Note>
        </Name>
        <Section>
          <Text>{street}</Text>
          <Text>{town}</Text>
        </Section>
        <Section>
          <Text>{phone}</Text>
          <Email href={`mailto:${email}`}>{email}</Email>
        </Section>
        <Hours>{children}</Hours>
      </InfoContainer>
      <div>
        <ShowDirectionsButton onClick={onClick} active={active} />
      </div>
    </Wrapper>
  );
}

Directions.defaultProperty = {
  note: null
};

export default Directions;
