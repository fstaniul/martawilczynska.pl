import React, { useRef, useState, useImperativeHandle } from "react";
import styled from "styled-components";
import FormError from "./FormError";

const Wrapper = styled.div`
  position: relative;
`;

const FormElement = (Element, Label) =>
  React.forwardRef(
    ({ value, onChange, id, label, validate, error, ...rest }, _ref) => {
      const ref = useRef(null);
      const [focused, setFocused] = useState(false);

      const onFocus = _ => setFocused(true);

      const onBlur = event => {
        validate(event.target.value);
        setFocused(false);
      };

      return (
        <Wrapper>
          <Element
            id={id}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={ref}
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
          <FormError error={focused ? null : error} />
        </Wrapper>
      );
    }
  );

export default FormElement;
