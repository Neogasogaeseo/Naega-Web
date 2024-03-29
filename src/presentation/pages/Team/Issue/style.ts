import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StTeamIssue = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 44px calc(100vh - 144px) 100px;
  overflow-x: hidden;
  position: relative;
`;

export const StWrapper = styled.div`
  padding: 0 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StLink = styled(Link)`
  background-color: ${COLOR.GRAY_2};
  padding-top: 12px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const StHeader = styled.div`
  padding-bottom: 20px;
  & > img {
    cursor: pointer;
  }
  & > div {
    display: flex;
    position: relative;
    align-items: center;
    &:nth-child(1) {
      gap: 6px;
      margin-top: 20px;
      margin-bottom: 8px;
      & > div:nth-child(1) {
        color: ${COLOR.CORAL_MAIN};
        ${FONT_STYLES.SB_13_TITLE}
      }
      & > div:nth-child(2) {
        color: ${COLOR.GRAY_5};
        ${FONT_STYLES.M_13_TITLE}
      }
      & > svg {
        position: absolute;
        right: 0;
        cursor: pointer;
      }
    }
    &:nth-child(2) {
      white-space: pre-wrap;
      margin-bottom: 32px;
      color: ${COLOR.GRAY_8};
      line-height: 150%;
      ${FONT_STYLES.SB_24_BODY}
    }
    &:nth-child(3) {
      justify-content: space-between;
    }
  }
`;

export const StIssueThumbnail = styled.img`
  display: block;
  width: calc(100% + 40px);
  margin-left: -20px;
  object-fit: cover;
`;

export const StDivisionLine = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;
  height: 8px;
  background-color: ${COLOR.GRAY_1};
`;
