import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html,
  body {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  input {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  body, button {
    font-family: 'Pretendard';
  }
`;

export default GlobalStyle;
