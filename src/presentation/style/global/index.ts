import { COLOR } from '@styles/common/color';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html,
  body {
    max-width: 390px;
    height: 100%;
    margin: 0 auto;
  }
  
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color : transparent;
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
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
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
