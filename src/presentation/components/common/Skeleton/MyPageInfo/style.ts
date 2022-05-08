import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import StSkeletonItem from '../style';

export const StProfile = styled.div`
  background-color: ${COLOR.GRAY_1};
  display: flex;
  align-items: center;
  width: calc(100% + 40px);
  margin-left: -20px;
  padding: 28px 20px;
  gap: 20px;
`;

export const StImage = styled(StSkeletonItem)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${COLOR.GRAY_3};
`;

export const StText = styled(StSkeletonItem)`
  height: 16px;
  background-color: ${COLOR.GRAY_3};
`;

export const StShortText = styled(StText)`
  margin-bottom: 8px;
  width: 66px;
`;

export const StLongText = styled(StText)`
  width: 143px;
`;

export const StMyKeyword = styled.div`
  margin-bottom: 50px;
`;

export const StTitle = styled(StSkeletonItem)`
  margin-top: 40px;
  background-color: ${COLOR.GRAY_3};
  width: 164px;
  height: 16px;
`;

export const StSubtitle = styled(StSkeletonItem)`
  margin-top: 40px;
  margin-bottom: 10px;
  width: 164px;
  height: 14px;
  background-color: ${COLOR.GRAY_15};
`;

export const StKeywordContainer = styled.div`
  padding-right: 3px;
  display: flex;
  gap: 8px;
`;

export const StKeyword = styled(StSkeletonItem)`
  width: calc(100% / 3);
  height: 21px;
  background-color: ${COLOR.GRAY_15};
`;
