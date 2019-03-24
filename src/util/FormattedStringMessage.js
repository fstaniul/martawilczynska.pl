import React from "react";
import { FormattedMessage } from "react-intl";

export default props => (
  <FormattedMessage {...props}>{txt => txt}</FormattedMessage>
);
