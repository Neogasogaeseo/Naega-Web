import styled, { css } from 'styled-components';

export const StUserSearchForTeamRegister = styled.div<{ isSelected: boolean }>`
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
    margin-top: 18px;
  }
  ${(props) =>
    props.isSelected &&
    css`
      & > *:nth-child(3) {
        padding: 0 20px;
      }
    `}
  & > *:last-child {
    margin-top: 18px;
  }
`;
