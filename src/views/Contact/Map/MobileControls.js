import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../util/styles';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Control = styled.button`
  outline: none;
  background: ${props => (props.active ? colors.white : 'transparent')};
  border: 3px solid ${colors.white};
  border-radius: 10px;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0 2px;

  :hover {
    background: ${colors.white};
    border-color: ${colors.white};
  }

  :focus {
    border-color: ${colors.white};
  }
`;

export default function MobileControls({ controls, setActive, active }) {
  const arr = Array.from({ length: controls }).map((_, i) => i);
  return (
    <Wrapper>
      {arr.map(index => (
        <Control key={index} active={active === index} onClick={setActive(index)} />
      ))}
    </Wrapper>
  );
}
