import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  --yDistance: 0;
  --xDistance: 0;

  strong {
    font-weight: 500;
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
`

export const ContentOneWrapper = styled.div`
  width: 50%;
  height: 100%;

  padding-inline: 3rem;

  & > div {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }

  & > div > div:nth-of-type(1) {
    display: grid;
    place-content: center;
    height: 100dvh;
  }
`

export const ContentTwoWrapper = styled.div`
  height: 100dvh;
  width: 50%;
  position: sticky;
  top: 0;
`

export const ContentTwoInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;

  display: grid;
  place-items: center;
  height: 100dvh;
  width: 100vw;
  transform: translate(-50%, calc(200dvh + var(--yDistance) - 3rem));

  & h2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 90%;

    font-size: var(--font-title-lg);
    font-weight: 700;

    & > span {
      background-color: var(--color-black);
      color: var(--color-white);
    }
  }
`

export const StickyImgWrapper = styled.div<{ $containImg: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100vw;

  // transform: translate(calc(0px + var(--xDistance)), var(--yDistance));
  transform: translateX(calc(0px + var(--xDistance)));

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
