import styled from 'styled-components';

export const StNeososeoFormHome = styled.div`
  width: 100%;
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
    width: 100%;
  }
`;
