import styled from 'styled-components';
import { ADD_BUTTON } from '@styles/common/button';

export const StAddTeamButton = styled.button`
  ${ADD_BUTTON}

  width: 60px;
  height: 60px;
  border-radius: 22px;
`;

export const StAddMemberButton = styled.button`
  ${ADD_BUTTON}

  width: 48px;
  height: 48px;
  border-radius: 50%;

  & > img {
    width: 12px;
    height: 12px;
  }
`;
