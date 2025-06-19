import React from "react";

import * as Style from "./video-scene.styles";
import { VideoPlayBtn } from "../video-playbtn/video-playbtn";

interface IVideoSceneProps {
  content: React.ReactNode[];
  video: string;
  containImg?: boolean;
  overflowText?: boolean;
  goPreviousSectionText?: string;
}
export function VideoScene({
  content,
  video,
  containImg = false,
  overflowText = false,
  goPreviousSectionText,
}: IVideoSceneProps) {
  const contentWrapperRef = React.useRef<HTMLDivElement>(null);
  const [showTopFade, setShowTopFade] = React.useState(false);
  const [showBottomFade, setShowBottomFade] = React.useState(true);
  const [videoIsPlaying, setVideoIsPlaying] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

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

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function videoEnd() {
      setVideoIsPlaying(false);
    }
    video.addEventListener("ended", videoEnd);

    return () => {
      video.removeEventListener("ended", videoEnd);
    };
  }, []);

  const pauseVideo = () => {
    videoRef.current?.pause();
    setVideoIsPlaying(false);
  };

  const playVideo = () => {
    videoRef.current?.play();
    setVideoIsPlaying(true);
  };

  return (
    <Style.Wrapper>
      <Style.ContentWrapper $overflow={overflowText}>
        {showTopFade && overflowText && <Style.FadeTop />}
        {content.map((content, index) => (
          <div key={index} {...(index === 0 && { ref: contentWrapperRef })}>
            {content}
            {goPreviousSectionText && <Style.GoBackBtn>{goPreviousSectionText}</Style.GoBackBtn>}
          </div>
        ))}
        {showBottomFade && overflowText && <Style.FadeBottom />}
        <Style.PlayControls>
          <VideoPlayBtn isPlaying={videoIsPlaying} onPauseFn={pauseVideo} onPlayFn={playVideo} />
        </Style.PlayControls>
      </Style.ContentWrapper>
      <Style.StickyImgWrapper $containImg={containImg}>
        <video ref={videoRef} src={video} loop muted playsInline autoPlay />
      </Style.StickyImgWrapper>
    </Style.Wrapper>
  );
}
