import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  --content-offset: 50%;
  position: relative;

  & > div {
    width: 50%;
  }
`

export const ContentWrapper = styled.div<{ $overflow: boolean }>`
  display: grid;
  place-content: center;
  padding-inline: 3rem;
  margin: auto;
  position: relative;
  // height: ${({ $overflow }) => $overflow ? '70%' : '100dvh'};
  ${({ $overflow }) => $overflow && 'height: 100dvh;'}

  & > div:has(p), div:has(div) {
    height: ${({ $overflow }) => $overflow ? '70%' : '100dvh'};
    margin: auto 0;
    position: relative;
    ${({ $overflow }) => $overflow && 'overflow-y: scroll;'}

    &::-webkit-scrollbar {
      display: none;
    }

    ${({ $overflow }) => !$overflow && `
      display: grid;
      place-content: center;
    `}
  }
`

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

  ${({ $containImg }) => $containImg && `
    display: flex;
    align-items: center;

    & img {
      max-height: 70%;
      object-fit: contain;
    }
  `}
`

export const FadeTop = styled.div`
  position: absolute;
  left: 0;
  right: 5px;
  top: 0;
  height: var(--space-md);
  z-index: 1;
  background: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));
  margin-top: 20%;
`

export const FadeBottom = styled.div`
  position: absolute;
  left: 0;
  right: 5px;
  bottom: 0;
  height: var(--space-md);
  z-index: 1;
  background: linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0));
  margin-bottom: 20%;
`
