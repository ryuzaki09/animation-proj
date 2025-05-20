import styled from 'styled-components'

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  position: fixed;
  top: 0;
  left: 0;
  padding: var(--space-sm);
  width: 100%;
  z-index: 10;

`

export const LogoWrapper = styled.div`
  text-align: center;

  & > div {
    background-color: var(--color-white);
    width: fit-content;
    margin: auto;
    font-weight: 500;
  }
`
