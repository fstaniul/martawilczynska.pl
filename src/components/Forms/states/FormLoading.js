import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StateWrapper, StateLoader, StateText } from './State';
import { colors } from '../../../util/styles';

export default function FormError({ onClick }) {
  return (
    <StateWrapper color={colors.blue}>
      <StateLoader />
      <StateText>
        <FormattedMessage id="contact.form.status.loading" />
      </StateText>
    </StateWrapper>
  );
}
