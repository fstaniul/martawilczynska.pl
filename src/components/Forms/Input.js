import React, { useCallback, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../util/styles';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-bottom: 2px solid ${colors.gray};
  background: ${colors.white};
  color: ${colors.black};

  :focus {
    border-color: ${colors.blue};
  }

  ${props =>
    props.withError &&
    css`
      border-color: ${colors.red};
    `}
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 1.5rem;

  ${props =>
    (props.inputFocused || props.withValue) &&
    css`
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
    props.withError &&
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
        withError={hasError}
      >
        {label}
      </Label>
      <StyledInput ref={inputRef} id={id} onFocus={inputOnFocus} onBlur={inputOnBlur} withError={hasError} {...props} />
    </Wrapper>
  );
}
