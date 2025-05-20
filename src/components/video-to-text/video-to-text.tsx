import React from 'react'

import { VideoPlayBtn } from '../video-playbtn/video-playbtn.tsx'

import * as Style from './video-to-text.styles.ts'

interface IProps {
  videoSrc: string
  content1: React.ReactNode[]
  content2: React.ReactNode[]
}

export function VideoToText(props: IProps) {
  const [videoIsPlaying, setVideoIsPlaying] = React.useState(true)
  const [isActive, setIsActive] = React.useState(false)
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    const contentWrapper = contentRef.current
    if (!contentWrapper) return

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries

      if (entry.isIntersecting) {
        setIsActive(true)
      }
    }, {
      threshold: 0.01
    })

    observer.observe(contentWrapper)

    return () => {
      observer.unobserve(contentWrapper)
    }
  }, [])

  React.useEffect(() => {
    const contentWrapper = contentRef.current
    if (!contentWrapper) return

    const contentHeight = (window.innerWidth * (props.content1.length + 1)) + (window.innerHeight * props.content2.length)
    contentWrapper.style.setProperty(
      'height', `${contentHeight}px`
    )
  }, [])

  React.useEffect(() => {
    const contentWrapper = contentRef.current
    const wrapper = wrapperRef.current

    let nextFrame: number
    let yDistance = 0

    function animateVideo() {
      if (!contentWrapper || !wrapper || !isActive) return
      nextFrame = requestAnimationFrame(animateVideo)

      const contentRect = contentWrapper.getBoundingClientRect()
      const contentTopPosition = contentRect.top * -1
      const contentHeight = contentRect.height
      const contentBottomPosition = contentRect.bottom

      if (contentTopPosition > -1) {
        yDistance = contentTopPosition
      }


      if (contentBottomPosition <= window.innerHeight) {
        yDistance = contentHeight - window.innerHeight
      }

      wrapper.style.setProperty('--y-distance', `${yDistance}px`)
    }

    animateVideo()

    return () => {
      cancelAnimationFrame(nextFrame)
    }
  }, [isActive])

  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return

    function videoEnd() {
      setVideoIsPlaying(false)
    }
    video.addEventListener('ended', videoEnd)

    return () => {
      video.removeEventListener('ended', videoEnd)
    }
  }, [])

  const pauseVideo = () => {
    videoRef.current?.pause()
    setVideoIsPlaying(false)
  }

  const playVideo = () => {
    videoRef.current?.play()
    setVideoIsPlaying(true)
  }

  return (
    <Style.Wrapper ref={wrapperRef}>
      <Style.VideoWrapper>
        <Style.VideoInnerWrapper>
          <video src={props.videoSrc} autoPlay muted ref={videoRef} />
          {props.content1.map((c, index) => (
            <Style.VideoContentBlock key={index} $index={index}>
              <div>
                <div className="headingTitle">Let's reflect...</div>
                <div>{c}</div>
              </div>
            </Style.VideoContentBlock>
          ))}
        </Style.VideoInnerWrapper>
        <Style.PlayControls>
          <VideoPlayBtn
            isPlaying={videoIsPlaying}
            onPauseFn={pauseVideo}
            onPlayFn={playVideo}
          />
        </Style.PlayControls>
      </Style.VideoWrapper>
      <Style.ContentWrapper ref={contentRef}>
        <Style.ContentInnerWrapper>
          {props.content2.map((c, index) => (
            <Style.ContentBlock key={index}>
              {c}
            </Style.ContentBlock>
          ))}
        </Style.ContentInnerWrapper>
      </Style.ContentWrapper>
    </Style.Wrapper>
  )
}
