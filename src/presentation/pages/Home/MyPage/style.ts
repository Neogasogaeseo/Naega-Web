import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StHomeMyPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > div:last-of-type {
    margin-left: -20px;
  }
`;

export const StHomeMyPageHeader = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  gap: 24px;
  padding: 26px 0;
  position: relative;
  & > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    & > div:nth-child(1) {
      ${FONT_STYLES.SB_20_TITLE}
      color: ${COLOR.GRAY_8};
    }
    & > div:nth-child(2) {
      ${FONT_STYLES.M_14_TITLE}
      color: ${COLOR.GRAY_5};
    }
  }
`;

export const StShare = styled.div`
  position: absolute;
  right: 0;
  top: 32px;
  ${FONT_STYLES.M_14_TITLE}
  color: ${COLOR.CORAL_MAIN};
  display: flex;
  flex-direction: row !important;
  gap: 4px;
  cursor: pointer;
`;

export const StKeywordSection = styled.div`
  margin-bottom: 34px;
  & > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    & > div {
      display: flex;
      align-items: center;
      & > span {
        margin: 0 8px;
        ${FONT_STYLES.SB_18_TITLE};
        color: ${COLOR.GRAY_8};
        &:nth-child(3) {
          ${FONT_STYLES.SB_16_TITLE};
          color: ${COLOR.CORAL_MAIN};
        }
      }
    }
  }
`;

export const StKeywordTitle = styled.div`
  ${FONT_STYLES.SB_14_TITLE}
  color: ${COLOR.GRAY_7};
  margin-top: 26px;
  margin-bottom: 12px;
`;

export const StTitle = styled.div`
  ${FONT_STYLES.SB_18_TITLE}
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
  & > div:nth-child(1) {
    & > span:nth-child(1) {
      color: ${COLOR.GRAY_8};
      margin-right: 8px;
    }
    & > span:nth-child(2) {
      color: ${COLOR.CORAL_MAIN};
    }
  }
`;

export const StGreyBorder = styled.div`
  background-color: ${COLOR.GRAY_1};
  height: 8px;
  width: calc(100% + 40px);
  margin-left: -20px;
`;

export const StGreyBorderTall = styled(StGreyBorder)`
  height: 32px;
`;

export const StNegativeMarginWrapper = styled.div`
  width: 100%;
`;

export const StFeedbackTeamWrapper = styled.div`
  & > div:last-of-type {
    margin-top: 20px;
    & > div > div {
      cursor: default;
    }
  }
`;

export const StDetailLink = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  ${FONT_STYLES.M_14_TITLE}
  color: ${COLOR.GRAY_4};
  & > svg > path {
    stroke: ${COLOR.GRAY_4};
  }
`;

export const StMyPageProfile = styled.div`
  position: relative;
  & img {
    width: 60px;
    height: 60px;
    border-radius: 20px;
    object-fit: cover;
  }
  & svg {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }
`;
