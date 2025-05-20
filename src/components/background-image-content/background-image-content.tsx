import React from 'react'

import * as Style from './background-image-content.styles'

interface IProps {
  bgImg: string;
  content: React.ReactNode;
  columns?: 1 | 2;
  invertTxtColors?: boolean
  contain?: boolean
}

export function BackgroundImageContent({ bgImg, content, columns = 1, invertTxtColors = false, contain = false }: IProps) {
  return (
    <Style.Wrapper $bgImg={bgImg}>
      <Style.ContentContainer $columns={columns} $invertColors={invertTxtColors} $contain={contain}>
        {content}
      </Style.ContentContainer>
    </Style.Wrapper>
  )
}
