import styled from 'styled-components'

export const Wrapper = styled.div<{ $bgImg: string }>`
  height: 100vh;
  display: grid;
  place-content: center;

  background-image: url(${({ $bgImg }) => $bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  --max-cards-width: 400px;
`

export const InnerWrapper = styled.div`
  display: grid;
  place-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--color-white);

  & .title {
    font-size: var(--font-title-md);
    font-weight: 500;
  }

  & .description {
    font-size: var(--font-title);
  }
`

export const ContentWrapper = styled.div`

`

export const CardsWrapper = styled.div`
  position: relative;
  height: 340px;
  width: 100%;
  max-width: var(--max-cards-width);
  margin: 0 auto;
  color: var(--color-black);
`

export const Card = styled.div<{ $isRotated: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: var(--max-cards-width);
  margin: 0 auto;

  & button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: var(--color-white);

    & > svg {
      width: 20px;
      height: 20px;
    }
  }

  transform: translateY(0) ${({ $isRotated }) => $isRotated ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transition: all 1s ease-in-out;
  transform-style: preserve-3d;

  &[data-animation="out"] {
    transform: translateY(100vh);
  }
`

export const CardFront = styled.div<{ $textAlign: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: var(--color-white);
  padding: var(--space-sm);

  display: grid;
  ${({ $textAlign }) =>
    $textAlign === 'center' && 'place-content: center; text-align: center;'}
`

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: var(--color-white);
  transform: rotateY(180deg);
  padding: var(--space-sm);

  display: grid;
  place-content: center;
`

export const Controls = styled.div`
  max-width: var(--max-cards-width);
  margin: 1rem auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--space-xxs);

  & button {
    padding: 5px 8px 2px;
  }
`
