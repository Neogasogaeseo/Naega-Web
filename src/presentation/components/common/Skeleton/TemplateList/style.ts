import styled from 'styled-components';

import StSkeletonItem from '../style';
import { COLOR } from '@styles/common/color';

export const StTemplateListSkeleton = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
`;

export const StText = styled(StSkeletonItem)`
  height: 16px;
  background-color: ${COLOR.GRAY_3};
`;

export const StShortText = styled(StText)`
  width: 164px;
  margin-bottom: 8px;
`;

export const StLongText = styled(StText)`
  width: 219px;
  margin-bottom: 25px;
`;

export const StCardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  gap: 8px;
  padding-left: 20px;
  margin-left: -20px;
  margin-bottom: 41px;
`;

export const StCard = styled(StSkeletonItem)`
  box-sizing: border-box;
  width: 136px;
  height: 156px;
  border-radius: 17px;
  background-color: ${COLOR.GRAY_2};
  overflow: hidden;
`;
