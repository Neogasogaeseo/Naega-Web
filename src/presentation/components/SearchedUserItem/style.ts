import styled, { css } from 'styled-components';
import { FONT_STYLES } from '@styles/common/font-style';
import { COLOR } from '@styles/common/color';

export const StSearchedUserItem = styled.div`
  padding: 15px 0;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLOR.GRAY_2};
  & > div {
    display: flex;
    align-items: center;
    & > img {
      width: 48px;
      height: 48px;
      object-fit: cover;
      border-radius: 100px;
      margin-right: 10px;
      image-orientation: from-image;
    }
  }
`;

export const StProfileName = styled.div`
  ${FONT_STYLES.M_15_TITLE}
  color:${COLOR.GRAY_8};
  margin-bottom: 5px;
`;

export const StId = styled.div`
  ${FONT_STYLES.R_12_TITLE}
  color:${COLOR.GRAY_5};
`;

export const StAddToggleButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const STATE_BUTTON = css`
  width: 71px;
  height: 36px;
  border-radius: 10px;
  ${FONT_STYLES.M_13_TITLE}
`;

export const StNoneButton = styled.button`
  ${STATE_BUTTON}
  background-color: ${COLOR.CORAL_MAIN};
  color: ${COLOR.GRAY_1};
`;

export const StMemberButton = styled.button`
  ${STATE_BUTTON}
  background-color: transparent;
  border: 1px solid ${COLOR.GRAY_4};
  color: ${COLOR.GRAY_4};
`;

export const StInvitedButton = styled.button`
  ${STATE_BUTTON}
  background-color: ${COLOR.GRAY_1};
  border: 1px solid ${COLOR.GRAY_3};
  color: ${COLOR.GRAY_5};
`;

export const StWillInviteButton = styled.button`
  ${STATE_BUTTON}
  background-color: ${COLOR.GRAY_4};
  color: ${COLOR.GRAY_1};
`;
