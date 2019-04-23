import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { colors, query } from '../../util/styles';
import { LocaleLink } from '../../util/locale';
import ClinicBackground from '../../components/Containers/ClinicBackground';

const Container = styled(ClinicBackground)`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
  color: ${colors.white};
  padding: 1.5rem;

  ${query.sm`
    flex-flow: row nowrap;
    align-items: center;
  `}
`;

const Link = styled(LocaleLink)`
  color: ${colors.white};
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  :hover,
  :focus,
  :visited {
    color: ${colors.white};
    text-decoration: none;
  }
`;

const ErrorBox = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${colors.white};
  padding: 2rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid;
  border-color: ${colors.white};
  text-align: center;

  ${query.sm`
    border-bottom: none;
    border-right: 1px solid;
    margin-bottom: 0;
    margin-right: 2rem;
    padding: 1rem 2rem;
  `}
`;

const NotFound404 = () => {
  return (
    <Container>
      <ErrorBox>404</ErrorBox>
      <FormattedMessage
        id="page.not-found"
        values={{
          here: (
            <Link to="contact">
              <FormattedMessage id="page.not-found.here" />
            </Link>
          ),
          br: <br />
        }}
      />
    </Container>
  );
};

export default NotFound404;
