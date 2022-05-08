import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import StSkeletonItem from '../style';

export const StCardItemSkeleton = styled.div`
  background-color: ${COLOR.GRAY_1};
  padding: 37px 20px 143px 20px;
`;

export const StTitle = styled(StSkeletonItem)`
  width: 164px;
  height: 16px;
  background-color: ${COLOR.GRAY_3};
  margin-bottom: 8px;
`;

export const StSubtitle = styled(StSkeletonItem)`
  width: 219px;
  height: 16px;
  background-color: ${COLOR.GRAY_3};
  margin-bottom: 24px;
`;

export const StCard = styled.div`
  border: 1px solid ${COLOR.GRAY_1};
  border-radius: 26px;
  width: calc(100% - 40px);
  height: 286px;
  margin: 0 auto;
  background-color: ${COLOR.WHITE};
  margin-bottom: 16px;
  padding: 26px 22px 34px 22px;
`;

export const StCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const StImage = styled(StSkeletonItem)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${COLOR.GRAY_2};
  margin-left: 2px;
  margin-right: 18px;
`;

export const StNssTitle = styled(StSkeletonItem)`
  width: 158px;
  height: 12px;
  background-color: ${COLOR.GRAY_2};
  margin-bottom: 8px;
`;

export const StNssContent = styled.div`
  & + & {
    margin-top: 30px;
  }
`;

export const StLongText = styled(StSkeletonItem)`
  width: 100%;
  height: 12px;
  background-color: ${COLOR.GRAY_15};
  margin-bottom: 8px;
`;

export const StKeywordContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const StKeyword = styled(StSkeletonItem)`
  width: 103px;
  height: 18px;
  background-color: ${COLOR.GRAY_15};
`;
