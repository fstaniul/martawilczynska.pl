import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../util/styles';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  position: absolute;
  top: ${props => (props.hasValue || props.isFocused ? '1.5rem' : '100%')};
  left: 1rem;
  color: ${props => (props.isFocused ? props.blue : props.hasError ? colors.red : colors.black)};
  transform: translateY(-5px);
  font-size: ${props => (props.isFocused || props.hasValue ? '1.2rem' : '1.5rem')};
`;

const StyledTextarea = styled.textarea`
  background: ${colors.white};
  color: ${colors.black};
  border: none;
  border-bottom: 2px solid ${({ hasError }) => (hasError ? colors.red : colors.gray)};
  padding: 1rem;
  width: 100%;
  resize: vertical;
`;

export default function Textarea({ id, label, onFocus, onBlur, value, ...props }) {
  const textareaRef = useRef(null);
  const [isTextareFocused, setFocused] = useState(false);

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
      <Label htmlFor={id} hasValue={value !== ''}>
        {label}
      </Label>
      <StyledTextarea id={id} onFocus={textareaOnFocus} onBlur={textareaOnBlur} value={value} {...props} />
    </Wrapper>
  );
}
