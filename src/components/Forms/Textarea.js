import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { colors } from '../../util/styles';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  position: absolute;
  top: ${props => (props.hasValue || props.isFocused ? '100%' : '1rem')};
  left: ${props => (props.isFocused || props.hasValue ? '0' : '1rem')};
  color: ${props => {
    if (props.hasError) return colors.red;
    if (props.isFocused) return colors.blue;
    return colors.gray;
  }};
  transform: translateY(-5px);
  font-size: ${props => (props.isFocused || props.hasValue ? '1.2rem' : '1.5rem')};
  cursor: text;
  font-weight: 400;
  transition: all 200ms ease;
`;

const StyledTextarea = styled.textarea`
  background: ${colors.white};
  color: ${colors.black};
  border: none;
  border-bottom: 2px solid ${({ hasError }) => (hasError ? colors.red : colors.gray)};
  padding: 1rem;
  width: 100%;
  resize: vertical;
  margin: 0;
  border-radius: 0;
  background: transparent;

  :focus {
    border: none;
    border-bottom: 2px solid ${({ hasError }) => (hasError ? colors.red : colors.blue)};
  }
`;

export default function Textarea({ id, label, onFocus, onBlur, value, hasError, ...props }) {
  const textareaRef = useRef(null);
  const [isTextareaFocused, setFocused] = useState(false);

  const labelOnClick = useCallback(() => {
    textareaRef.current.focus();
  }, [textareaRef]);

  const textareaOnFocus = useCallback(event => {
    setFocused(true);
    if (onFocus) onFocus(event);
  });

  const textareaOnBlur = useCallback(event => {
    setFocused(false);
    if (onBlur) onBlur(event);
  });

  return (
    <Wrapper>
      <Label
        htmlFor={id}
        hasValue={value !== ''}
        isFocused={isTextareaFocused}
        onClick={labelOnClick}
        hasError={hasError}
      >
        {label}
      </Label>
      <StyledTextarea
        id={id}
        onFocus={textareaOnFocus}
        onBlur={textareaOnBlur}
        value={value}
        hasError={hasError}
        {...props}
        ref={textareaRef}
      />
    </Wrapper>
  );
}

Textarea.defaultProps = {
  rows: 6
};
