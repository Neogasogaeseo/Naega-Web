import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StTeamMembersSelectedMember = styled.span`
  height: 27px;
  display: flex-inline;
  align-items: center;
  justify-content: center;
  padding: 7px 12px;
  margin-right: 10px;
  border-radius: 18px;
  background-color: ${COLOR.GRAY_3};
`;

export const StName = styled.span`
  margin-right: 8px;
  font-weight: 500;
  font-size: 13px;
  color: ${COLOR.GRAY_6};
`;
