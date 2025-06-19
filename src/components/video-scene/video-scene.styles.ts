import styled from "styled-components";
import { MIN_DESKTOP, MIN_LARGE_DESKTOP } from "~/config/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  --content-offset: 50%;
  position: relative;

  & > div {
    width: 50%;
  }

  strong {
    font-weight: 500;
  }
`;

export const ContentWrapper = styled.div<{ $overflow: boolean }>`
  display: grid;
  place-content: center;
  padding-inline: 3.5rem;
  margin: auto;
  position: relative;
  ${({ $overflow }) => $overflow && "height: 100dvh;"}

  & > div:has(p), div:has(div) {
    height: ${({ $overflow }) => ($overflow ? "70%" : "100vh")};
    margin: auto 0;
    position: relative;
    ${({ $overflow }) => $overflow && "overflow-y: scroll;"}
    gap: 0.5rem;

    &::-webkit-scrollbar {
      display: none;
    }

    ${({ $overflow }) =>
      !$overflow &&
      `
      display: grid;
      place-content: center;
    `}
  }

  ${MIN_DESKTOP} {
    padding-inline: 4rem;
  }

  ${MIN_LARGE_DESKTOP} {
    padding-inline: 6rem;
  }
`;

export const StickyImgWrapper = styled.div<{ $containImg: boolean }>`
  position: sticky;
  top: 0;
  right: 0;
  height: 100dvh;

  & video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const FadeTop = styled.div`
  position: absolute;
  left: 0;
  right: 5px;
  top: 0;
  height: var(--space-md);
  z-index: 1;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  margin-top: 20%;
`;

export const FadeBottom = styled.div`
  position: absolute;
  left: 0;
  right: 5px;
  bottom: 0;
  height: var(--space-md);
  z-index: 1;
  background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  margin-bottom: 20%;
`;

export const GoBackBtn = styled.button`
  padding: var(--space-xxs) var(--space-xs);
  width: fit-content;
  border: 1px solid var(--color-black);
  margin-top: var(--space-sm);

  background-color: var(--color-white);
  font-weight: 500;
`;

export const PlayControls = styled.div`
  position: sticky;
  bottom: 20px;
  left: -50px;
  z-index: 2;

  button {
    background-color: white;
    padding-left: 0 !important;
  }
`;
