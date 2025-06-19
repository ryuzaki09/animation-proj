import styled from "styled-components";
import { MIN_DESKTOP, MIN_LARGE_DESKTOP } from "~/config/breakpoints";

export const Wrapper = styled.div<{ $contain: boolean }>`
  background-color: black;
  width: 100%;
  height: 100vh;

  display: grid;
  place-content: center;

  & video {
    ${({ $contain }) => {
    if ($contain) {
      return 'width: 100vw; height: 100dvh;'
    } else {
      return 'width: 100%'
    }
  }}
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  height: 100dvh;
  width: 100vw;
  overflow-y: hidden;

  display: grid;
  place-content: center;
`;

type ContentProps = {
  $isTextBoxTransparent?: boolean;
};

export const Content = styled.div<ContentProps>`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;

  display: grid;
  place-content: center;
  width: 100%;
  max-width: 850px;

  ${MIN_DESKTOP} {
    max-width: 1000px;
  }

  ${MIN_LARGE_DESKTOP} {
    max-width: 1200px;
  }

  & > div {
    background-color: ${({ $isTextBoxTransparent }) => ($isTextBoxTransparent ? "transparent" : "var(--color-white)")};
    color: ${({ $isTextBoxTransparent }) => ($isTextBoxTransparent ? "var(--color-white)" : "var(--color-black)")};
    margin: auto;

    &:has(p) {
      padding: var(--space-xs);
    }

    h1 {
      font-size: var(--font-title-lg);
      font-weight: 700;
    }
  }
`;

export const Controls = styled.div`
  position: absolute;
  left: var(--space-sm);
  bottom: var(--space-sm);
`;
