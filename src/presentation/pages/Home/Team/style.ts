import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StTeamMainWrapper = styled.div`
  & h1 {
    font-weight: 600;
    font-size: 18px;
    color: ${COLOR.GRAY_8};
    margin-top: 28px;
    margin-bottom: 18px;
    padding: 0 16px;
  }
`;

export const StDivisionLine = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${COLOR.GRAY_1};
  margin-top: 24px;
`;
