import { FONT_STYLES } from './../../../style/common/font-style';
import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StNeogaLink = styled.div<{ isCreated: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLOR.GRAY_1};
  height: 100%;
  & > *:nth-child(2) {
    margin-top: 136px;
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

export const StCopyButton = styled.div`
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
    color: ${COLOR.CORAL_MAIN};
  }
`;

export const StWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  & > *:last-child {
    position: absolute;
    top: 0;
  }
`;

export const StSaveNotice = styled.div`
  width: 100%;
  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GRAY_2};
  border-radius: 18px;
  display: flex;
  padding: 15px 14px 17px 19px;
  align-items: center;
  justify-content: space-between;
  & > *:first-child {
    & > *:first-child {
      font-weight: 600;
      font-size: 16px;
      line-height: 143.99%;
      color: ${COLOR.GRAY_6};
    }
    & > *:last-child {
      font-weight: 400;
      font-size: 14px;
      line-height: 143.99%;
      color: ${COLOR.GRAY_4};
    }
  }
`;

export const StSaveButton = styled.button`
  width: 83px;
  height: 27px;
  border-radius: 13.5px;
  background-color: ${COLOR.CORAL_1};
  color: ${COLOR.CORAL_MAIN};
  ${FONT_STYLES.M_13_TITLE}
`;
