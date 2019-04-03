import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../util/styles";
import { FormattedMessage } from "react-intl";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: auto;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 3.2rem;
  color: ${colors.blue};
  margin-right: 2rem;
`;

const Text = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.blue};
  background: #eeeeee;
  padding: 2rem;
  border-radius: 5px;
`;

export default function Information() {
  return (
    <Wrapper>
      <Icon icon="info-circle" />
      <Text>
        <FormattedMessage id="directions.info" />
      </Text>
    </Wrapper>
  );
}
