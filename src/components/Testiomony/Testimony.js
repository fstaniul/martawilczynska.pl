import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Stars from "./Stars";
import Heading from "./Heading";
import { colors } from "../../util/styles";

const Container = styled.div`
  border-radius: 0.5rem;
  display: block;
  background: ${colors.silver};
  color: ${colors.black};
  padding: 3rem;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
`;

const Testimony = ({ content, name, date, stars }) => {
  return (
    <Container>
      <HeadingWrapper>
        <Heading name={name} date={date} />
        <Stars stars={stars} />
      </HeadingWrapper>
      <Text>{content}</Text>
    </Container>
  );
};

Testimony.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
};

export default Testimony;
