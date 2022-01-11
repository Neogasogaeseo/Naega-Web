import styled from 'styled-components';

export const StProfileListWrapper = styled.div`
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StItemWrapper = styled.div<{ isSquare: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  min-width: 100%;

  & > div {
    margin-right: ${(props) => (props.isSquare ? '14px' : '16px')};
  }
`;
