import styled from "styled-components";
import { colors } from "../../util/styles";
import gradientBackground from "../../assets/img/gradient_background.png";

export default styled.div`
  background-image: url(${gradientBackground});
  background-image: linear-gradient(135deg, ${colors.blue}, ${colors.green});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
