import styled from "styled-components";
import { colors } from "../../styles";
import gradientBackground from "../../assets/img/background.png";
import clinicBackground from "../../assets/img/clinic_background.png";

export default styled.div`
  background-image: url(${clinicBackground}), url(${gradientBackground});
  background-image: url(${clinicBackground}),
    linear-gradient(135deg, ${colors.blue}, ${colors.green});
  background-size: cover, cover;
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
`;
