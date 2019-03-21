import styled from "styled-components";
import { colors, query } from "../../../../util/styles";

export default styled.div`
  position: relative;
  color: ${colors.white};
  width: 100vw;
  max-width: 100%;
  border-bottom: 10px solid ${colors.blue};

  ${query.md`
    min-height: 100vh;
  `}
`;
