import styled from "styled-components";
import { colors } from "../../styles";
import gradientBackground from "../../assets/img/background.png";

export default styled.div`
  background-image: url(${gradientBackground});
  background-image: linear-gradient(135deg, ${colors.blue}, ${colors.green});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
