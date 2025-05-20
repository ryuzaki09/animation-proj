import styled from 'styled-components'
import { SMALL_DESKTOP } from '~/config/breakpoints'

export const Wrapper = styled.div<{ $bgImg: string }>`
  width: 100%;
  height: 100vh;
  ${({ $bgImg }) => `background-image: url(${$bgImg})`};
  background-size: cover;
  background-repeat: no-repeat;

  display: grid;
  place-content: center;
`

export const ContentContainer = styled.div<{ $columns: number, $invertColors: boolean, $contain: boolean }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  align-items: center;
  font-size: var(--font-title-lg);
  font-weight: 500;
  width: 80vw;

  & > * {
    ${({ $invertColors }) => $invertColors
    ? `
        background-color: var(--color-white);
        color: var(--color-black);
      `
    : `
        background-color: var(--color-black);
        color: var(--color-white);
    `}
    width: ${({ $contain }) => $contain ? 'fit-content' : 'max-content'};
    height: fit-content;
    padding-inline: var(--space-xxs);
  }

  & > *:nth-of-type(2) {
    ${({ $columns }) => $columns === 2 && 'justify-self: flex-end;'}
  }

  ${SMALL_DESKTOP} {
    font-size: var(--font-title-md);
  }
`
