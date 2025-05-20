import styled from 'styled-components'
import { SMALL_DESKTOP } from '~/config/breakpoints'

export const Wrapper = styled.div<{ $bgImg: string }>`
  ${({ $bgImg }) => `background-image: url(${$bgImg});`}
  height: 100vh;
  color: var(--color-white);

  display: grid;
  place-content: center;

`

export const InnerWrapper = styled.div`
  margin: var(--space-md);

  & > div:nth-of-type(1) {
    font-size: var(--font-title-md);
    font-weight: 500;
  }

  & > p {
    font-size: var(--font-title);
  }

  ${SMALL_DESKTOP} {
    & > div:nth-of-type(1) {
      font-size: var(--font-title);
    }
    & > p {
      font-size: var(--font-normal);
    }
  }
`

export const OptionsWrapper = styled.div`
  display: flex;
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  & > div {
    flex: 1;
  }
`

export const OptionBlock = styled.div<{ $isSelected?: boolean }>`
  padding: var(--space-sm);
  background-color: ${({ $isSelected }) =>
    $isSelected ? 'var(--color-grey)' : 'var(--color-white)'};
  color: var(--color-black);

  display: flex;
  flex-direction: column;

  & > div:nth-of-type(1) {
    margin-bottom: var(--space-xs);
    font-weight: 500;
  }

  & > div {
    margin-bottom: var(--space-sm);
  }


  & button {
    background-color: var(--color-black);
    color: var(--color-white);
    padding: var(--space-xxs) var(--space-xs);
    margin-top: auto;
    border: none;
  }

  ${SMALL_DESKTOP} {
    padding: var(--space-xs);
  }
`

export const SubmitWrapper = styled.div`
  text-align: center;
  margin-top: var(--space-xs);

  & button {
    padding: var(--space-xxs) var(--space-xs);
    background-color: var(--color-white);
    color: var(--color-black);
    font-weight: 700;
  }
`
