import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  --distance: 0px;
  overflow: clip;
`

export const ContentWrapper = styled.div`
  background-color: var(--color-white);
  width: 100vw;
  height: 100%;
  // padding: var(--space-sm);
  position: relative;
  // overflow: hidden;

  display: flex;
`
export const ContentInnerWrapper = styled.div`
  width: 50%;
  padding-right: var(--space-sm);

  & > div {
    height: 100vh;
    display: grid;
    place-content: center;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`

export const VideoWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100dvh;
  width: 50%;
`

export const VideoInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  transform: translateX(var(--x-offset-limit));

  & video {
    height: 100%;
  }
`

export const EmptyDiv = styled.div`
`

export const PlayControls = styled.div`
  position: absolute;
  bottom: var(--space-xs);
  left: var(--space-xs);
  transform: translateX(calc(0px + var(--x-offset-limit)));
`

export const ExtraContentWrapper = styled.div`
  height: 100dvh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;

  scroll-snap-align: start;

  & > div {
    max-width: 870px;
    & > div:nth-of-type(1) {
      text-align: center;
      margin: var(--space-sm) auto;
      color: var(--color-white);
      font-weight: 700;
    }

    & > div:nth-of-type(2) {
      padding-block: var(--space-sm);
      padding-inline: var(--space-md);
      background-color: var(--color-white);
    }
  }
`
