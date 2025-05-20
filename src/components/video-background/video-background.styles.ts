import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;

  display: grid;
  place-content: center;

  & video {
    width: 100%;
    height: 100%;
  }
`

export const VideoWrapper = styled.div`
  position: relative;
  height: 100vh;
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  display: grid;
  place-content: center;
  width: 100%;

  & > div {
    background-color: var(--color-white);
    color: var(--color-black);
    padding: var(--space-sm);
    font-size: var(--font-normal);
    width: 75%;
    margin: auto;
  }
`

export const Controls = styled.div`
  position: absolute;
  left: var(--space-sm);
  bottom: var(--space-sm);
`
