import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import IconButton from '../../IconButton';
import { useNavState } from '../useNavState';
import { colors } from '../../../util/styles';

const StyledButton = styled(IconButton)`
  display: block;
  padding: 0;
  margin: 0;
  height: auto;
  line-height: 1em;

  color: ${colors.silver};
  transition: 100ms color;

  &:hover,
  &:active {
    color: ${colors.white};
  }
`;

const OpenButton = () => {
  const setOpen = useNavState()[1];
  return (
    <StyledButton onClick={() => setOpen(true)}>
      <FontAwesomeIcon icon="bars" size="2x" />
    </StyledButton>
  );
};

export default OpenButton;
