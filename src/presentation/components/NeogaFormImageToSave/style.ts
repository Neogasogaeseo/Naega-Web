import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StNeogaFormImageToSave = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 844px;
  padding-top: 167px;
  background-color: ${COLOR.GRAY_1};
  & > *:first-child {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 26px;
    & > *:first-child {
      width: 60px;
      height: 60px;
      border-radius: 20px;
      object-fit: cover;
    }
    & > *:last-child {
      padding-top: 10px;
      & > *:first-child {
        ${FONT_STYLES.SB_20_TITLE}
        color: ${COLOR.GRAY_8};
        margin-bottom: 8px;
      }
      & > *:last-child {
        ${FONT_STYLES.R_14_TITLE}
        color: ${COLOR.GRAY_5};
      }
    }
  }
`;

export const StLogo = styled.img`
  margin-top: 65px;
  height: 30px;
`;
