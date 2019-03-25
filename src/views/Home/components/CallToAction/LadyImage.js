import styled from "styled-components";
import ClosedEyesLadyImage from "../../../../components/ClosedEyesLadyImage";
import { query } from "../../../../util/styles";

const LadyImage = styled(ClosedEyesLadyImage)`
  display: block;
  /* z-index: 1; */

  ${query.md`
    /* width: 80%; */
  `}

  ${query.lg`
    /* position: absolute;
    // bottom: 0;
    // right: 50px;
    // width: 45%; */
  `}

  ${query.xl`
    /* width: 750px; */
  `}
`;

export default LadyImage;
