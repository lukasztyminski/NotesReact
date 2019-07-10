import { createGlobalStyle } from 'styled-components';
import font from './fonts';
// import colors from './colors';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-size:62.5%;
  }

  body {
    font-size: 1.6rem;
    padding-left: 150px;
    font-family: ${font.primaryFont}, sans-serif;
    border: 0;
    margin: 0;
    position: relative;

  }

  h1, h2, h3, h4 {
    margin: 0;
  }

  * {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
}

*::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

*::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 16px;
}

*::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 16px;
}

`;

export default GlobalStyle;
