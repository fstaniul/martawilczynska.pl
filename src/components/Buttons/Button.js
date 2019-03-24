import styled from "styled-components";
import Polymorphic from "../Polymorphic";

export const Button = styled(Polymorphic)`
  display: inline-block;
  border: none;
  background: transparent;
  text-decoration: none;
  outline: none;
  height: 50px;
  width: 250px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
  border-radius: 1000px;

  &:hover {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  }
`;

export default Button;
