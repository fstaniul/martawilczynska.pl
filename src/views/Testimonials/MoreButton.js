import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { colors } from "../../util/styles";

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;
  height: auto;
  width: auto;
  line-height: auto;
  padding: 0.5rem 3rem;
  color: ${colors.white};
  border-radius: 1000px;
  background: ${colors.green};
  background: linear-gradient(135deg, ${colors.blue}, ${colors.green});
  border: none;

  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
    color: ${colors.white};
  }
`;

export default function MoreButton({ load }) {
  return (
    <Container>
      <Button onClick={load}>
        <FormattedMessage id="testimonials.load-more" />
      </Button>
    </Container>
  );
}
