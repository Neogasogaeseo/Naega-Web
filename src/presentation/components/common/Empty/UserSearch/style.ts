import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StUserSearchEmptyView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:first-child {
    margin-top: 44px;
    ${FONT_STYLES.SB_18_TITLE}
    line-height: 100%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_4};
  }
  & > *:last-child {
    margin-top: 12px;
    ${FONT_STYLES.M_14_TITLE}
    line-height: 100%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_35};
  }
`;
