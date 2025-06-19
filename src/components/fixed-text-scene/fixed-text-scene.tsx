import React from "react";

import * as Style from "./fixed-text-scene.styles";

interface IFixedTextSceneProps {
  content: {
    fixedText: React.ReactElement;
    content: React.ReactNode[];
  };
}
export function FixedTextScene({ content }: IFixedTextSceneProps) {
  return (
    <Style.Wrapper>
      <Style.StickyTextWrapper>
        <div>
          {content.fixedText}
        </div>
      </Style.StickyTextWrapper>
      <Style.ContentWrapper>
        {content.content.map((contentItem, index) => (
          <div key={`${index}_FixedTextSceneComp`}>
            <div>{contentItem}</div>
          </div>
        ))}
      </Style.ContentWrapper>
    </Style.Wrapper>
  );
}
