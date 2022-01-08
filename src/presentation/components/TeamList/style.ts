import styled from 'styled-components';

export const StTeamListWrapper = styled.div`
  width: 100vw;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StItemContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: max-content;

  & > div + div {
    margin-left: 14px;
  }
`;
