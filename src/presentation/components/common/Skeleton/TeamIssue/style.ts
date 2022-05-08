import styled from 'styled-components';

import StSkeletonItem from '../style';
import { COLOR } from '@styles/common/color';

export const StTeamIssueSkeleton = styled.div``;

export const StTeamIssueTitle = styled(StSkeletonItem)`
  width: 140px;
  height: 16px;
  background-color: ${COLOR.GRAY_3};
  margin-top: 39px;
  margin-bottom: 16px;
`;

export const StTeamIssueCard = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 20px;
  background-color: #fbfbfb;
  padding: 22px;
  margin-bottom: 16px;
`;

export const StTeamIssueInfo = styled(StSkeletonItem)`
  width: 118px;
  height: 12px;
  background-color: ${COLOR.GRAY_2};
`;

export const StTeamIssueContent = styled(StSkeletonItem)`
  width: 100%;
  height: 12px;
  background-color: ${COLOR.GRAY_2};
  margin-top: 8px;
`;

export const StCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
`;

export const StImageContainer = styled.div`
  display: flex;
  gap: 6px;
`;

export const StTeamImage = styled(StSkeletonItem)`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${COLOR.GRAY_2};
  border-raidus: 50px;
`;

export const StTeamIssueWriter = styled(StSkeletonItem)`
  width: 94px;
  height: 12px;
  background-color: ${COLOR.GRAY_2};
`;
