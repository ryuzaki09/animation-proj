import styled from "styled-components";
import { MIN_DESKTOP, MIN_LARGE_DESKTOP } from "~/config/breakpoints";

export const Wrapper = styled.div`
  // max-width: 1350px;
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

export const ContentWrapper = styled.div`
  display: grid;
  place-content: center;
  padding-inline: var(--space-sm);
  margin: auto;
  position: relative;
  // margin-top: 30vh;

  & > div:has(p),
  div:has(div) {
    height: 100dvh;
    display: grid;
    place-content: center;
    // height: 70vh;
    margin: auto 0;
    position: relative;
    gap: 0.5rem;
    scroll-snap-align: center;
    scroll-snap-stop: always;

    // &::-webkit-scrollbar {
    //   display: none;
    // }
  }

  & > div > div {
    width: 45vw;
    height: 50dvh;
  }

  ${MIN_DESKTOP} {
    padding-inline: 4rem;
  }

  ${MIN_LARGE_DESKTOP} {
    padding-inline: 6rem;
  }
`;

export const StickyTextWrapper = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  height: 100dvh;
  display: grid;
  place-content: center;
  // display: flex;
  // flex-direction: column;
  // align-items: center;

  // h2 {
  //   margin-top: 30vh;
  // }
  & > div {
    width: 40vw;
    height: 50dvh;
  }
`;
