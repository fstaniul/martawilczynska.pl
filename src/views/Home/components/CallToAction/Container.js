import styled from 'styled-components';
import { colors, query } from '../../../../util/styles';
import ClinicBackground from '../../../../components/Containers/ClinicBackground';

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
  box-sizing: border-box;

  ${query.md`
    flex-wrap: nowrap;
    height: 100vh;
  `}
`;

export const TextWrapper = styled.div`
  position: relative;
  z-index: 100;
  flex: 1 1 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 15px 0 15px;
  box-sizing: border-box;

  ${query.md`
    flex: 1 1 auto;
    padding: 100px 15px 0 15px;
  `}
`;

export const ImageWrapper = styled.div`
  z-index: 1;
  flex: 0 1 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;

  ${query.md`
    display: none;
  `}

  ${query.lg`
    display: flex;
    flex: 0 1 50%;
    justify-content: flex-start;
    align-items: flex-end;
  `}
`;
