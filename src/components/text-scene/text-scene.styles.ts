import styled from "styled-components";
import { MIN_DESKTOP, MIN_LAPTOP, MIN_LARGE_DESKTOP } from "~/config/breakpoints";

export const Wrapper = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;

  height: 100vh;
`;

type ContentWrapperProps = {
  $columns: 1 | 2;
  $textAlign?: "left" | "center" | "right";
};

export const ContentWrapper = styled.div<ContentWrapperProps>`
  width: ${({ $columns }) => ($columns === 1 ? "730px" : "1150px")};
  display: grid;
  ${({ $columns }) => `grid-template-columns: repeat(${$columns}, 1fr);`}
  justify-content: center;
  column-gap: var(--space-md);
  row-gap: var(--space-sm);
  text-align: ${({ $textAlign }) => $textAlign && $textAlign};

  ${MIN_LAPTOP} {
    width: ${({ $columns }) => ($columns === 1 ? "730px" : "1150px")};
  }

  ${MIN_DESKTOP} {
    width: ${({ $columns }) => ($columns === 1 ? "850px" : "1350px")};
  }

  ${MIN_LARGE_DESKTOP} {
    width: ${({ $columns }) => ($columns === 1 ? "1020px" : "1650px")};
  }
`;

export const Title = styled.div`
  width: 100%;
`;

export const RightContent = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
  margin-inline: var(--space-md);
`;
