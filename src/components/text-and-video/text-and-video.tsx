import React from "react";
import { VideoPlayBtn } from "../video-playbtn/video-playbtn.tsx";

import * as Style from "./text-and-video.styles.ts";

interface IProps {
  videoSrc: string;
  content1: React.ReactNode[];
  content2?: React.ReactNode[];
}

export function TextAndVideo(props: IProps) {
  const { videoSrc, content1, content2 } = props;
  const [enableScroll, setEnableScroll] = React.useState(false);
  const [videoIsPlaying, setVideoIsPlaying] = React.useState(true);

  const videoRef = React.useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const componentWrapperRef = React.useRef<HTMLDivElement>(null);
  const emptyDivRef = React.useRef<HTMLDivElement>(null)
  const halfWindowWidth = window.innerWidth / 2;
  const numberOfContents = content1.length
  const content2SlideLimit = content2 && content2.map((_, index) =>
    ((index + 2) * window.innerWidth) + halfWindowWidth
  )
  // console.log('limits: ', content2SlideLimit)

  React.useEffect(() => {
    const componentWrapper = componentWrapperRef.current;
    if (!componentWrapper) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setEnableScroll(true);
        }
      },
      {
        threshold: 0.01,
      },
    );

    observer.observe(componentWrapper);

    return () => {
      observer.unobserve(componentWrapper);
    };
  }, []);

  React.useEffect(() => {
    const videoWrapper = videoRef.current;
    const contentWrapper = wrapperRef.current;
    const componentWrapper = componentWrapperRef.current;
    const emptyDiv = emptyDivRef.current
    if (!videoWrapper || !contentWrapper || !componentWrapper || !emptyDiv) return;

    const componentRect = componentWrapper.getBoundingClientRect();
    let nextFrame: number;

    let videoOffsetLimit = 0;

    function getFrame() {
      if (enableScroll) {
        nextFrame = requestAnimationFrame(getFrame);
        const contentRect = contentWrapper?.getBoundingClientRect();
        const emptyDivRect = emptyDiv?.getBoundingClientRect();
        const video = videoWrapper?.querySelector("video");
        const videoWidth = video?.getBoundingClientRect();

        if (contentRect && videoWidth && componentRect && emptyDivRect) {
          const contentTopPosition = contentRect.top;
          const windowHalfWidth = componentRect?.width / 2;
          const videoHalfWidth = videoWidth.width / 2;
          const leftSideToStopPX = videoHalfWidth > windowHalfWidth ? windowHalfWidth : videoHalfWidth;

          const emptyDivTopPosition = emptyDivRect.top;
          if (emptyDivTopPosition <= 0) {
            videoOffsetLimit = emptyDivRect.top;
          }
          if (videoOffsetLimit <= 0 - leftSideToStopPX) {
            videoOffsetLimit = 0 - leftSideToStopPX;
          }

          const topDistance = contentTopPosition * -1;
          const item1Limit = content2SlideLimit && topDistance >= content2SlideLimit[0]
            ? content2SlideLimit[0]
            : topDistance
          const item2Limit = content2SlideLimit && topDistance >= content2SlideLimit[1]
            ? content2SlideLimit[1]
            : topDistance
          const item3Limit = content2SlideLimit && topDistance >= content2SlideLimit[2]
            ? content2SlideLimit[2]
            : topDistance


          componentWrapper?.style.setProperty("--distance", `${topDistance}px`);
          componentWrapper?.style.setProperty("--x-offset-limit", `${videoOffsetLimit}px`);
          componentWrapper?.style.setProperty("--item-1-limit", `${item1Limit}px`);
          componentWrapper?.style.setProperty("--item-2-limit", `${item2Limit}px`);
          componentWrapper?.style.setProperty("--item-3-limit", `${item3Limit}px`);
        }
      }
    }

    nextFrame = requestAnimationFrame(getFrame);

    return () => {
      cancelAnimationFrame(nextFrame);
    };
  }, [enableScroll]);

  React.useEffect(() => {
    const videoWrapper = videoRef.current;
    if (!videoWrapper) return;

    const video = videoWrapper.querySelector("video") as HTMLVideoElement;

    function videoEnd() {
      setVideoIsPlaying(false);
    }
    video.addEventListener("ended", videoEnd);

    return () => {
      video.removeEventListener("ended", videoEnd);
    };
  }, []);

  const pauseVideo = () => {
    const video = videoRef.current?.querySelector("video") as HTMLVideoElement;
    video.pause();
    setVideoIsPlaying(false);
  };

  const playVideo = () => {
    const video = videoRef.current?.querySelector("video") as HTMLVideoElement;
    video.play();
    setVideoIsPlaying(true);
  };

  return (
    <Style.Wrapper ref={componentWrapperRef}>
      <Style.ContentWrapper ref={wrapperRef}>
        <Style.ContentInnerWrapper>
          {content1.map((c, index) => (
            <div key={index}>{c}</div>
          ))}
          <Style.EmptyDiv ref={emptyDivRef} style={{ height: `calc(${(content2?.length || 1) * window.innerWidth}px + ${window.innerWidth}px)` }} />
        </Style.ContentInnerWrapper>
        <Style.VideoWrapper ref={videoRef}>
          <Style.VideoInnerWrapper>
            <video src={videoSrc} muted autoPlay loop />
            {content2 &&
              content2.map((c, index) => {
                // const limit = ((index + 2) * window.innerWidth) + halfWindowWidth
                // console.log('limit: ', limit)
                const widthSize = index + 2
                const transform = `translateX(calc(100 * ${widthSize}vw + 50vw - var(--item-${index + 1}-limit)))`
                return (
                  <Style.ExtraContentWrapper key={index} style={{ transform }}>
                    <div className="videoOverlayContent">
                      {c}
                    </div>
                  </Style.ExtraContentWrapper>
                )
              })}
          </Style.VideoInnerWrapper>
          <Style.PlayControls>
            <VideoPlayBtn isPlaying={videoIsPlaying} onPauseFn={pauseVideo} onPlayFn={playVideo} />
          </Style.PlayControls>
        </Style.VideoWrapper>
      </Style.ContentWrapper>
    </Style.Wrapper>
  );
}
