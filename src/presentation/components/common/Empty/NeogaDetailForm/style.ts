import styled from 'styled-components';
import { CORAL_MAIN_BUTTON } from '@styles/common/button';

export const StNeogaDetailFormEmptyView = styled.div`
  display: grid;
  place-content: center;
  margin-top: 127px;

  button {
    margin: 0 auto;
    margin-top: 47px;
    margin-bottom: 192px;
    ${CORAL_MAIN_BUTTON};
    border-radius: 14px;
    padding: 15px 38px 15px 37px;
    font-weight: 500;
    font-size: 15px;
    line-height: 143.99%;
    letter-spacing: -0.015em;
  }
`;
