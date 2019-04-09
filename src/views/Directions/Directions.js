import React from 'react';
import styled from 'styled-components';
import ShowDirectionsButton from './ShowDirectionsButton';
import ClinicInfo from '../../components/ClinicInfo';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

function Directions({ clinic, onClick, active }) {
  return (
    <Wrapper>
      <ClinicInfo {...clinic} style={{ marginRight: '2rem' }} />
      <div>
        <ShowDirectionsButton onClick={onClick} active={active} />
      </div>
    </Wrapper>
  );
}

Directions.defaultProperty = {
  note: null
};

export default Directions;
