import { CORAL_MAIN_BUTTON, FULL_WIDTH_BUTTON } from '@styles/common/button';
import { FONT_STYLES } from './../../../style/common/font-style';
import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StNeogaLink = styled.div`
  width: 100%;
  display: flex;
  background-color: ${COLOR.GRAY_1};
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & > *:nth-child(1) {
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 100%;
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
  display: flex;
  flex-direction: column;
  z-index: 200;
  & > *:last-child {
    position: absolute;
    top: 0;
  }
`;

export const StSaveNotice = styled.div<{ isCreated: boolean }>`
  margin: 19px 20px 0px 19px;
  width: calc(100% - 40px);
  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GRAY_2};
  border-radius: 18px;
  display: flex;
  padding: 15px 14px 17px 19px;
  align-items: center;
  justify-content: space-between;
  opacity: ${(props) => (props.isCreated ? 1 : 0)};
  transition: opacity 1s ease-in-out;
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

export const StAnswerButton = styled.button<{ isCreated: boolean }>`
  ${FULL_WIDTH_BUTTON}
  ${CORAL_MAIN_BUTTON}
  width: calc(100% - 40px);
  margin-bottom: 52px;
  opacity: ${(props) => (props.isCreated ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

export const StFormTicketWrapper = styled.div<{ isCreated: boolean }>`
  position: relative;
  width: 284px;
  height: 364px;
  margin-top: 136px;
  & > * {
    transition: 1s;
    backface-visibility: hidden;
    left: calc((100% - 284px) / 2);
  }
  & > *:first-child {
    transform: ${(props) => (props.isCreated ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  }
  & > *:last-child {
    transform: ${(props) => (props.isCreated ? 'rotateY(0deg)' : 'rotateY(-180deg)')};
  }
`;

export const StAbsoluteWrapper = styled.div`
  position: absolute;
`;
