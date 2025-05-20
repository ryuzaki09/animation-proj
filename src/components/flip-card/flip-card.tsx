import React from 'react'
import ChevronLeft from '../icons/chevron-left';
import ChevronRight from '../icons/chevron-right';
import RotateIcon from '../icons/rotate.tsx';

import * as Style from './flip-card.styles.ts'

interface IFlipCardProps {
  bgImg: string;
  cards: {
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
  }[],
  onCompleteFn?: () => void
  textAlignFront?: 'default' | 'center'
}
export function FlipCard({ bgImg, cards, onCompleteFn, textAlignFront = 'default' }: IFlipCardProps) {
  const [cardIndex, setCardIndex] = React.useState(0)
  const [cardsCompleted, setCardsCompleted] = React.useState<number[]>(Array(cards.length).fill(0))

  React.useEffect(() => {
    if (cardsCompleted.every((c) => c === 1)) {
      onCompleteFn && onCompleteFn()
    }
  }, [cardsCompleted])

  const handlePrevious = () => {
    setCardIndex((prevIndex) => {
      if (!prevIndex) return 0
      return prevIndex - 1
    })
  }

  const handleNext = () => {
    setCardIndex((prevIndex) => {
      if (prevIndex === cards.length - 1) {
        return prevIndex
      }
      return prevIndex + 1
    })
  }

  const flipCardCb = () => {
    if (!cardsCompleted[cardIndex]) {
      const newArray = [...cardsCompleted]
      newArray[cardIndex] = 1
      setCardsCompleted(newArray)
    }
  }

  return (
    <Style.Wrapper $bgImg={bgImg}>
      <Style.InnerWrapper>
        <div className="title">Let's see the impact when it's not done right</div>
        <p className="description">Flip the card to reveal more:</p>
        <Style.ContentWrapper>
          <Style.CardsWrapper>
            {cards.map((c, index) => (
              <Card
                key={index}
                data={c}
                selectedCard={cards[cardIndex]}
                onFlipCb={flipCardCb}
                textAlignFront={textAlignFront}
              />
            ))}
          </Style.CardsWrapper>
          <Style.Controls>
            <div>{cardIndex + 1} of {cards.length}</div>
            <button disabled={cardIndex === 0} onClick={handlePrevious}>
              <ChevronLeft />
            </button>
            <button disabled={cardIndex === cards.length - 1} onClick={handleNext}>
              <ChevronRight />
            </button>
          </Style.Controls>
        </Style.ContentWrapper>
      </Style.InnerWrapper>
    </Style.Wrapper>
  )
}

interface ICardProps {
  data: IFlipCardProps['cards'][number]
  selectedCard: IFlipCardProps['cards'][number]
  onFlipCb: () => void
  textAlignFront: 'default' | 'center'
}

function Card({ data, selectedCard, onFlipCb, textAlignFront }: ICardProps) {
  const [isRotated, setIsRotated] = React.useState(false)

  const handleFlip = () => {
    setIsRotated((prevState) => !prevState)
    onFlipCb()
  }

  return (
    <Style.Card
      $isRotated={isRotated}
      data-animation={selectedCard === data ? 'in' : 'out'}
    >
      <Style.CardFront $textAlign={textAlignFront}>
        {data.frontContent}
        <button onClick={handleFlip}>
          <RotateIcon />
        </button>
      </Style.CardFront>
      <Style.CardBack>
        {data.backContent}
        <button onClick={() => setIsRotated((prevState) => !prevState)}>
          <RotateIcon />
        </button>
      </Style.CardBack>
    </Style.Card>
  )
}
