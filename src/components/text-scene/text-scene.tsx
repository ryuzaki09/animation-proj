import React from "react";

import * as Style from "./text-scene.styles";

interface ITextSceneProps {
  content: {
    title?: React.ReactNode;
    description?: React.ReactNode;
  };
  columns?: 1 | 2;
  textAlign?: "left" | "center" | "right";
  titleBottom?: boolean
}

export function TextScene({ content, columns = 2, textAlign, titleBottom = false }: ITextSceneProps) {
  return (
    <Style.Wrapper>
      <Style.ContentWrapper $columns={columns} $textAlign={textAlign}>
        {content.title && !titleBottom && <Style.Title>{content.title}</Style.Title>}
        {content.description && <div>{content.description}</div>}
        {content.title && titleBottom && <Style.Title>{content.title}</Style.Title>}
      </Style.ContentWrapper>
    </Style.Wrapper>
  );
}
