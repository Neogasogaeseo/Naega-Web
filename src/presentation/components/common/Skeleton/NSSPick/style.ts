import styled from 'styled-components';

import StSkeletonItem from '../style';
import { COLOR } from '@styles/common/color';

export const StTitle = styled(StSkeletonItem)`
  margin-top: 40px;
  background-color: ${COLOR.GRAY_3};
  width: 164px;
  height: 16px;
`;

export const StHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 46px;
  margin-bottom: 14px;
  position: relative;

  & > div {
    background-color: ${COLOR.GRAY_2};
  }
`;

export const StImage = styled(StSkeletonItem)`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const StNssTitle = styled(StSkeletonItem)`
  margin-left: 14px;
  width: 177px;
  height: 14px;
`;

export const StButton = styled(StSkeletonItem)`
  width: 51px;
  height: 14px;
  float: right;
  position: absolute;
  right: 2px;
`;

export const StBody = styled.div`
  margin-bottom: 48px;
`;

export const StContent = styled(StSkeletonItem)`
  width: 348px;
  height: 12px;
  margin-bottom: 8px;
  background-color: ${COLOR.GRAY_15};
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
