import styled from "styled-components";
import { colors, query } from "../../../../util/styles";
import ClinicBackground from "../../../../components/Containers/ClinicBackground";

export default styled(ClinicBackground)`
  position: relative;
  color: ${colors.white};
  width: 100vw;
  max-width: 100%;
  border-bottom: 10px solid ${colors.blue};
  box-sizing: border-box;
  padding: 100px 20px 0;

  ${query.md`
    padding: 100px 50px 0;
  `}

  ${query.lg`
    padding: 200px 0 0 150px;
    min-height: 100vh;
  `}
`;

export const TextWrapper = styled.div`
  z-index: 100;
`;
