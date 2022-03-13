import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StNeogaLink = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.GRAY_1};
  height: 100vh;
  & > *:first-child {
    margin-top: 50px;
    margin-bottom: 69px;
  }
`;

export const StLinkButton = styled.div<{ isCreated: boolean }>`
  display: flex;
  align-items: center;
  position: absolute;
  top: 308px;
  left: 82px;
  cursor: pointer;
  & > div {
    margin-left: 2px;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: ${(props) => (props.isCreated ? COLOR.WHITE : COLOR.CORAL_MAIN)};
  }
`;
