import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StIssueTeamInfo = styled.div`
  background-color: ${COLOR.GRAY_1};
  width: fit-content;
  border-radius: 10px;
  padding: 5px 7px;
  display: flex;
  align-items: center;
  font-size: 12px;

  & > * + * {
    margin-left: 6px;
  }

  & > img {
    width: 22px;
    height: 22px;
    border-radius: 8px;
    object-fit: cover;
  }
`;
