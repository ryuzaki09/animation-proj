import styled from 'styled-components'

export const Wrapper = styled.div`
  --y-distance: 0;
  position: relative;
  height: 100%;
`

export const VideoWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100dvh;
  overflow: hidden;

  transform: translateY(calc(0px + var(--y-distance)));

  & video {
    height: 100%;
  }
`

export const VideoInnerWrapper = styled.div`

`

export const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
`

export const VideoContentBlock = styled.div<{ $index: number }>`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  transform: translateX(calc(-${({ $index }) => ($index + 1) * 100}vw + var(--y-distance)));
  z-index: 1;

  display: grid;
  place-content: center;

  & > div {
    width: 50%;
    margin: 0 auto;

    & > div:nth-of-type(1) {
      text-align: center;
      color: var(--color-white);
      font-weight: 700;
    }

    & > div:nth-of-type(2) {
      padding: var(--space-sm);
      background-color: var(--color-white);
      color: var(--color-black);
    }
  }


`

export const ContentInnerWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: fit-content;
  width: 50%;
  margin-top: auto;
  padding: var(--space-sm);

  background-color: var(--color-white);

`

export const ContentBlock = styled.div`
  background-color: var(--color-white);
  height: 100vh;
  display: grid;
  place-content: center;
`

export const PlayControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: var(--space-xs);
  z-index: 2;
`
