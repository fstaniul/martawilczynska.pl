import React, { forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormError from './states/FormError';
import FormSuccess from './states/FormSuccess';
import FormLoading from './states/FormLoading';

const StyledForm = styled.form`
  position: relative;
  background: #f5f5f5;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  min-height: 500px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
`;

const ContentWrapper = styled.div`
  padding: 3rem;
`;

function Form({ children, state, setState, onSubmit, forwardedRef, ...props }) {
  const setPendingState = useCallback(() => setState('pending'), [setState]);

  let body;
  switch (state) {
    default:
    case 'pending':
      body = <ContentWrapper>{children}</ContentWrapper>;
      break;

    case 'loading':
      body = <FormLoading />;
      break;

    case 'success':
      body = <FormSuccess onClick={setPendingState} />;
      break;

    case 'error':
      body = <FormError onClick={onSubmit} />;
      break;
  }

  return (
    <StyledForm {...props} onSubmit={onSubmit} ref={forwardedRef}>
      {body}
    </StyledForm>
  );
}

Form.propTypes = {
  state: PropTypes.oneOf(['pending', 'loading', 'success', 'error']).isRequired,
  setState: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default forwardRef((props, ref) => <Form {...props} forwardedRef={ref} />);
