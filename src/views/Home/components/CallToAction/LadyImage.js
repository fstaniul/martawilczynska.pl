import styled from "styled-components";
import ClosedEyesLadyImage from "../../../../components/ClosedEyesLadyImage";
import { query } from "../../../../util/styles";

const LadyImage = styled(ClosedEyesLadyImage)`
  display: block;
  width: 100%;
  z-index: 1;

  ${query.lg`
    position: absolute;
    bottom: 0;
    right: 50px;
    width: 45%;
  `}

  ${query.xl`
    // width: 750px;
  `}
`;

export default LadyImage;
