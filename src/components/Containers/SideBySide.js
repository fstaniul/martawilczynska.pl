import styled from "styled-components";
import { query } from "../../util/styles";

const SideBySide = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${query.lg`
    flex-flow: row nowrap;
  `}
`;

export const Left = styled.div`
  ${query.lg`
    flex: 1 50%;
  `}
`;

export const Right = styled.div`
  ${query.lg`
    flex: 1 50%;
  `}
`;

export default SideBySide;
