import styled from 'styled-components';

export const StSkeletonItem = styled.div`
  @keyframes skeleton-gradient {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  animation: skeleton-gradient 2s infinite ease-in-out;
`;

export default StSkeletonItem;
