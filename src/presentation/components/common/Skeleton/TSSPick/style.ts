import styled from 'styled-components';

import StSkeletonItem from '../style';
import { COLOR } from '@styles/common/color';

export const StTitle = styled(StSkeletonItem)`
  margin-top: 40px;
  background-color: ${COLOR.GRAY_3};
  width: 164px;
  height: 16px;
`;

export const StTeamContainer = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 40px;

  & > div > div {
    background-color: ${COLOR.GRAY_2};
  }
`;

export const StImage = styled(StSkeletonItem)`
  width: 60px;
  height: 60px;
`;

export const StName = styled(StSkeletonItem)`
  width: 60px;
  height: 12px;
  margin-top: 6px;
`;

export const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 14px;

  & > div {
    background-color: ${COLOR.GRAY_2};
  }
`;

export const StTssTitle = styled(StSkeletonItem)`
  width: 177px;
  height: 14px;
`;

export const StButton = styled(StSkeletonItem)`
  width: 51px;
  height: 14px;
  margin-right: 2px;
`;

export const StBody = styled.div`
  margin-bottom: 48px;
`;

export const StContent = styled(StSkeletonItem)`
  background-color: ${COLOR.GRAY_15};
  width: 348px;
  height: 12px;
  margin-bottom: 8px;
`;

export const StKeywordContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const StKeyword = styled(StSkeletonItem)`
  background-color: ${COLOR.GRAY_15};
  width: 103px;
  height: 18px;
`;
