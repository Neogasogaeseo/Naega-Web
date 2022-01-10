import styled from 'styled-components';
import { COMMON_INPUT } from '@styles/common/input';
import { CORAL_MAIN_BUTTON, FULL_WIDTH_BUTTON } from '@styles/common/button';

export const StTeamRegister = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
