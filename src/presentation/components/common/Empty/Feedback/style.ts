import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StFeedbackEmptyView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 44px 0;

  div:first-of-type {
    ${FONT_STYLES.SB_18_TITLE}
    color: ${COLOR.GRAY_4};
    margin-bottom: 12px;
  }

  div:last-of-type {
    ${FONT_STYLES.M_14_TITLE}
    color: ${COLOR.GRAY_35};
  }
`;
