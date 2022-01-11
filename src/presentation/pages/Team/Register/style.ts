import styled from 'styled-components';
import { COMMON_INPUT } from '@styles/common/input';
import { CORAL_MAIN_BUTTON, FULL_WIDTH_BUTTON } from '@styles/common/button';
import { COLOR } from '@styles/common/color';

export const StTeamRegister = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: ${COLOR.GRAY_8};
  margin-top: 42px;
  margin-bottom: 30px;
`;

export const StTextarea = styled.textarea`
  ${COMMON_INPUT}
  margin-top: 18px;
  width: 100%;
  min-height: 100px;
  resize: none;
`;

export const StSubmitButton = styled.button`
  ${CORAL_MAIN_BUTTON}
  ${FULL_WIDTH_BUTTON}
  margin-top: 44px;
`;
