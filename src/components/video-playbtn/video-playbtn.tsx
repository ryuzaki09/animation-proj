import styled from 'styled-components'

import PauseIcon from '../icons/pause'
import PlayIcon from '../icons/play'

interface IProps {
  isPlaying: boolean
  onPauseFn: () => void
  onPlayFn: () => void
}

export function VideoPlayBtn({ isPlaying, onPauseFn, onPlayFn }: IProps) {
  return isPlaying
    ? <StyledButton onClick={onPauseFn}><PauseIcon />Pause video</StyledButton>
    : <StyledButton onClick={onPlayFn}><PlayIcon />Play video</StyledButton>
}

export const StyledButton = styled.button`
  display: flex;
  gap: var(--space-xxs);
  padding: var(--space-xxs) var(--space-xs);
  font-size: var(--font-sm);
`
