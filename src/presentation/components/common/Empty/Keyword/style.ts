import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StKeywordEmptyView = styled.div`
  padding-top: 44px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  & div:nth-child(1) {
    ${FONT_STYLES.SB_18_TITLE}
    color: ${COLOR.GRAY_4};
  }
  & div:nth-child(2) {
    ${FONT_STYLES.M_14_TITLE}
    color: ${COLOR.GRAY_35};
  }
`;
