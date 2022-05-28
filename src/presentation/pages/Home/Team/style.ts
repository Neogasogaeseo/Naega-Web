import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StTeamMain = styled.div`
  height: 100vh;
  overflow-x: hidden;

  & h1 {
    font-weight: 600;
    font-size: 18px;
    color: ${COLOR.GRAY_8};
    margin-top: 28px;
    margin-bottom: 18px;
    padding: 0 20px;
  }

  & > div {
    padding: 0 20px;
  }
`;

export const StDivisionLine = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${COLOR.GRAY_1};
  margin-top: 24px;
`;
