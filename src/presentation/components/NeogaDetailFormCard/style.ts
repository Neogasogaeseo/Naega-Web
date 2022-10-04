import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StFeedName = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  & > span {
    ${FONT_STYLES.R_14_TITLE};
    color: ${COLOR.GRAY_5};
  }
  & > span:first-child {
    ${FONT_STYLES.SB_14_TITLE};
    color: ${COLOR.GRAY_6};
    padding-right: 10px;
  }
  & div {
    color: ${COLOR.GRAY_4};
    ${FONT_STYLES.R_14_TITLE};
  }
`;

export const StDate = styled.div`
  display: flex;
  float: right;
  margin: 5px 20px 9px 0px;
  color: ${COLOR.GRAY_4};
  ${FONT_STYLES.R_13_TITLE};
`;

export const StFeedMore = styled.div`
  cursor: pointer;
  & img {
    width: 22px;
  }
`;

export const StNeogaDetailFormCard = styled.div`
  margin: 0 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid #efefef;

  &:last-child {
    border-bottom: none;
  }
`;

export const StFeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0px 12px 0px;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: ${COLOR.GRAY_7};
`;

export const StFeedContent = styled.div`
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 140%;
  white-space: pre-wrap;
`;
