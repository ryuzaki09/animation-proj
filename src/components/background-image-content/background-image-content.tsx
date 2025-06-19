import React from "react";

import * as Style from "./background-image-content.styles";

interface IProps {
  bgImg: string;
  content: React.ReactNode;
  columns?: 1 | 2;
  invertTxtColors?: boolean;
  overrideWithGrey?: boolean;
  textPosition?: "left" | "center" | "right";
  textAlign?: "left" | "center" | "right";
  pushDown?: number;
  normalFontSize?: boolean;
}

export function BackgroundImageContent({
  bgImg,
  content,
  columns = 1,
  overrideWithGrey = false,
  invertTxtColors = false,
  textPosition,
  textAlign = "center",
  pushDown,
  normalFontSize = false
}: IProps) {
  return (
    <Style.Wrapper $bgImg={bgImg}>
      <Style.ContentContainer
        $columns={columns}
        $overrideWithGrey={overrideWithGrey}
        $invertColors={invertTxtColors}
        $textPosition={textPosition}
        $textAlign={textAlign}
        $pushDown={pushDown}
        $normalFontSize={normalFontSize}
      >
        {content}
      </Style.ContentContainer>
    </Style.Wrapper>
  );
}
