import React from "react";
import { FormattedMessage } from "react-intl";
import ErrorBlock, { ErrorTextButton } from "../../components/ErrorBlock";

export default function Error({ load }) {
  return (
    <ErrorBlock>
      <FormattedMessage
        id="testimonials.error"
        values={{
          here: (
            <ErrorTextButton onClick={load}>
              <FormattedMessage id="testimonials.error.here" />
            </ErrorTextButton>
          )
        }}
      />
    </ErrorBlock>
  );
}
