import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import { CORAL_MAIN_BUTTON } from '@styles/common/button';

export const StHomeNeoga = styled.div`
  width: calc(100vw - 40px);
  height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 38px;
    margin-bottom: 12px;
    color: ${COLOR.GRAY_8};
    ${FONT_STYLES.SB_18_TITLE};
    font-weight: 600;
  }

  h2 {
    color: ${COLOR.GRAY_5};
    ${FONT_STYLES.R_15_TITLE};
  }

  button {
    background: transparent;
    color: ${COLOR.GRAY_5};
    ${FONT_STYLES.SB_14_TITLE};
    display: flex;
    align-items: center;

    img {
      margin-left: 4px;
    }
  }
`;

export const StBanner = styled.div<{ color: string | undefined }>`
  position: relative;
  width: calc(100% + 40px);
  height: 96px;
  margin-left: -20px;
  background-color: ${(props) => props.color};
  color: ${COLOR.WHITE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 26px;
  padding-right: 18px;
  cursor: pointer;

  & > div {
    display: flex;
    flex-direction: column;
  }

  & > div div:nth-of-type(1) {
    font-weight: 600;
    font-size: 17px;
    letter-spacing: -0.01em;
    margin-top: 30px;
    margin-bottom: 9px;
  }

  & > div div:nth-of-type(2) {
    ${FONT_STYLES.R_14_TITLE};
    opacity: 0.6;
    margin-bottom: 26px;
  }

  img:nth-of-type(1) {
    width: 96px;
    height: 96px;
    object-fit: cover;
  }

  img:nth-of-type(2) {
    position: absolute;
    z-index: 1;
    top: 12px;
    right: 12px;
  }
`;

export const StForm = styled.div`
  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;

export const StResult = styled.div`
  background: ${COLOR.GRAY_1};
  width: calc(100% + 40px);
  margin-left: -20px;
  padding: 0 20px;
  flex: 1;

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  & > div:last-of-type {
    margin-bottom: 70px;
  }
`;

export const StButtonArea = styled.div`
  padding-top: 12px;

  & > button {
    margin: 0 auto;
    color: ${COLOR.GRAY_5};
    ${FONT_STYLES.R_15_TITLE};
  }
`;

export const StEmptyView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 60px;
    margin-bottom: 24px;
  }

  div:nth-of-type(1) {
    ${FONT_STYLES.SB_18_TITLE};
    color: ${COLOR.GRAY_6};
    font-weight: 600;
    margin-bottom: 10px;
  }

  div:nth-of-type(2) {
    ${FONT_STYLES.R_15_TITLE};
    color: ${COLOR.GRAY_5};
    margin-bottom: 34px;
  }

  button {
    ${CORAL_MAIN_BUTTON};
    width: 156px;
    margin-bottom: 62px;
    padding: 15px 0;
    border-radius: 14px;
    display: block;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    line-height: 21.6px;
    letter-spacing: -0.015em;
  }
`;
