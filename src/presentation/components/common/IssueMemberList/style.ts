import styled from 'styled-components';

export const StIssueMemberList = styled.div`
  display: flex;

  & img {
    width: 32px;
    height: 32px;
    position: relative;
    border-radius: 50%;
    margin-right: -11px;
  }

  & img:not(div:nth-of-type(1)) {
    opacity: 0.7;
  }

  & img:nth-of-type(1) {
    z-index: 3;
    background: red;
  }

  & img:nth-of-type(2) {
    z-index: 2;
    background: green;
  }

  & img:nth-of-type(3) {
    z-index: 1;
    background: yellow;
  }
`;
