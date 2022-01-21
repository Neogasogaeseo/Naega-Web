import styled from 'styled-components';

export const StNeogaMainCardList = styled.div`
  padding: 0 20px;
  width: calc(100% + 40px);
  margin-left: -20px;
  margin-bottom: 44px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StCardWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  min-width: 100%;
`;
