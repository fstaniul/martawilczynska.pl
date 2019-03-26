import styled from "styled-components";
import ClosedEyesLadyImage from "../../../../components/ClosedEyesLadyImage";
import { query } from "../../../../util/styles";

const LadyImage = styled(ClosedEyesLadyImage)`
  display: block;
  width: auto;

  ${query.sm`
  `}

  ${query.md`
    width: 100%;
    max-width: 844px;
  `}
`;

export default LadyImage;
