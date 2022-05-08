import styled from 'styled-components';

import StSkeletonItem from '../style';
import { COLOR } from '@styles/common/color';

export const StTeamProfileTitle = styled(StSkeletonItem)`
  width: 140px;
  height: 16px;
  background-color: ${COLOR.GRAY_3};
  margin: 39px 0px 16px 20px;
`;

export const StTeamProfileContainer = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 33px;
`;

export const StTeamImage = styled(StSkeletonItem)`
  width: 60px;
  height: 60px;
  margin-bottom: 6px;
  background-color: ${COLOR.GRAY_2};
`;

export const StTeamName = styled(StSkeletonItem)`
  width: 60px;
  height: 12px;
  background-color: ${COLOR.GRAY_2};
`;
