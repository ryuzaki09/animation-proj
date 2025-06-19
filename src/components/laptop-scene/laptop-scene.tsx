import React from 'react'

import { assets } from '~/config/module-1/assets'

import * as Style from './laptop-scene.styles'

interface IProps {
  content: React.ReactNode
  onClickCb: () => void,
  hasRevealed: boolean
}

export function LaptopScene({ content, onClickCb, hasRevealed }: IProps) {
  const [isRevealed, setIsRevealed] = React.useState(hasRevealed)

  const handleOnClick = () => {
    setIsRevealed(true)
    onClickCb()
  }

  return (
    <Style.Wrapper>
      <Style.LaptopWrapper $isRevealed={isRevealed}>
        <img src={assets.laptopImg} alt="" />
        <Style.LaptopContent $isRevealed={isRevealed}>
          <div style={{ width: '70%', textAlign: 'center' }}>
            <p className="headingTitle">How do banks decide interest rates?</p>
            <button onClick={handleOnClick}>Reveal more</button>
          </div>
          <Style.RevealedContent $isRevealed={isRevealed}>
            {content}
          </Style.RevealedContent>
        </Style.LaptopContent>
      </Style.LaptopWrapper>
    </Style.Wrapper>
  )
}
