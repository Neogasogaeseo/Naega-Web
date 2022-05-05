import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled, { css } from 'styled-components';

export const StTeamMemberManagement = styled.div`
  width: 100%;
  padding: 35px 20px 0 20px;
`;

export const StTeamMember = styled.div<{ isConfirmed: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid ${COLOR.GRAY_2};
  *:first-child {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 100px;
      object-fit: cover;
      margin-right: 12px;
    }
    *:last-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      *:first-child {
        ${FONT_STYLES.R_15_TITLE}
        color: ${COLOR.GRAY_8};
        margin-bottom: 7px;
      }
      *:last-child {
        ${FONT_STYLES.R_12_TITLE}
        color: ${COLOR.GRAY_5};
      }
    }
  }
  button {
    width: 71px;
    height: 36px;
    ${FONT_STYLES.M_13_TITLE}
    border-radius: 10px;
    border: 1px solid ${(props) => (props.isConfirmed ? COLOR.GRAY_4 : COLOR.GRAY_3)};
    ${(props) =>
      props.isConfirmed
        ? css`
            color: ${COLOR.GRAY_4};
            background-color: transparent;
          `
        : css`
            color: ${COLOR.GRAY_5};
            background-color: ${COLOR.GRAY_1};
          `}
  }
`;
