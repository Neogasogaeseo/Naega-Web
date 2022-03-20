import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StNeogaLink = styled.div<{ isCreated: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLOR.GRAY_1};
  height: 100vh;
  & > *:last-child {
    margin-top: 50px;
    margin-bottom: 69px;
    position: relative;
    width: 284px;
    height: 364px;
    & > * {
      transition: 1s;
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }
    & > *:first-child {
      transform: ${(props) => (props.isCreated ? 'rotateY(180deg)' : 'rotateY(0deg)')};
    }
    & > *:last-child {
      transform: ${(props) => (props.isCreated ? 'rotateY(0deg)' : 'rotateY(-180deg)')};
    }
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
