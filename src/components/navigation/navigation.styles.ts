import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavigationBurgerButton = styled.button`
  position: fixed;
  top: var(--space-xs);
  right: 1.5rem;
  z-index: 100;
  width: 40px;
  height: 40px;
  background-color: var(--color-white);
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:focus-visible {
    outline: 2px solid var(--color-red);
    outline-offset: 1px;
  }

  span {
    display: block;
    width: 23px;
    height: 3px;
    margin: 3px 0;
    background-color: var(--color-black);
    transition: all 0.3s ease;
  }
`;

export const NavigationOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(221, 221, 221, 0.628);
  z-index: 90;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const NavigationBody = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: -420px;
  width: 420px;
  height: 100%;
  background-color: var(--color-white);
  z-index: 100;
  transition: right 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);

  ${({ $isOpen }) => {
    if ($isOpen) {
      return css`
        right: 0;
      `;
    }
  }}
`;

export const NavigationContent = styled.div`
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavigationHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h2 {
      font-weight: 500;
      font-size: 1.5rem;
    }
  }
`;

export const NavigationCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:focus-visible {
    outline: 2px solid var(--color-red);
    outline-offset: 2px;
  }
`;

export const NavigationFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > hr {
    background-color: #c9c9c9;
    border: none;
    height: 1px;
    width: 100%;
    margin-block: 1rem;
  }

  > button {
    background-color: transparent;
    padding-block: 0.5rem;
    display: grid;
    grid-template-columns: 30px 1fr;
    align-items: center;
    cursor: pointer;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &:focus-visible {
      outline: 2px solid var(--color-red);
      outline-offset: 2px;
    }
  }

  > button:last-child {
    color: var(--color-red);
  }
`;

export const ScenarioLists = styled.ol`
  width: 100%;
  list-style-position: inside;
  display: flex;
  flex-direction: column;

  li {
    width: 100%;
    padding: 0.4rem 0;
    font-size: 0.8rem;
    display: inline-block;

    & a, div {
      padding-left: 0.5rem;
    }
  }
`;

type ScenarioLinkProps = {
  $isCompleted?: boolean;
  $isActive?: boolean;
};

const ScenarioLinkBase = css<ScenarioLinkProps>`
  width: 100%;
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  font-weight: ${({ $isActive }) => $isActive && "500"};

  > span {
    width: 95%;
  }

  & div {
    width: 17px;
    height: 17px;
    margin-right: 8px;
    border-radius: 50%;
    position: relative;
    align-self: flex-start;
    border: 1px solid ${({ $isCompleted }) => ($isCompleted ? "var(--color-red)" : "var(--color-black)")};
    background-color: ${({ $isCompleted }) => ($isCompleted ? "var(--color-red)" : "transparent")};

    ${({ $isCompleted }) => {
    if ($isCompleted) {
      return css`
          &::after {
            content: "";
            position: absolute;
            left: 5px;
            top: 2px;
            width: 2px;
            height: 7px;
            border: solid var(--color-white);
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }
        `;
    }
  }}
  }
`;

export const ScenarioLink = styled(Link) <ScenarioLinkProps>`
  ${ScenarioLinkBase}

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--color-red);
    outline-offset: 2px;
  }
`;

export const ScenarioFakeLink = styled.div<ScenarioLinkProps>`
  ${ScenarioLinkBase}
`;

export const ModalButtonOptions = styled.div`
  display: flex;
  gap: var(--space-xs);

  & > button:nth-of-type(1) {
    align-self: normal;
  }

  & button:nth-of-type(2) {
    background-color: var(--color-white);
    color: var(--color-black);
    border: 1px solid var(--color-black);

    &:hover {
      color: var(--color-white);
    }
  }
`
