import React from 'react'
import { VideoPlayBtn } from '../video-playbtn/video-playbtn'

import * as Style from './video-background.styles'

interface IVideoBackgroundProps {
  videoSrc: string;
  content: React.ReactNode;
}

export function VideoBackground({ videoSrc, content }: IVideoBackgroundProps) {
  const [videoIsPlaying, setVideoIsPlaying] = React.useState(true)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return

    function videoEnded() {
      setVideoIsPlaying(false)
    }

    video.addEventListener('ended', videoEnded)

    return () => {
      video.removeEventListener('onend', videoEnded)
    }
  }, [])

  const handlePause = () => {
    videoRef.current?.pause()
    setVideoIsPlaying(false)
  }

  const handlePlay = () => {
    videoRef.current?.play()
    setVideoIsPlaying(true)
  }

  return (
    <Style.Wrapper>
      <Style.VideoWrapper>
        <video ref={videoRef} src={videoSrc} autoPlay muted />
        <Style.Content>
          <div>
            {content}
          </div>
        </Style.Content>
        <Style.Controls>
          <VideoPlayBtn isPlaying={videoIsPlaying} onPauseFn={handlePause} onPlayFn={handlePlay} />
        </Style.Controls>
      </Style.VideoWrapper>
    </Style.Wrapper>
  )
}
