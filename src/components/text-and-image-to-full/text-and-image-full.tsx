import React from 'react'

import * as Style from './text-and-image-full.styles.ts'

interface IProps {
  content: React.ReactNode;
  imgSrc: string;
  containImg?: boolean;
  contentTwo: React.ReactNode;
}

export function TextAndImageToFullImage({ content, contentTwo, imgSrc, containImg = false }: IProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const imageWrapperRef = React.useRef<HTMLDivElement>(null)

  const numberOfContent = 2
  const numberOfEmtpyDivs = 2

  const halfWindowWidth = window.innerWidth / 2
  const firstContentAndEmptyDivHeight = window.innerHeight + halfWindowWidth

  React.useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const height = numberOfContent === 2
      ? firstContentAndEmptyDivHeight + window.innerHeight * numberOfEmtpyDivs
      : firstContentAndEmptyDivHeight
    wrapper.style.setProperty(
      'height', `${height}px`
    )
  }, [])

  React.useEffect(() => {
    const contentWrapper = contentRef.current
    const wrapper = wrapperRef.current
    const imgWrapper = imageWrapperRef.current

    let nextFrame: number
    let xDistance = 0
    let yDistance = 0;

    function getFrame() {
      if (!wrapper || !contentWrapper || !imgWrapper) return
      nextFrame = requestAnimationFrame(getFrame)

      const imgRect = imgWrapper.getBoundingClientRect()
      const contentRect = contentWrapper.getBoundingClientRect()
      const wrapperRect = wrapper.getBoundingClientRect()
      // re-adjust top height to content bottom so transition happens when content bottom starts to disappear
      const firstContentTop = contentRect.top + window.innerHeight
      const firstContentBottom = contentRect.bottom + window.innerHeight; // re-adjust bottom to an extra height length to cater the adjustment

      yDistance = contentRect.top

      if (firstContentTop <= 0) {
        yDistance = firstContentTop
        xDistance = firstContentTop
      }

      // if (bottomPosition <= window.innerHeight) {
      if (firstContentBottom <= 0) {
        xDistance = 0 - halfWindowWidth
      }

      if (firstContentBottom <= window.innerHeight) {
        xDistance = 0 - (contentRect.height - window.innerHeight)
        // yDistance = wrapperRect.height - window.innerHeight
      }
      // console.log('xDistance: ', xDistance)

      wrapper.style.setProperty('--yDistance', `${yDistance}px`)
      wrapper.style.setProperty('--xDistance', `${xDistance}px`)
    }

    getFrame()

    return () => {
      cancelAnimationFrame(nextFrame)
    }
  }, [])

  return (
    <Style.Wrapper ref={wrapperRef}>
      <Style.ContentWrapper>
        <Style.ContentOneWrapper>
          <div ref={contentRef}>
            <div>
              {content}
            </div>
            <div style={{ height: `${halfWindowWidth}px`, width: '100%' }} />
          </div>
          <div style={{ height: `100dvh` }} />
          <div style={{ height: `100dvh` }} />
        </Style.ContentOneWrapper>
        <Style.ContentTwoWrapper>
          <Style.StickyImgWrapper ref={imageWrapperRef} $containImg={containImg}>
            <img src={imgSrc} alt="" />
          </Style.StickyImgWrapper>
          <Style.ContentTwoInnerWrapper>
            {contentTwo}
          </Style.ContentTwoInnerWrapper>
        </Style.ContentTwoWrapper>
      </Style.ContentWrapper>
    </Style.Wrapper>
  )
}
