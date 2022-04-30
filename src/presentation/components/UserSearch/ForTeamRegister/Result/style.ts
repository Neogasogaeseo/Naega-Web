import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StUserSearchResultForTeamRegister = styled.div`
  width: 100%;
  height: 100%;
  & > *:first-child {
    padding: 40px 20px 12px 20px;
    margin-bottom: 7px;
    ${FONT_STYLES.SB_13_TITLE}
    background-color: ${COLOR.GRAY_1};
  }
`;
