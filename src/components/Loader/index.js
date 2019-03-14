import React from "react";
import styled, { keyframes } from "styled-components";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../styles";

const breathingAnimation = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
`;

const HeartIcon = styled(FontAwesomeIcon).attrs({
  icon: "heartbeat",
  size: "2x"
})`
  animation: ${breathingAnimation} 1.2s infinite
    cubic-bezier(0.215, 0.61, 0.355, 1);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
`;

const Loader = () => {
  return (
    <Wrapper>
      <HeartIcon />
      <FormattedMessage id="page.loading">
        {msg => <div>{msg}...</div>}
      </FormattedMessage>
    </Wrapper>
  );
};

export default Loader;
