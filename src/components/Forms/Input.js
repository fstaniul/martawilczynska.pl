import React, { useCallback, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../util/styles';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-bottom: 2px solid ${({ hasError }) => (hasError ? colors.red : colors.gray)};
  background: ${colors.white};
  color: ${colors.black};
  margin: 0;
  background: transparent;

  :focus {
    border-color: ${({ hasError }) => (hasError ? colors.red : colors.blue)};
    outline: none;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 1.5rem;
  color: ${colors.gray};
  font-weight: 400;
  transition: all 200ms ease;

  ${props =>
    (props.inputFocused || props.withValue) &&
    css`
      left: 0;
      top: 100%;
      transform: translateY(2px);
      font-size: 1.2rem;
    `}

  ${props =>
    props.inputFocused &&
    css`
      color: ${colors.blue};
    `}

  ${props =>
    props.hasError &&
    css`
      color: ${colors.red};
    `}
`;

export default function Input({ id, label, value, onBlur, onFocus, hasError, ...props }) {
  const inputRef = useRef(null);
  const [isInputFocused, setFocused] = useState(false);

  const labelOnClick = useCallback(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const inputOnFocus = useCallback(
    event => {
      setFocused(true);
      if (onFocus) onFocus(event);
    },
    [onFocus]
  );

  const inputOnBlur = useCallback(
    event => {
      setFocused(false);
      if (onBlur) onBlur(event);
    },
    [onBlur]
  );

  return (
    <Wrapper>
      <Label
        htmlFor={id}
        onClick={labelOnClick}
        inputFocused={isInputFocused}
        withValue={value !== ''}
        hasError={hasError}
      >
        {label}
      </Label>
      <StyledInput ref={inputRef} id={id} onFocus={inputOnFocus} onBlur={inputOnBlur} hasError={hasError} {...props} />
    </Wrapper>
  );
}
