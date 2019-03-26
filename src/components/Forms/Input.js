import styled from "styled-components";
import { colors } from "../../util/styles";
import Element from "./Element";

const StyledInput = styled.input`
  height: 60px;
  line-height: 60px;
  padding: 2rem 0;
  border: none;
  border-bottom: 2px solid ${colors.gray};
  padding: 0 0 0 2rem;
  margin: 0;
  color: ${colors.black};
  outline: none;
  width: 100%;

  &.error {
    border-color: ${colors.red};
    color: ${colors.red};
  }

  &:focus {
    border-color: ${colors.blue};
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0px;
  left: 2rem;
  line-height: 60px;
  color: ${colors.gray};
  font-weight: 300;
  transition-property: font-size, top;
  transition-timing-function: linear;
  transition-duration: 200ms;
  padding: 0;
  margin: 0;
  cursor: text;

  ${StyledInput}.error + & {
    color: ${colors.red};
  }

  ${StyledInput}:focus + &,
  &.focused {
    font-size: 1.2rem;
    top: -1.5rem;
  }

  ${StyledInput}:focus + & {
    color: ${colors.blue};
  }
`;

const Input = Element(StyledInput, StyledLabel);

export default Input;
