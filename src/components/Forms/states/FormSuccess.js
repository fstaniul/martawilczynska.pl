import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StateWrapper, StateCircle, StateText, StateIcon } from './State';
import FormBottomButton from './FormBottomButton';
import { colors } from '../../../util/styles';

export default function FormError({ onClick }) {
  return (
    <>
      <StateWrapper color={colors.green}>
        <StateCircle>
          <StateIcon icon="check" />
        </StateCircle>
        <StateText>
          <FormattedMessage id="contact.form.status.success" />
        </StateText>
      </StateWrapper>
      <FormBottomButton onClick={onClick}>
        <FormattedMessage id="contact.form.status.success.again" />
      </FormBottomButton>
    </>
  );
}
