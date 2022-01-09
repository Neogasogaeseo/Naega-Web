import styled from 'styled-components';

export const StProfileListWrapper = styled.div`
  width: 100vw;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StItemContainer = styled.div<{ isSquare: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  min-width: 100%;
  padding: ${(props) => (props.isSquare ? '0 16px' : '0 24px')};

  & > div {
    margin-right: ${(props) => (props.isSquare ? '14px' : '16px')};
  }
`;
