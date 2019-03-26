import styled from "styled-components";
import { colors } from "../../util/styles";
import Element from "./Element";

const StyledTextarea = styled.textarea`
  outline: none;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${colors.gray};
  color: ${colors.black};
  padding: 2rem;
  margin: 0;
  resize: vertical;
  height: auto;

  &.error {
    color: ${colors.red};
    border-color: ${colors.red};
  }

  &:focus {
    border: none;
    border-bottom: 1px solid ${colors.blue};
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

  ${StyledTextarea}.error + & {
    color: ${colors.red};
  }

  ${StyledTextarea}:focus + &,
  &.focused {
    font-size: 1.2rem;
    top: -1.5rem;
  }

  ${StyledTextarea}:focus + & {
    color: ${colors.blue};
  }
`;

const Textarea = Element(StyledTextarea, StyledLabel);

Textarea.defaultProps = {
  rows: 6
};

export default Textarea;
