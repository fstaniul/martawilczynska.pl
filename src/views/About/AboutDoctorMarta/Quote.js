import React from "react";
import styled from "styled-components";
import { colors } from "../../../util/styles";

const Wrapper = styled.div`
  padding: 1.5rem 0;
  text-align: center;
`;

const Text = styled.span`
  color: ${({ color }) => colors[color] || color};
  font-family: "Indie Flower";
  font-size: 2.5rem;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Text color="blue">
        "Give every day the chance to become the most beautiful day of your
        life."
      </Text>
      <Text color="black">&nbsp;- Mark Twain</Text>
    </Wrapper>
  );
};

export default Quote;
