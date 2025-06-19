import styled, { css } from "styled-components";
import { SMALL_DESKTOP } from "~/config/breakpoints";

export const Wrapper = styled.div<{ $bgImg: string }>`
  width: 100%;
  height: 100vh;
  ${({ $bgImg }) => `background-image: url(${$bgImg})`};
  background-size: cover;
  background-position: 100% 30%;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;

type ContentContainerProps = {
  $columns: number;
  $overrideWithGrey?: boolean;
  $invertColors: boolean;
  $textPosition?: "left" | "center" | "right";
  $textAlign?: "left" | "center" | "right";
  $pushDown?: number;
  $normalFontSize: boolean;
};

export const ContentContainer = styled.div<ContentContainerProps>`
  font-size: ${({ $normalFontSize }) => $normalFontSize ? 'var(--font-paragraph)' : 'var(--font-title-lg)'};
  font-weight: 700;
  display: flex;
  justify-content: center;
  flex-direction: ${({ $columns }) => $columns === 1 ? 'column' : 'row'};
  width: 100%;
  max-width: ${({ $columns }) => ($columns === 2 ? "90%" : "55rem")};
  margin-top: ${({ $pushDown }) => $pushDown && `${$pushDown}px`};

  p {
    margin-bottom: 0 !important;
  }

  > h2,
  > h1 {
    width: 100%;
    height: fit-content;
    display: flex;
    text-align: ${({ $textAlign }) => $textAlign && $textAlign};

    ${({ $textPosition }) => {
    switch ($textPosition) {
      case "center":
        return "justify-content: center;";
      case "left":
        return "justify-content: flex-start;";
      case "right":
        return "justify-content: flex-end;";
      default:
        return "justify-content: space-between";
    }
  }};
    > span {
      padding-inline: 5px;
      height: fit-content;
      // background-color: ${({ $overrideWithGrey }) => ($overrideWithGrey ? "var(--color-black)" : "var(--color-black)")};
      background-color: var(--color-black);
      color: var(--color-white);
      ${({ $invertColors }) => {
    if ($invertColors) {
      return css`
            background-color: var(--color-white);
            color: var(--color-black);
          `;
    }
  }};
    }
  }


  & > div.container {
    ${({ $normalFontSize }) => $normalFontSize && `
        padding: var(--space-sm);
        background-color: var(--color-white);
        font-weight: 300;
        width: fit-content;
        margin: auto;
      }
    `
  }

  & > *:nth-of-type(2) {
    ${({ $columns }) => $columns === 2 && "justify-self: flex-end;"}
  }

  ${SMALL_DESKTOP} {
    font-size: ${({ $normalFontSize }) => $normalFontSize ? 'var(--font-sm)' : 'var(--font-title-md)'};
  }
`;
