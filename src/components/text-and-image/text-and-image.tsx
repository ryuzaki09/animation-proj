import React from "react";

import * as Style from "./text-and-image.styles";

interface ITextAndImageProps {
  content?: React.ReactNode[];
  contentWithDownload?: (onDownload: () => void, hasDownloaded: boolean) => React.ReactNode[];
  imgSrc: string;
  containImg?: boolean;
  overflowText?: boolean;
  button?: {
    text: string;
    click: () => void;
  };
  buttonRevertColors?: boolean;
}
export function TextAndImage({
  content,
  contentWithDownload,
  imgSrc,
  containImg = false,
  overflowText = false,
  button,
  buttonRevertColors,
}: ITextAndImageProps) {
  const contentWrapperRef = React.useRef<HTMLDivElement>(null);
  const [showTopFade, setShowTopFade] = React.useState(false);
  const [showBottomFade, setShowBottomFade] = React.useState(true);
  const [hasDownloaded, setHasDownloaded] = React.useState(false);

  const handleScroll = () => {
    const el = contentWrapperRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;

    setShowTopFade(scrollTop > 0);
    setShowBottomFade(scrollTop + clientHeight < scrollHeight);
  };

  React.useEffect(() => {
    const contentWrapper = contentWrapperRef.current;

    if (!contentWrapper || !overflowText) return;

    handleScroll(); // Initial check
    contentWrapper.addEventListener("scroll", handleScroll);

    return () => contentWrapper.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    setHasDownloaded(true);
  };

  const renderedContent = contentWithDownload ? contentWithDownload(handleDownload, hasDownloaded) : (content ?? []);

  return (
    <Style.Wrapper>
      <Style.ContentWrapper $overflow={overflowText} $buttonRevertColors={buttonRevertColors}>
        {renderedContent.map((content, index) => (
          <div key={index} {...(index === 0 && { ref: contentWrapperRef })}>
            {content}
            {button && <button onClick={() => button.click()}>{button.text}</button>}
          </div>
        ))}
      </Style.ContentWrapper>
      <Style.StickyImgWrapper $containImg={containImg}>
        <img src={imgSrc} alt="" />
      </Style.StickyImgWrapper>
    </Style.Wrapper>
  );
}
