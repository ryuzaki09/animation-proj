import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  place-content: center;

  height: 100vh;
`

export const ContentWrapper = styled.div<{ $columns: 1 | 2 }>`
  display: grid;
  ${({ $columns }) => `grid-template-columns: repeat(${$columns}, 1fr);`}
  place-content: center;
  column-gap: var(--space-md);
  row-gap: var(--space-sm);

  ${({ $columns }) =>
    $columns === 1 ? 'width: 75%; margin: 0 auto;' : 'margin-inline: var(--space-md);'}

  & > div:nth-of-type(1) {
    font-size: 38px;
    font-weight: 500;
  }
`

export const RightContent = styled.div`
  display: grid;
  place-content: center;
  margin-inline: var(--space-md);
`
