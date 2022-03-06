import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StTeamMember = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 14px;
    padding-right: 24px;
    ${FONT_STYLES.SB_17_TITLE};

    button {
      background-color: transparent;
      color: ${COLOR.CORAL_MAIN};
      ${FONT_STYLES.M_15_TITLE};
    }
  }
`;
