import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StTeamMember = styled.div`
  header {
    display: flex;
    align-items: center;
    height: 44px;
    padding-left: 14px;
    padding-right: 46px;
    ${FONT_STYLES.SB_17_TITLE};

    svg {
      cursor: pointer;
    }

    div {
      margin: 0 auto;
    }
  }
`;

export const StMemberInfo = styled.div`
  margin-top: 15px;
  padding: 20px;

  & > div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${COLOR.GRAY_2};
    padding: 14px 0;

    div {
      display: flex;
      flex-direction: column;
      margin-left: 12px;
      gap: 7px;

      span:first-of-type {
        color: ${COLOR.GRAY_8};
        ${FONT_STYLES.M_15_TITLE};
      }

      span:last-of-type {
        color: ${COLOR.GRAY_5};
        ${FONT_STYLES.R_12_TITLE};
      }
    }

    img {
      width: 48px;
      height: 48px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;
