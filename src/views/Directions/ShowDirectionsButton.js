import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../util/styles";
import { FormattedMessage } from "react-intl";
import IconButton from "../../components/IconButton";

const Icon = styled(FontAwesomeIcon)`
  display: block;
  font-size: 4.8rem;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const Wrapper = styled(IconButton)`
  line-height: 1em;
  color: ${({ active }) => (active ? colors.blue : colors.black)};
  text-align: center;
  padding: 0;
  height: auto;
  margin: 0;

  &:hover {
    color: ${colors.blue};
  }
`;

export default function ShowDirectionsButton({ onClick, active }) {
  return (
    <Wrapper onClick={onClick} active={active}>
      <Icon icon="location-arrow" />
      <FormattedMessage id="directions.show-direction" values={{ br: <br /> }} />
    </Wrapper>
  );
}
