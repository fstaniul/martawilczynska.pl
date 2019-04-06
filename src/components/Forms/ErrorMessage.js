import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../util/styles';

const Wrapper = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.red};
`;

const Icon = styled(FontAwesomeIcon).attrs({
  icon: 'exclamation-triangle'
})`
  margin-right: 3px;
`;

export default function ErrorMessage({ message }) {
  return (
    <Wrapper>
      <Icon />
      <FormattedMessage id={message} />
    </Wrapper>
  );
}
