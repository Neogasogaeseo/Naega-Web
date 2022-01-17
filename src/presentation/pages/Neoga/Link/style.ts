import styled from 'styled-components';
import { CORAL_MAIN_BUTTON, FULL_WIDTH_BUTTON } from '@styles/common/button';

export const StNeogaLink = styled.div`
  width: 100vw;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > *:first-child {
    margin-top: 50px;
    margin-bottom: 69px;
  }
`;

export const StLinkCreateButton = styled.button`
  ${CORAL_MAIN_BUTTON}
  ${FULL_WIDTH_BUTTON}
  margin-top: 121px;
  margin-bottom: 48px;
`;
