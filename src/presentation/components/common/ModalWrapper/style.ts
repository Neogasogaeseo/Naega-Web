import styled from 'styled-components';

export const StModalWrapper = styled.div<{ isOpen: boolean }>`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  & > *:last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
