import styled from "styled-components";

export const Wrapper = styled.main`
  scroll-snap-type: y mandatory;
  & > section {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
`;

export const StyledSection = styled.section`
  width: 100%;
`;

export const DownArrowWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 5;

  margin: var(--space-sm);
  padding: 0.2rem 0.4rem 0.1rem;
  background-color: var(--color-white);
`;
