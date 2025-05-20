import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  --distance: 0px;
`

export const ContentWrapper = styled.div`
  background-color: var(--color-white);
  width: 100vw;
  height: 100%;
  padding: var(--space-sm);
  position: relative;
  overflow: hidden;


`
export const ContentInnerWrapper = styled.div`
  width: 50%;
  padding-right: var(--space-sm);

  & > div {
    height: 100vh;
    display: grid;
    place-content: center;
  }
`

export const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100vh;
  transform: translate(calc(0px + var(--x-offset-limit)), calc(0px + var(--distance)));
`

export const VideoInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  & video {
    height: 100%;
  }
  & > div:not(:has(button)) {
      // position: absolute;
      // top: 0;
      // left: 0;
      // display: grid;
      // place-content: center;
      //
      // & > div {
      //   padding: var(--space-sm);
      //   background-color: var(--color-white);
      //   width: 50%;
      // }
    }
  }
`

export const EmptyDiv = styled.div`
`

export const PlayControls = styled.div`
  position: absolute;
  bottom: var(--space-xs);
  left: var(--space-xs);
  transform: translateX(calc(0px - var(--offset-limit)));
`

export const ExtraContentWrapper = styled.div<{ $index: number }>`

  height: 100dvh;
  width: 100vw;
  transform: translateX(calc(${({ $index }) => 100 * ($index + 2)}vw + 50vw - var(--distance)));
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;

  & > div {
    width: 50%;
    & > div:nth-of-type(1) {
      text-align: center;
      margin: var(--space-xs) auto;
      color: var(--color-white);
      font-weight: 700;
    }

    & > div:nth-of-type(2) {
      padding: var(--space-sm);
      background-color: var(--color-white);
    }
  }
`
