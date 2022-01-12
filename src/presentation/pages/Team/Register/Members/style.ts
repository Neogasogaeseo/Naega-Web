import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

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
    font-weight: 500;
    font-size: 15px;
    color: ${COLOR.CORAL_MAIN};
  }
`;

export const StTeamMembersSearchResult = styled.div`
  padding: 0 20px;
`;

export const StTeamMembersSearchResultTitle = styled.div`
  margin-top: 40px;
  font-weight: 600;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: -0.01em;
`;
