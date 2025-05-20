import React from 'react'

import * as Style from './text-scene.styles'

interface ITextSceneProps {
  title: React.ReactNode;
  description: React.ReactNode;
  columns?: 1 | 2
  customRender?: () => React.ReactNode;
}

export function TextScene({ title, description, columns = 2, customRender }: ITextSceneProps) {
  return (
    <Style.Wrapper>
      <Style.ContentWrapper $columns={columns}>
        {customRender ? customRender() : (
          <>
            <div>{title}</div>
            <div>{description}</div>
          </>
        )}
      </Style.ContentWrapper>
    </Style.Wrapper>
  )
}
