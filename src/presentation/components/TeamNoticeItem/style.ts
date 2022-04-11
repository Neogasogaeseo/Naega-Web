import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StTeamProfile = styled.img<{ isDeclined: boolean }>`
  border-radius: 15px;
  width: 48px;
  height: 48px;
  ${({ isDeclined }) => isDeclined && `filter: grayscale(80%) brightness(0.8);`}
`;

export const StTeamProfileWrapper = styled.div`
  position: relative;
  & svg {
    position: absolute;
    top: 0;
    right: -1px;
  }
`;

export const StTeamNoticeItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 48px auto;
  row-gap: 16px;
  column-gap: 18px;
  padding-left: 20px;
  padding-right: 20px;
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & > div:nth-child(4) {
    display: flex;
    gap: 10px;
    & > div {
      width: 100%;
    }
  }
`;

export const StTeamName = styled.div`
  ${FONT_STYLES.R_15_BODY};
  color: ${COLOR.GRAY_8};
  & span {
    font-weight: 500;
  }
`;

export const StInvitationTime = styled.div`
  ${FONT_STYLES.R_12_TITLE};
  color: ${COLOR.GRAY_5};
  margin-top: 8px;
`;

const Button = styled.div`
  cursor: pointer;
  border-radius: 12px;
  padding: 11px 0;
  text-align: center;
  ${FONT_STYLES.M_14_TITLE}
`;

export const StAcceptButton = styled(Button)`
  background-color: ${COLOR.CORAL_MAIN};
  color: ${COLOR.GRAY_1};
`;

export const StDeclineButton = styled(Button)`
  background-color: ${COLOR.GRAY_15};
  color: ${COLOR.GRAY_5};
`;
