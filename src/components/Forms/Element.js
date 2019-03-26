import React, { useRef, useState } from "react";
import styled from "styled-components";
import ElementError from "./ElementError";

const Wrapper = styled.div`
  position: relative;
`;

const Element = (Element, Label) => ({
  value,
  onFocus,
  onBlur,
  id,
  label,
  error,
  ...rest
}) => {
  const ref = useRef(null);
  const [focused, setFocused] = useState(false);

  const _onFocus = event => {
    setFocused(true);
    if (onFocus) onFocus(event);
  };

  const _onBlur = event => {
    setFocused(false);
    if (onBlur) onBlur(event);
  };

  return (
    <Wrapper>
      <Element
        id={id}
        value={value}
        onFocus={_onFocus}
        onBlur={_onBlur}
        ref={ref}
        className={error ? "error" : ""}
        {...rest}
      />
      {label && (
        <Label
          className={value ? "focused" : ""}
          htmlFor={id}
          onClick={() => ref.current.focus()}
        >
          {label}
        </Label>
      )}
      <ElementError error={focused ? null : error} />
    </Wrapper>
  );
};

export default Element;
