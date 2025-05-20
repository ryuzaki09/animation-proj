import React from 'react'

import * as Style from './text-and-image.styles'

interface ITextAndImageProps {
  contents: React.ReactNode[]
  imgSrc: string;
  containImg?: boolean
  overflowText?: boolean
}
export function TextAndImage(
  { contents, imgSrc, containImg = false, overflowText = false }: ITextAndImageProps
) {
  const contentWrapperRef = React.useRef<HTMLDivElement>(null)
  const [showTopFade, setShowTopFade] = React.useState(false);
  const [showBottomFade, setShowBottomFade] = React.useState(true);

  const handleScroll = () => {
    const el = contentWrapperRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;

    setShowTopFade(scrollTop > 0);
    setShowBottomFade(scrollTop + clientHeight < scrollHeight);
  };

  React.useEffect(() => {
    const contentWrapper = contentWrapperRef.current

    if (!contentWrapper || !overflowText) return

    handleScroll(); // Initial check
    contentWrapper.addEventListener('scroll', handleScroll);

    return () => contentWrapper.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Style.Wrapper>
      <Style.ContentWrapper $overflow={overflowText}>
        {showTopFade && overflowText && <Style.FadeTop />}
        {contents.map((content, index) => (
          <div key={index} {...(index === 0 && { ref: contentWrapperRef })}>
            {content}
          </div>
        ))}
        {showBottomFade && overflowText && <Style.FadeBottom />}
      </Style.ContentWrapper>
      <Style.StickyImgWrapper $containImg={containImg}>
        <img src={imgSrc} alt="" />
      </Style.StickyImgWrapper>
    </Style.Wrapper>
  )
}
