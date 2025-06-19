import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  position: relative;

  & > div {
    overflow: hidden;
    height: 100%;
    position: absolute;
    top: 0;

  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    scale: 1;
    transition: all 0.3s ease-in-out;
  }

  & > div:hover {
    img {
      scale: 1.1;
    }
  }
`

export const LeftBlock = styled.div<{ $isSelected: boolean }>`
  width: 50%;
  right: 50%;
  transition: all 0.5s ease-in-out;

  ${({ $isSelected }) => $isSelected && 'right: 0; width: 100%; z-index: 1;'}


  & img {
    object-position: 60% 0;
  }

  & div.description {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-100%, -50%);
    transition: all 0.5s ease-in-out;
    transition-delay: 1s;

    width: 45%;
    padding: 1rem;
    background-color: var(--color-white);
    color: var(--color-black);
    font-size: var(--font-title-lg);
    font-weight: 700;

    ${({ $isSelected }) => $isSelected && 'transform: translate(5%, -50%);'}
  }
`

export const RightBlock = styled.div<{ $isSelected: boolean }>`
  width: 50%;
  transition: all 0.5s ease-in-out;
  left: 50%;

  ${({ $isSelected }) => $isSelected && 'left: 0; width: 100%;'}

  & img {
    object-position: 10% 0;
  }

  & div.description {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(150%, -50%);
    transition: all 0.5s ease-in-out;
    transition-delay: 1s;
    width: 45%;

    padding: 1rem;

    background-color: var(--color-white);
    color: var(--color-black);
    font-size: var(--font-title-lg);
    font-weight: 700;

    ${({ $isSelected }) => $isSelected && 'transform: translate(0, -50%);'}
  }
`

export const BlockTitle = styled.button`
  position: absolute;
  bottom: var(--space-sm);
  left: 50%;
  transform: translateX(-50%);
  border: none;

  background-color: var(--color-white);
  padding: 0.3rem 0.5rem;
  font-weight: 500;
  font-size: 34px;
`

export const SectionModalWrapper = styled.div`
  position: absolute;
  inset: 0;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  inset: 0;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;

  &::backdrop {
    backdrop-filter: blur(5px);
  }

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: flex-end;
    padding: var(--space-xxs);
    font-size: 24px;

    & button {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;

      &:hover {
        background: revert;
      }
    }
  }

  & > div:nth-of-type(2) {
    padding: var(--space-xxs) var(--space-sm) var(--space-sm);
  }
`;
