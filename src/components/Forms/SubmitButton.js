import React from 'react';
import styled from 'styled-components';

const Button = styled.button``;

export default function SubmitButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}
