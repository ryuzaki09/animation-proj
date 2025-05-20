import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;

  display: grid;
  place-content: center;
  overflow: hidden;
`

export const LaptopWrapper = styled.div<{ $isRevealed: boolean }>`
  position: relative;
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;
  max-width: 80%;
  margin: auto;

  ${({ $isRevealed }) => $isRevealed && 'transform: translateX(-40%);'}

  & img {
    width: 100%;
  }
`

export const LaptopContent = styled.div<{ $isRevealed: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: grid;
  place-content: center;
  place-items: center;

  & button {
    background-color: var(--color-black);
    color: var(--color-white);
    width: fit-content;
    padding: var(--space-xxs) var(--space-xs);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;

    ${({ $isRevealed }) => $isRevealed && 'opacity: 0;'}
  }
`

export const RevealedContent = styled.div<{ $isRevealed: boolean }>`
  position: absolute;
  transform: translateX(300%);
  transition: transform 0.5s ease-in-out;
  transition-delay: 0.5s;
  width: 50%;

  ${({ $isRevealed }) => $isRevealed && 'transform: translateX(150%);'}
`
