import styled from "styled-components";
import { colors, query } from "../../../../util/styles";
import gradientBackground from "../../../../assets/img/gradient_background.png";
import clinicBackground from "../../../../assets/img/clinic_background.png";

export default styled.div`
  position: relative;
  color: ${colors.white};
  width: 100vw;
  max-width: 100%;
  border-bottom: 10px solid ${colors.blue};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${clinicBackground}), url(${gradientBackground});
  background-image: url(${clinicBackground}),
    linear-gradient(135deg, ${colors.blue}, ${colors.green});
  padding: 200px 0 0 150px;
  box-sizing: border-box;

  ${query.md`
    min-height: 100vh;
  `}
`;
