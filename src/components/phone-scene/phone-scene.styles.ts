import styled, { keyframes } from "styled-components";
import { LAPTOP } from "~/config/breakpoints";

export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  align-content: end;
  overflow: hidden;
`;

export const AnimationArea = styled.div<{ $phoneAnimationStarted: boolean }>`
  position: relative;
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  width: 100%;

  ${({ $phoneAnimationStarted }) => $phoneAnimationStarted && "transform: translateX(-33%);"}
`;

type PhoneProps = {
  $bgImage: string;
};

export const PhoneWrapper = styled.div<PhoneProps>`
  position: sticky;
  top: 0;
  right: 0;
  z-index: 2;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  height: 28rem;
  width: 17rem;
`;

type PhoneInsideContentProps = {
  $phoneAnimationStarted: boolean;
};

export const PhoneInsideContent = styled.div<PhoneInsideContentProps>`
  width: 18rem;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  position: relative;

  > div {
    position: absolute;
    top: 50px;
    margin-top: 20%;
    width: 14rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 0.6rem;
    gap: 2rem;
    transition: opacity 0.35s ease-in-out;

    > p {
      margin-bottom: 0;
    }

    > button,
    > span {
      background-color: var(--color-black);
      color: var(--color-white);
      width: fit-content;
      padding: var(--space-xxs) var(--space-xs);
      opacity: 1;
      cursor: pointer;
      transition: opacity 0.3s ease-in-out;
    }

    .button-read-more {
      ${({ $phoneAnimationStarted }) => $phoneAnimationStarted && "opacity: 0;"}
    }

    .button-reveal-more {
      margin-top: 9rem;
    }

    .phone-label {
      background-color: var(--color-black);
      color: var(--color-white);
      padding-block: 0.1rem;
    }

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }

    &.fade-in {
      opacity: 1;
      animation: fadeIn 0.5s ease-in-out forwards;
    }

    &.fade-out {
      opacity: 0;
      animation: fadeOut 0.5s ease-in-out forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
`;

export const RevealedContent = styled.div<{ $phoneAnimationStarted: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  transform: translateX(300%);
  transition: transform 0.5s ease-in-out;
  transition-delay: 0.5s;
  width: 30rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${({ $phoneAnimationStarted }) => $phoneAnimationStarted && "transform: translateX(110%);"}
`;

export const ScrollWrapper = styled.div`
  display: grid;
  padding-inline: 3rem;
  margin: auto;
  position: relative;
  max-height: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div:has(p),
  div:has(div) {
    scroll-snap-align: center;
    height: 100dvh;
    margin: auto 0;
    position: relative;
    display: grid;
    place-content: center;
    justify-content: flex-start;

    padding-block: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
