import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const NameDisplay = styled.div`
  line-height: 1em;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
const DateDisplay = styled.div`
  font-size: 1.2rem;
`;

const Heading = ({ name, date }) => {
  return (
    <div>
      <NameDisplay>{name}</NameDisplay>
      <DateDisplay>{date}</DateDisplay>
    </div>
  );
};

Heading.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Heading;
