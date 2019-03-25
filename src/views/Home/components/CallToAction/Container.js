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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${query.md`
    flex-wrap: nowrap;
    height: 100vh;
  `}
`;

export const TextWrapper = styled.div`
  z-index: 100;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 15px 0 15px;

  ${query.md`
    padding: 100px 15px 0 15px;
  `}
`;

export const ImageWrapper = styled.div`
  z-index: 1;
  flex: 0 1 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  ${query.md`
    flex: 0 1 50%;
  `}
`;
