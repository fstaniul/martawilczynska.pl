import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../util/styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Line = styled.span`
  background: ${({ isSelected }) => (isSelected ? colors.gray : "#9A9A9A")};
  height: 5px;
  width: 50px;
  position: absolute;
  top: 5px;
  left: 0px;
  border-radius: 5px;
`;

const Control = styled.button`
  flex: 1 auto;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0 0.5rem;
  height: 15px;
  width: 50px;
  position: relative;
  border-radius: 0;
`;

const Controls = ({ set, sections, selected }) => {
  if (sections <= 1) return null;

  const buttons = [];
  for (let i = 0; i < sections; ++i)
    buttons.push(
      <Control key={i} onClick={() => set(i)}>
        <Line isSelected={selected === i} />
      </Control>
    );

  return <Wrapper>{buttons}</Wrapper>;
};

Controls.propTypes = {
  set: PropTypes.func.isRequired,
  sections: PropTypes.number.isRequired
};

export default Controls;
