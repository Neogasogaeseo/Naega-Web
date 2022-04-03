import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StTeamRegisterMembers = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  z-index: 100;
`;

export const StTeamMembersSearchResultTitle = styled.div`
  padding: 40px 20px 12px 20px;
  margin-bottom: 7px;
  ${FONT_STYLES.SB_13_TITLE}
  background-color: ${COLOR.GRAY_1};
`;
