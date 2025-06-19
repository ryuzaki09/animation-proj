import React from "react";
import { useLocation } from "react-router-dom";
import { VideoPlayBtn } from "../video-playbtn/video-playbtn";

import * as Style from "./video-background.styles";

interface IVideoBackgroundProps {
  videoSrc: string;
  content?: React.ReactNode;
  loop?: boolean;
  autoPlay?: boolean
  muted?: boolean
  isTextBoxTransparent?: boolean;
  showDefaultControls?: boolean;
  videoEndCb?: () => void;
  containVideo?: boolean;
  canSkip?: boolean;
}

export function VideoBackground(
  {
    videoSrc,
    content,
    loop,
    autoPlay = true,
    muted = true,
    isTextBoxTransparent,
    showDefaultControls = false,
    canSkip = true,
    videoEndCb,
    containVideo = false
  }: IVideoBackgroundProps
) {
  const [videoIsPlaying, setVideoIsPlaying] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const { search } = useLocation()

  // add listeners
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let videoTime = 0;
    function videoEnded() {
      setVideoIsPlaying(false);
      videoTime = 0;
      videoEndCb && videoEndCb()
    }

    function seeking() {
      if (!video) return
      if (canSkip) return
      if (search === '?dev') return

      const delta = video.currentTime - videoTime
      // if (video.currentTime || 0 > videoTime) {
      if (Math.abs(delta) > 0.01) {
        video.currentTime = videoTime
      }
    }

    function timeUpdate() {
      if (!video) return

      if (!video.seeking) {
        videoTime = video?.currentTime || 0
      }
    }

    video.addEventListener("ended", videoEnded);
    video.addEventListener("timeupdate", timeUpdate);
    video.addEventListener("seeking", seeking);

    return () => {
      video.removeEventListener("ended", videoEnded);
      video.removeEventListener("seeking", seeking);
      video.removeEventListener("timeupdate", timeUpdate);
    };
  }, [canSkip]);

  // set autoPlay
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (autoPlay && video.paused) {
      video.play()
    }
  }, [autoPlay])

  // intersection for autoPlay and disable Play
  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries

      if (entry.isIntersecting) {
        if (autoPlay && video.paused) {
          video.play()
          setVideoIsPlaying(true);
        }
      } else {
        video.pause()
        setVideoIsPlaying(false);

      }
    }, {
      threshold: 0.3
    })

    observer.observe(video)

    return () => {
      observer.unobserve(video)
    }
  }, [])

  const handlePause = () => {
    videoRef.current?.pause();
    setVideoIsPlaying(false);
  };

  const handlePlay = () => {
    videoRef.current?.play();
    setVideoIsPlaying(true);
  };

  return (
    <Style.Wrapper $contain={containVideo}>
      <Style.VideoWrapper>
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={showDefaultControls}
          controlsList="nodownload"
        />
        {content && (
          <Style.Content $isTextBoxTransparent={isTextBoxTransparent}>
            <div>{content}</div>
          </Style.Content>
        )}
        {showDefaultControls ? null : (
          <Style.Controls>
            <VideoPlayBtn isPlaying={videoIsPlaying} onPauseFn={handlePause} onPlayFn={handlePlay} />
          </Style.Controls>
        )}
      </Style.VideoWrapper>
    </Style.Wrapper>
  );
}
