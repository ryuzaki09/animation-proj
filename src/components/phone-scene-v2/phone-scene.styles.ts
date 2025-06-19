import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
`;

export const InnerWrapper = styled.div`
  position: relative;
`;

export const PhoneWrapper = styled.div<{ $leftAlign: boolean }>`
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;

  transition: all 500ms ease-in-out;
  ${({ $leftAlign }) => $leftAlign && "width: 50%;"}
  display: flex;
`;

export const PhoneInnerWrapper = styled.div<{ $leftAlign: boolean }>`
  margin: auto auto 0;
  width: 100%;
  max-width: 400px;
  height: 80dvh;

  position: relative;
  display: flex;
  flex-direction: column;

  & button {
    background-color: var(--color-black);
    color: var(--color-white);

    margin: auto;
    padding: var(--space-xs);
    width: fit-content;
    opacity: 1;
    transition: opacity 500ms ease-in-out;
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid #5E9ED6;
      outline-offset: 1px;
    }
  }

  & button.readMore {
    ${({ $leftAlign }) => $leftAlign && "opacity: 0;"}
  }
`;

export const PhoneTop = styled.div`
  //position: absolute;
  //inset: 0;
  //overflow: hidden;
  width: 400px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const PhoneLeft = styled.div`
  width: 31px;

  & img {
    width: 100%;
    height: 100%;
  }
`

export const PhoneRight = styled.div`
  width: 29px;

  & img {
    width: 100%;
    height: 100%;
  }
`

export const PhoneBody = styled.div`
  display: flex;
  height: 100%;
`

export const PhoneBodyContent = styled.div`
  position: relative;
  width: 350px;
`

export const PhoneContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: grid;
  padding: var(--space-md) 2.5rem var(--space-xs);
  font-size: var(--font-normal);
  opacity: 0;
  z-index: 1;

  &[data-is-active="true"] {
    opacity: 1;
    z-index: 2;
  }

  & .phone-label {
    background-color: var(--color-black);
    color: var(--color-white);
    padding-block: 0.1rem;
    width: fit-content;
    margin: auto auto var(--space-xs);
  }
`;

export const RevealWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  transform: translateX(50%);
`;

export const RevealInnerWrapper = styled.div<{ $reveal: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(100%);
  transition: all 1s ease-in-out;
  transition-delay: 0.5s;
  height: 100%;
  width: 100%;

  ${({ $reveal }) => $reveal && "transform: translateX(0);"}
`;

export const RevealContent = styled.div`
  height: 100dvh;
  width: 50%;
  display: grid;
  place-content: center;
  padding: var(--space-sm);
`;
