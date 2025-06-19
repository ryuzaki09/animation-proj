import styled from "styled-components";

export const ModalWrapper = styled.dialog`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto auto;
  border: none;
  background-color: transparent;

  &::backdrop {
    background-color: rgba(221, 221, 221, 0.628);
    backdrop-filter: blur(3px);
  }

  > div {
    background-color: var(--color-white);
    max-width: 42rem;
    padding: 2rem;
    line-height: 115%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    strong {
      font-weight: 500;
    }

    h2 {
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    & button {
      margin-top: 1.5rem;
      background-color: var(--color-black);
      color: var(--color-white);
      padding: 0.8rem 1rem;
      border: none;
      align-self: flex-start;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: var(--color-grey-hover);
      }
    }
  }
`;
