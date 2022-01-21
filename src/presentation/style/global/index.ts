import { COLOR } from '@styles/common/color';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    @media (min-width: 768px) {
      width: 390px;
      margin: 0 auto;
    }
  }
  
  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 0;
  }

  input {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${COLOR.CORAL_MAIN};
  }

  body, button, input, textarea {
    font-family: 'Pretendard';
  }

  textarea {
    box-sizing: border-box;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  textarea:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${COLOR.CORAL_MAIN};
  }

  a {
    text-decoration:none;
  }

  input[disabled] {
    background-color: white;
  }
`;

export default GlobalStyle;
