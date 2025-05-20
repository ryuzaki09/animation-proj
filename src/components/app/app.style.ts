import { createGlobalStyle } from "styled-components";

export const AppReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
  }

  body {
    height: 100%;
    overflow: auto;
  }

  #root,
  main {
    width: 100%;
    height: 100%;
    // overflow: hidden;
    overflow: auto;
  }

  html {
    height: 100%;
    font-size: 20px;
    font-family: system-ui, sans-serif;
    font-weight: normal;
    line-height: 1;
    text-rendering: geometricPrecision;
    background-color: #ffffff;
    color: #000000;
    // overflow: auto;
  }

  main {
    // height: auto;
    // overflow: auto;
    // -webkit-overflow-scrolling: touch;
  }

  button {
    border: none;
  }

  @font-face {
    font-family: 'HSBC_MtUnivers_Latin';
    font-style: normal;
    font-weight: 900;
    src: url(./fonts/HSBC_MtUnivers_Latin-Bd.ttf);
    font-display: swap;
  }
  @font-face {
    font-family: 'HSBC_MtUnivers_Latin';
    font-style: normal;
    font-weight: 500;
    src: url(./fonts/HSBC_MtUnivers_Latin-Md.ttf);
    font-display: swap;
  }
  @font-face {
    font-family: 'HSBC_MtUnivers_Latin';
    font-style: normal;
    font-weight: 400;
    src: url(./fonts/HSBC_MtUnivers_Latin-Rg.ttf);
    font-display: swap;
  }
  @font-face {
    font-family: 'HSBC_MtUnivers_Latin';
    font-style: normal;
    font-weight: 300;
    src: url(./fonts/HSBC_MtUnivers_Latin-Lt.ttf);
    font-display: swap;
  }
  @font-face {
    font-family: 'HSBC_MtUnivers_Latin';
    font-style: italic;
    font-weight: 300;
    src: url(./fonts/HSBC_MtUnivers_Latin-LtIt.ttf);
    font-display: swap;
  }

  @font-face {
    font-family: 'HSBC_MtUnivers_Latin';
    font-style: normal;
    font-weight: 200;
    src: url(./fonts/HSBC_MtUnivers_Latin-Th.ttf);
    font-display: swap;
  }
  @font-face {
    font-family: 'HSBC_MtUnivers_Latin';
    font-style: italic;
    font-weight: 200;
    src: url(./fonts/HSBC_MtUnivers_Latin-ThIt.ttf);
    font-display: swap;
  }
  @font-face {
    font-family: 'HSBC_MtUnivers_Latin';
    font-style: normal;
    font-weight: 100;
    src: url(./fonts/HSBC_MtUnivers_Latin-ULt.ttf);
    font-display: swap;
  }
  @font-face {
    font-family: 'HSBC_MtUnivers_Latin';
    font-style: italic;
    font-weight: 100;
    src: url(./fonts/HSBC_MtUnivers_Latin-ULtIt.ttf);
    font-display: swap;
  }
`;
