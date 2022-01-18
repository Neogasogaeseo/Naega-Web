import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

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

export const StBanner = styled.div`
  position: relative;
  width: calc(100% + 40px);
  min-height: 96px;
  margin-left: -20px;
  background-color: #4c48ff;
  color: ${COLOR.WHITE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 26px;
  padding-right: 18px;

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
    position: absolute;
    z-index: 1;
    top: 12px;
    right: 12px;
  }

  img:nth-of-type(2) {
    width: 96px;
    height: 96px;
    object-fit: cover;
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
`;

export const StButtonArea = styled.div`
  padding-top: 12px;
  padding-bottom: 61px;

  & > button {
    margin: 0 auto;
    color: ${COLOR.GRAY_5};
    ${FONT_STYLES.R_15_TITLE};
  }
`;
