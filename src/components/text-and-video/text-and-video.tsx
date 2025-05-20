import React from 'react'
import { VideoPlayBtn } from '../video-playbtn/video-playbtn.tsx';

import * as Style from './text-and-video.styles.ts'

interface IProps {
  videoSrc: string;
  content1: React.ReactNode[]
  content2?: React.ReactNode[]
  uniqueId: string
}

export function TextAndVideo(props: IProps) {
  const { videoSrc, content1, content2 } = props
  const [enableScroll, setEnableScroll] = React.useState(false)
  const [videoIsPlaying, setVideoIsPlaying] = React.useState(true)
  const videoRef = React.useRef<HTMLDivElement>(null)
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const componentWrapperRef = React.useRef<HTMLDivElement>(null)
  const emptyDivId = props.uniqueId

  React.useEffect(() => {
    const componentWrapper = componentWrapperRef.current
    if (!componentWrapper) return

    // console.log('wrapper: ', componentWrapper)
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries

      if (entry.isIntersecting) {
        setEnableScroll(true)
      }
    }, {
      threshold: 0.01
    })

    observer.observe(componentWrapper)

    return () => {
      observer.unobserve(componentWrapper)
    }
  }, [])

  React.useEffect(() => {
    const componentWrapper = componentWrapperRef.current
    if (!componentWrapper) return

    const emptyDiv = componentWrapper.querySelector(`#${emptyDivId}`) as HTMLElement
    emptyDiv.style.setProperty('height', `calc(${(content2?.length || 1) * window.innerWidth}px + ${window.innerWidth}px)`)

  }, [])

  React.useEffect(() => {
    const videoWrapper = videoRef.current
    const contentWrapper = wrapperRef.current
    const componentWrapper = componentWrapperRef.current
    if (!videoWrapper || !contentWrapper || !componentWrapper) return

    const emptyDiv = componentWrapper.querySelector(`#${emptyDivId}`) as HTMLElement
    const componentRect = componentWrapper.getBoundingClientRect()
    // console.log('video Width: ', videoWidth)
    let nextFrame: number

    let videoOffsetLimit = 0

    function getFrame() {
      if (enableScroll) {
        nextFrame = requestAnimationFrame(getFrame)
        const contentRect = contentWrapper?.getBoundingClientRect()
        const emptyDivRect = emptyDiv.getBoundingClientRect()
        const video = videoWrapper?.querySelector('video')
        const videoWidth = video?.getBoundingClientRect()
        // console.log('contentRect: ', contentRect)

        if (contentRect && videoWidth && componentRect && emptyDivRect) {
          const contentTopPosition = contentRect.top
          const windowHalfWidth = componentRect?.width / 2
          // console.log('videoRect:', videoWidth)
          // console.log('window Half: ', windowHalfWidth)
          const videoHalfWidth = videoWidth.width / 2
          const leftSideToStopPX = videoHalfWidth > windowHalfWidth
            ? windowHalfWidth
            : videoHalfWidth

          const emptyDivTopPosition = emptyDivRect.top
          if (emptyDivTopPosition <= 0) {
            videoOffsetLimit = emptyDivRect.top
          }
          if (videoOffsetLimit <= (0 - leftSideToStopPX)) {
            videoOffsetLimit = (0 - leftSideToStopPX)
          }

          const topDistance = contentTopPosition * -1

          componentWrapper?.style.setProperty('--distance', `${topDistance}px`);
          componentWrapper?.style.setProperty('--x-offset-limit', `${videoOffsetLimit}px`);
        }
      }
    }

    nextFrame = requestAnimationFrame(getFrame)

    return () => {
      cancelAnimationFrame(nextFrame)
    }
  }, [enableScroll])

  React.useEffect(() => {
    const videoWrapper = videoRef.current
    if (!videoWrapper) return

    const video = videoWrapper.querySelector('video') as HTMLVideoElement

    function videoEnd() {
      setVideoIsPlaying(false)
    }
    video.addEventListener('ended', videoEnd)

    return () => {
      video.removeEventListener('ended', videoEnd)
    }
  }, [])

  const pauseVideo = () => {
    const video = videoRef.current?.querySelector('video') as HTMLVideoElement
    video.pause()
    setVideoIsPlaying(false)
  }

  const playVideo = () => {
    const video = videoRef.current?.querySelector('video') as HTMLVideoElement
    video.play()
    setVideoIsPlaying(true)
  }

  return (
    <Style.Wrapper ref={componentWrapperRef}>
      <Style.ContentWrapper ref={wrapperRef}>
        <Style.ContentInnerWrapper>
          {content1.map((c, index) => (
            <div key={index}>
              {c}
            </div>
          ))}
          <Style.EmptyDiv id={emptyDivId} />
        </Style.ContentInnerWrapper>
        <Style.VideoWrapper ref={videoRef}>
          <Style.VideoInnerWrapper>
            <video src={videoSrc} muted autoPlay />
            {content2 && content2.map((c, index) => (
              <Style.ExtraContentWrapper key={index} $index={index}>
                <div>
                  <div className="headingTitle">Let's reflect...</div>
                  <div>{c}</div>
                </div>
              </Style.ExtraContentWrapper>
            ))}
          </Style.VideoInnerWrapper>
          <Style.PlayControls>
            <VideoPlayBtn isPlaying={videoIsPlaying} onPauseFn={pauseVideo} onPlayFn={playVideo} />
          </Style.PlayControls>
        </Style.VideoWrapper>
      </Style.ContentWrapper>
    </Style.Wrapper>
  )
}
