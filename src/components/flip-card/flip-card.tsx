import React from "react";
import ChevronLeft from "../icons/chevron-left";
import ChevronRight from "../icons/chevron-right";
import RotateIcon from "../icons/rotate.tsx";

import * as Style from "./flip-card.styles.ts";
import { FlipCardsT } from "~/types.ts";

interface IFlipCardProps {
  bgImg: string;
  content: FlipCardsT;
  onCompleteFn?: () => void;
  textAlignFront?: "default" | "center";
}
export function FlipCard({ bgImg, content, onCompleteFn, textAlignFront = "default" }: IFlipCardProps) {
  const [cardIndex, setCardIndex] = React.useState(0);
  const [cardsCompleted, setCardsCompleted] = React.useState<number[]>(Array(content.cards.length).fill(0));

  React.useEffect(() => {
    if (cardsCompleted.every((c) => c === 1)) {
      onCompleteFn && onCompleteFn();
    }
  }, [cardsCompleted]);

  const handlePrevious = () => {
    setCardIndex((prevIndex) => {
      if (!prevIndex) return 0;
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCardIndex((prevIndex) => {
      if (prevIndex === content.cards.length - 1) {
        return prevIndex;
      }
      return prevIndex + 1;
    });
  };

  const flipCardCb = () => {
    if (!cardsCompleted[cardIndex]) {
      const newArray = [...cardsCompleted];
      newArray[cardIndex] = 1;
      setCardsCompleted(newArray);
    }
  };

  return (
    <Style.Wrapper $bgImg={''}>
      <Style.InnerWrapper>
        <div>
          <h3 className="title">{content.question}</h3>
          <p className="description">{content.description}</p>
        </div>
        <Style.ContentWrapper>
          <Style.CardsWrapper aria-live="polite" role="region">
            {content.cards.map((c, index) => (
              <Card
                key={index}
                data={c}
                selectedCard={content.cards[cardIndex]}
                onFlipCb={flipCardCb}
                textAlignFront={textAlignFront}
              />
            ))}
          </Style.CardsWrapper>
          <Style.Controls>
            <div>
              {cardIndex + 1} of {content.cards.length}
            </div>
            <button
              disabled={cardIndex === 0}
              onClick={handlePrevious}
              aria-label="Previous Card"
            >
              <ChevronLeft />
            </button>
            <button
              disabled={cardIndex === content.cards.length - 1}
              onClick={handleNext}
              aria-label="Next Card"
            >
              <ChevronRight />
            </button>
          </Style.Controls>
        </Style.ContentWrapper>
      </Style.InnerWrapper>
    </Style.Wrapper>
  );
}

interface ICardProps {
  data: IFlipCardProps["content"]["cards"][number];
  selectedCard: IFlipCardProps["content"]["cards"][number];
  onFlipCb: () => void;
  textAlignFront: "default" | "center";
}

function Card({ data, selectedCard, onFlipCb, textAlignFront }: ICardProps) {
  const [isRotated, setIsRotated] = React.useState(false);

  const handleFlip = () => {
    setIsRotated((prevState) => !prevState);
    onFlipCb();
  };

  return (
    <Style.Card
      $isRotated={isRotated}
      data-animation={selectedCard === data ? "in" : "out"}
      aria-hidden={selectedCard !== data}
      inert={selectedCard !== data}
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
  );
}
