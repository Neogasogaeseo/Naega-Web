import styled from 'styled-components';

export const StModalWrapper = styled.div<{ isOpened: boolean; isAnimation: boolean }>`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${(props) => (props.isOpened ? 'visible' : 'hidden')};
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  & > *:last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${(props) => (props.isOpened ? 'translate(-50%, -50%)' : 'translate(-50%, 0)')};
    transition: ${(props) => (props.isAnimation ? 'all 0.3s' : 'initial')};
  }
`;
