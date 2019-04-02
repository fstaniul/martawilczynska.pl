import styled from "styled-components";
import gradientBackground from "../../assets/img/gradient_background.png";
import clinicBackground from "../../assets/img/clinic_background.png";
import { colors } from "../../util/styles";

const ClinicBackground = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url(${clinicBackground}), url(${gradientBackground});
  background-image: url(${clinicBackground}), linear-gradient(135deg, ${colors.blue}, ${colors.green});
`;

export default ClinicBackground;
