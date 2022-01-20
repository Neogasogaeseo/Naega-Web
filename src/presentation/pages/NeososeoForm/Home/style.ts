import styled from 'styled-components';

export const StNeososeoFormHome = styled.div`
  width: calc(100vw);
  height: 100%;
  display: grid;
  grid-template-rows: auto 58px;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    padding-bottom: 40px;
  }

  & > div:nth-child(2) {
    padding: 0 20px;
  }

  & img {
    width: calc(100vw - 40px);
  }
`;
