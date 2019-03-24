import Button from "./Button";
import styled from "styled-components";
import { colors } from "../../util/styles";

const GradientButton = styled(Button)`
  border: none;
  background: linear-gradient(135deg, ${colors.blue}, ${colors.green});
  color: ${colors.white};

  &:hover {
    color: white;
    background: linear-gradient(135deg, ${colors.blue}, ${colors.blue});
  }
`;

export default GradientButton;
