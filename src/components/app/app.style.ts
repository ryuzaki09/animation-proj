import { createGlobalStyle } from "styled-components";
import { MIN_DESKTOP, MIN_LAPTOP, MIN_LARGE_DESKTOP } from "~/config/breakpoints";

export const AppReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 115%;
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
    font-family: "HSBC_MtUnivers_Latin";
    font-weight: 300;
    line-height: 115%;
    text-rendering: geometricPrecision;
    background-color: #ffffff;
    color: #000000;

    ${MIN_DESKTOP} {
      font-size: 22px;
    }

    ${MIN_LARGE_DESKTOP} {
      font-size: 28px;
    }
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

  :root {
    --color-white: #fff;
    --color-black: #1E1E1E;
    --color-grey: #cacaca;
    --color-light-grey: #CCCCCC;
    --color-grey-hover: #545454;
    --color-red: #da0011;

    --space-xxs: 0.5rem;
    --space-xs: 1rem;
    --space-sm: 2rem;
    --space-md: 3.5rem;
    --space-lg: 5rem;
    --space-x-lg: 6rem;
    --font-sm: 16px;
    --font-paragraph: 20px;
    --font-normal: 24px;
    --font-title: 1.6rem;
    --font-title-md: 2.2rem;
    --font-title-lg: 2.8rem;

    ${MIN_DESKTOP} {
      --font-title-lg: 3rem;
    }

    ${MIN_LARGE_DESKTOP} {
      --font-title-md: 2.4rem;
      --font-title-lg: 4.375rem;
    }
  }

  p {
    margin-bottom: revert;
  }

  p:last-child {
    margin-bottom: 0;
  }

  line-height: 1.3;

  strong {
    font-weight: 500;
  }

  .visual-break {
    ${MIN_LAPTOP} {
      display: block;
    }
  }

  & .headingTitleMedium {
    font-size: var(--font-title-md);
    font-weight: 500;
    margin-bottom: 1rem;
  }

  & .headingTitleSmall {
    font-size: var(--font-title);
    font-weight: 500;
    margin-bottom: 1rem;
  }

  & .heading-number {
    display: flex;
    align-items: flex-start;
    gap: 5px;
  }

  &.heading-number .heading-number-line-break {
    flex-shrink: 0;
    width: 1.5em;
    font-weight: inherit;
  }

  .heading-number .content-number-line-break {
    flex-grow: 1;
  }

  & p.bot-1 {
    margin-bottom: var(--space-xs);
  }

  ul {
    margin-left: 1.5rem;

    & li {
      margin-bottom: var(--space-xs);
    }
  }

  & .videoOverlayContent {
    display: flex;
    flex-direction: column;
  }
`;
