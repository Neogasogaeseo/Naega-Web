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
  padding: 6px 20px 20px 20px;

  & > div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${COLOR.GRAY_2};
    padding: 14px 0;

    div:first-of-type {
      display: flex;
      flex-direction: column;
      flex: 1;
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

export const StHostBox = styled.div<{ isHost: boolean }>`
  padding: 11.5px 24px;
  ${FONT_STYLES.M_13_TITLE};
  border: 1px solid ${({ isHost }) => (isHost ? COLOR.GRAY_6 : COLOR.GRAY_4)};
  border-radius: 10px;
  color: ${({ isHost }) => (isHost ? COLOR.GRAY_6 : COLOR.GRAY_4)};
`;
