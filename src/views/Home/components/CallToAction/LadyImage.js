import styled from "styled-components";
import ClosedEyesLadyImage from "../../../../components/ClosedEyesLadyImage";
import { query } from "../../../../util/styles";

const LadyImage = styled(ClosedEyesLadyImage)`
  display: block;
  width: auto;

  ${query.sm`
    max-width: 500px;
  `}

  ${query.md`
    max-width: initial;
  `}
`;

export default LadyImage;
