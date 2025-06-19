import styled, { css } from "styled-components";
import { MIN_DESKTOP, SMALL_DESKTOP } from "~/config/breakpoints";

export const Wrapper = styled.div<{ $bgImg: string }>`
  ${({ $bgImg }) => `background-image: url(${$bgImg});`}
  background-size: cover;
  height: 100vh;
  color: var(--color-white);

  display: grid;
  place-content: center;
`;

export const InnerWrapper = styled.div`
  margin: var(--space-md);

  & h2 {
    font-size: var(--font-title-md);
    font-weight: 500;
  }

  & > p {
    font-size: var(--font-title);
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  gap: var(--space-sm);
  min-height: 18rem;
  & > div {
    flex: 1;
  }
`;

type OptionBlockProps = {
  $isSelected?: boolean;
  $isScrollable?: boolean;
  $hasHover?: boolean;
};

export const OptionBlock = styled.div<OptionBlockProps>`
  padding: var(--space-sm) var(--space-xs);
  background-color: ${({ $isSelected }) => ($isSelected ? "var(--color-grey)" : "var(--color-white)")};
  color: var(--color-black);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  ${({ $hasHover }) =>
    $hasHover &&
    css`
      &:hover {
        color: white;
        cursor: pointer;
        background-color: var(--color-grey-hover);
      }
    `}

  > div {
    display: flex;
    flex-direction: column;
    max-height: 12rem;
    min-height: 12rem;
    overflow: auto;
    padding-right: 10px;

    ${({ $isScrollable }) => {
    if ($isScrollable)
      return css`
          position: relative;

          &::before {
            content: "";
            position: sticky;
            display: block;
            top: 0;
            left: 0;
            right: 0;
            min-height: 60px;
            height: 60px;
            background: linear-gradient(to bottom, var(--color-white) 0%, rgba(255, 255, 255, 0) 100%);
            pointer-events: none;
            z-index: 1;
            margin-top: -60px;
            transition: opacity 0.1s ease-in-out;
          }

          &::after {
            content: "";
            position: sticky;
            display: block;
            bottom: 0;
            left: 0;
            right: 0;
            min-height: 60px;
            height: 60px;
            background: linear-gradient(to top, var(--color-white) 0%, rgba(255, 255, 255, 0) 100%);
            pointer-events: none;
            z-index: 1;
            margin-bottom: -60px;
            transition: opacity 0.1s ease-in-out;
          }

          &.at-top::before {
            opacity: 0;
          }

          &.at-bottom::after {
            opacity: 0;
          }
        `;
  }}

    &::-webkit-scrollbar {
      appearance: none;
      -webkit-appearance: none;
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #647987;
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(100, 121, 135, 0.3);
      width: 5px;
    }

    p {
      font-size: 18px;

      ${MIN_DESKTOP} {
        font-size: 20px;
      }
    }

    & .option-title {
      margin-bottom: var(--space-xs);
      font-weight: 500;
    }

    & > div {
      margin-bottom: var(--space-sm);
    }
  }
  & button {
    background-color: var(--color-black);
    color: var(--color-white);
    padding: var(--space-xxs) 1.5rem;
    margin-top: 2rem;
    border: none;
    align-self: flex-start;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: var(--color-grey-hover);
    }
  }

  ${SMALL_DESKTOP} {
    padding: var(--space-xs);
  }
`;

export const SubmitWrapper = styled.div`
  text-align: center;
  margin-top: var(--space-xs);

  & button {
    padding: var(--space-xxs) var(--space-xs);
    background-color: var(--color-white);
    color: var(--color-black);
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: var(--color-grey-hover);
      color: var(--color-white);
    }
  }
`;
