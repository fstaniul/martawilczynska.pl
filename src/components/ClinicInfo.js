import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../util/styles';

const InfoContainer = styled.div``;

const Name = styled.h4`
  color: ${({ active, theme }) => (active ? theme.active : theme.heading)};
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
  color: ${({ theme }) => theme.heading};
`;

const Email = styled.a`
  line-height: 1.1em;
  color: ${({ theme }) => theme.link};
  font-weight: 700;
  text-decoration: none;
`;

const Hours = styled.div`
  font-size: 1.2rem;
  line-height: 1em;
  color: ${({ theme }) => theme.text};
`;

const Note = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0;
`;

export default function ClinicInfo({
  active,
  name,
  note,
  street,
  town,
  phone,
  email,
  children,
  theme,
  textAlign,
  className,
  style
}) {
  return (
    <ThemeProvider theme={theme}>
      <InfoContainer textAlign={textAlign} className={className} style={style}>
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
    </ThemeProvider>
  );
}

ClinicInfo.THEMES = {
  WHITE: {
    heading: colors.white,
    text: colors.silver,
    link: colors.blue,
    active: colors.blue
  },
  BLACK: {
    heading: colors.black,
    text: colors.gray,
    link: colors.blue,
    active: colors.blue
  }
};

ClinicInfo.propTypes = {
  theme: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired
  })
};

ClinicInfo.defaultProps = {
  theme: ClinicInfo.THEMES.BLACK
};
