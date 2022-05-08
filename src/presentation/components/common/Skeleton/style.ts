import styled from 'styled-components';
import { COLOR } from '@styles/common/color';

export const StSkeletonItem = styled.div`
  @keyframes skeleton-gradient {
    0% {
      background-color: ${COLOR.GRAY_1};
      opacity: 0.5;
    }
    100% {
      background-color: ${COLOR.GRAY_1};
      opacity: 1;
    }
  }
`;

export default StSkeletonItem;
