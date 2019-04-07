import styled from 'styled-components';
import { colors } from '../../../util/styles';

const FormBottomButton = styled.div`
  position: absolute;
  width: 100%;
  line-height: 80px;
  height: 80px;
  border: none;
  border-radius: 0;
  color: ${colors.blue};
  background: #e8e8e8;
  cursor: pointer;
  bottom: 0;
  left: 0;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1em;
  border-radius: 0 0 0.5rem 0.5rem;

  :hover,
  :focus {
    color: ${colors.blue};
    background: #d9d9d9;
  }
`;

export default FormBottomButton;
