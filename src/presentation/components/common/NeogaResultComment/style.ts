import styled from 'styled-components';
import { FONT_STYLES } from '@styles/common/font-style';
import { COLOR } from '@styles/common/color';

export const StNeogaResultComment = styled.div`
  & > div:first-child {
    margin-bottom: 12px;

    span + span {
      margin-left: 4px;
    }

    span:first-child {
      font-weight: 600;
      ${FONT_STYLES.SB_13_TITLE};
      color: ${COLOR.GRAY_6};
    }

    span:not(:first-child) {
      ${FONT_STYLES.R_13_TITLE};
      color: ${COLOR.GRAY_5};
    }
  }

  & > div:nth-child(2) {
    ${FONT_STYLES.R_14_TITLE};
    color: ${COLOR.GRAY_7};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 14px;
  }

  & > div:last-child {
    padding-bottom: 22px;

    div {
      gap: 8px;
    }
  }
`;
