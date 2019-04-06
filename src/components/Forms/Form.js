import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
  padding: 3rem;
  background: #f5f5f5;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export default forwardRef(function Form({ children, ...props }, ref) {
  return (
    <StyledForm {...props} ref={ref}>
      {children}
    </StyledForm>
  );
});
