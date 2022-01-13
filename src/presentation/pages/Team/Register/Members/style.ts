import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StTeamRegisterMembers = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const StHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 20px 2px 10px;
  border-bottom: 1px solid ${COLOR.GRAY_2};
  & > div {
    font-weight: 600;
    font-size: 17px;
    color: ${COLOR.GRAY_8};
  }
  & > button {
    background-color: transparent;
    ${FONT_STYLES.M_15_TITLE}
    color: ${COLOR.CORAL_MAIN};
  }
`;

export const StTeamMembersSearchResultTitle = styled.div`
  padding: 40px 20px 12px 20px;
  margin-bottom: 7px;
  ${FONT_STYLES.SB_13_TITLE}
  background-color: ${COLOR.GRAY_1};
`;
