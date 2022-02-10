import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StFeedbackEmptyView = styled.div<{ hasThumbnail: boolean }>`
  ${({ hasThumbnail }) => hasThumbnail ? 'padding-top: 34px;' : 'padding-top: 146px;'}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:first-of-type {
    ${FONT_STYLES.SB_20_TITLE}
    color: ${COLOR.GRAY_4};
    margin-top: 25px;
    margin-bottom: 8px;
  }

  div:last-of-type {
    ${FONT_STYLES.R_15_TITLE}
    color: ${COLOR.GRAY_4};
  }
`;
