import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StNeogaLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${COLOR.GRAY_1};
  height: 100vh;
  & > *:last-child {
    margin-top: 136px;
    margin-bottom: 256px;
  }
`;

export const StLinkCreateButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 308px;
  left: 82px;
  cursor: pointer;
  & > div {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: ${COLOR.CORAL_MAIN};
  }
`;
