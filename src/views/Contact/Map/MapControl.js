import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../util/styles';

const ControlContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(${props => props.x + 'px, ' + props.y + 'px'});
  display: flex;
  align-items: center;
  color: ${colors.white};
  cursor: pointer;
`;

const ControlCircle = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.white};
  border-radius: 10px;
  margin-right: 4px;
  background: ${props => (props.active ? colors.white : 'transparent')};
  transition: background 200ms ease;

  ${ControlContainer}:hover & {
    background: ${colors.silver};
  }
`;

export default function MapControl({ text, setActive, pos, active }) {
  return (
    <ControlContainer onClick={setActive} x={pos.x} y={pos.y}>
      <ControlCircle active={active} />
      {text}
    </ControlContainer>
  );
}
