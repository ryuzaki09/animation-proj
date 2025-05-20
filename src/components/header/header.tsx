import React from 'react'

import * as Style from './header.styles'

interface IHeaderProps {
  title?: string
}

export function Header({ title }: IHeaderProps) {
  return (
    <Style.Wrapper>
      <img src={'./logo.png'} alt="HSBC Logo" />
      <Style.LogoWrapper>
        <div>{title}</div>
      </Style.LogoWrapper>
      <div />
    </Style.Wrapper>
  )
}
