import styled from 'styled-components'
import { SMALL_DESKTOP } from '~/config/breakpoints';

export const Wrapper = styled.main`
  --color-white: #fff;
  --color-black: #000;
  --color-grey: #cacaca;
  --color-red: #DA0011;

  --space-xxs: 0.5rem;
  --space-xs: 1rem;
  --space-sm: 2rem;
  --space-md: 3.5rem;
  --space-lg: 5rem;
  --space-x-lg: 6rem;
  --font-sm: 18px;
  --font-normal: 24px;
  --font-title: 38px;
  --font-title-md: 50px;
  --font-title-lg: 70px;

  font-family: 'HSBC_MtUnivers_Latin';
  font-weight: 300;

  p {
    margin-bottom: revert;
  }

  p:last-child {
    margin-bottom: 0;
  }

  & p:last-of-type {
    margin-bottom: 0;
  }

  line-height: 1.3;

  strong {
    font-weight: 600;
  }

  & .headingTitle {
    font-size: var(--font-title-md);
    font-weight: 500;
    margin-bottom: var(--space-xs);
  }

  & p.bot-1 {
    margin-bottom: var(--space-xs);
  }

  ul {
    margin-left: 1.5rem;

    & li {
      margin-bottom: var(--space-xs);
    }
  }

  scroll-snap-type: y mandatory;
  & > section {
    scroll-snap-align: center;
  }

  ${SMALL_DESKTOP} {
    & .headingTitle {
      font-size: var(--font-title);
    }
  }
`

export const StyledSection = styled.section`
  width: 100vw;
  // height: 100vh;
`

export const DownArrowWrapper = styled.button`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 5;

  margin: var(--space-sm);
  padding: 0.2rem 0.4rem 0.1rem;
  background-color: var(--color-white);
`
