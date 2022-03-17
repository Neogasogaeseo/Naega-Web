import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StHomeMyPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
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

export const StKeywordTitle = styled.div`
  ${FONT_STYLES.SB_14_TITLE}
  color: ${COLOR.GRAY_7};
  margin-top: 20px;
  margin-bottom: 10px;
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
  }
`;

export const StDetailLink = styled(Link)`
  display: flex;
  gap: 4px;
  align-items: center;
  ${FONT_STYLES.SB_14_TITLE}
  color: ${COLOR.GRAY_5};
`;

export const StMyPageProfile = styled.div`
  position: relative;
  & img {
    width: 60px;
    height: 60px;
    border-radius: 20px;
  }
  & svg {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }
`;
