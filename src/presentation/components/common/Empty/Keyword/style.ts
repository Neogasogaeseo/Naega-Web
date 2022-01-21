import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StKeywordEmptyView = styled.div`
  padding-top: 85px;
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & div {
    ${FONT_STYLES.SB_15_TITLE}
    color: ${COLOR.GRAY_4};
  }
`;
