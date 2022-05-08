import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StHomeNeoga = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

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
`;

export const StWholeButton = styled.button`
  background: transparent;
  color: ${COLOR.GRAY_5};
  ${FONT_STYLES.SB_14_TITLE};
  display: flex;
  align-items: center;

  img {
    margin-left: 4px;
  }
`;

export const StBanner = styled.div<{ color: string | undefined }>`
  position: relative;
  width: 100%;
  height: 96px;
  background-color: ${(props) => props.color};
  color: ${COLOR.WHITE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 26px;
  padding-right: 50px;
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
    width: 60px;
    height: 60px;
  }

  img:nth-of-type(2) {
    position: absolute;
    z-index: 1;
    top: 12px;
    right: 12px;
  }
`;

export const StForm = styled.div`
  padding: 0 20px;

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;

export const StResult = styled.div`
  background: ${COLOR.GRAY_1};
  width: 100%;
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

export const StMoreButtonArea = styled.div`
  padding-top: 12px;

  & > button {
    display: block;
    margin: 0 auto;
    background: transparent;
    color: ${COLOR.GRAY_5};
    ${FONT_STYLES.R_15_TITLE};

    & > span {
      font-weight: 600;
      margin-left: 4px;
    }
  }
`;
