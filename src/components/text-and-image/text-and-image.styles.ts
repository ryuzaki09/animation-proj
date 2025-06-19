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

type ContentWrapperProps = {
  $overflow: boolean;
  $buttonRevertColors?: boolean;
};

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${({ $overflow }) => $overflow && "height: 100dvh;"}

  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    scroll-snap-align: center;
    scroll-snap-stop: always;
    min-height: 100dvh;
    height: 100%;
    display: grid;
    place-content: center;
    padding: var(--space-sm);
  }

  ol {
    list-style: none;
    margin-bottom: 0.5rem;
  }

  .numbered-list-marker {
    list-style: none;
    padding-left: 0;
    counter-reset: item;
    margin-bottom: 0rem;

    & li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 1rem;
      text-indent: 0;

      &::before {
        content: counter(item) ".";
        counter-increment: item;
        position: absolute;
        left: 0;
        top: 0;
        width: 1rem;
        text-align: right;
        font-weight: 500;
      }

      & p {
        margin: 0.5rem 0;
        text-indent: 0;
      }
    }
  }

  & > div:has(p),
  div:has(div), div:has(ul) {
    // height: ${({ $overflow }) => ($overflow ? "70%" : "100dvh")};
    width: 100%;
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

  button {
    padding: var(--space-xxs) var(--space-xs);
    width: fit-content;
    // height: 2.5rem;
    border: 1px solid var(--color-black);
    margin-top: var(--space-sm);
    color: ${({ $buttonRevertColors }) => ($buttonRevertColors ? "var(--color-white)" : "var(--color-black)")};
    background-color: ${({ $buttonRevertColors }) =>
    $buttonRevertColors ? "var(--color-black)" : "var(--color-white)"};
    font-weight: 500;
    cursor: pointer;

    &:hover {
      ${({ $buttonRevertColors }) =>
    $buttonRevertColors && 'background-color: var(--color-grey-hover);'}

    &.download {
      color: var(--color-black);
      background-color: var(--color-white);
    }
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

  & img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  ${({ $containImg }) =>
    $containImg &&
    `
    display: flex;
    align-items: center;

    & img {
      max-height: 70%;
      object-fit: contain;
    }
  `}
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
