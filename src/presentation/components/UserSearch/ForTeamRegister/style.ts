import styled from 'styled-components';

export const StUserSearchForTeamRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: white;
  z-index: 100;
  & > *:first-child {
    margin-bottom: 20px;
  }
  & > *:nth-child(2) {
    & > *:first-child {
      margin-top: 18px;
      margin-bottom: 15px;
    }
  }
  & > *:last-child {
    margin-top: 18px;
  }
`;

export const StPaddingWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
`;
