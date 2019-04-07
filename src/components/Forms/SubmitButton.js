import React from 'react';
import styled from 'styled-components';
import { colors } from '../../util/styles';

const Button = styled.button`
  background: ${colors.green};
  background: linear-gradient(135deg, ${colors.blue}, ${colors.green});
  border-radius: 500px;
  line-height: 4.2rem;
  height: 4.2rem;
  padding: 0 4rem;
  margin: 0;
  color: ${colors.white};
  border: none;

  :hover,
  :focus {
    color: ${colors.white};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

export default function SubmitButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}
