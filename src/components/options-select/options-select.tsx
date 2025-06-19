import React, { useEffect, useRef, useState } from "react";

import * as Style from "./options-select.styles";
import { OptionsSelectT, OptionsT } from "~/types";
import { useDetectScrollable } from "~/hooks/use-detect-scrollable";

interface IOptionsSelectProps {
  bgImg: string;
  content: OptionsSelectT;
  onSubmitCb?: (selectedAnswer: number) => void;
  hideSubmit?: boolean;
  savedAnswer?: number | null;
}
export function OptionsSelect({ bgImg, content, onSubmitCb, savedAnswer = null, hideSubmit }: IOptionsSelectProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(savedAnswer);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  function navigateToAnswer() {
    setTimeout(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const nextSection = wrapper.parentElement?.nextSibling as HTMLElement;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  }

  const handleSubmit = () => {
    if (onSubmitCb && selectedAnswer) {
      onSubmitCb(selectedAnswer);
      navigateToAnswer();
    }
  };

  const handleSelection = (option: IOptionsSelectProps["content"]["options"][number]) => {
    option.onClick && option.onClick();
    navigateToAnswer();
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const isAtTop = element.scrollTop === 0;
    const isAtBottom = element.scrollHeight - element.scrollTop === element.clientHeight;

    element.classList.toggle("at-top", isAtTop);
    element.classList.toggle("at-bottom", isAtBottom);
  };

  if (onSubmitCb) {
    return (
      <Style.Wrapper $bgImg={bgImg} ref={wrapperRef}>
        <Style.InnerWrapper>
          <h2>{content.question}</h2>
          <p className="bot-1">{content.description}</p>
          <Style.OptionsWrapper>
            {content.options.map((o, index) => {
              const contentRef = useRef<HTMLDivElement>(null);
              contentRefs.current[index] = contentRef.current;

              const isScrollable = useDetectScrollable(contentRef);
              return (
                <Style.OptionBlock
                  key={index}
                  onClick={() => setSelectedAnswer(index + 1)}
                  $isSelected={(selectedAnswer || 0) - 1 === index}
                  aria-selected={(selectedAnswer || 0) - 1 === index}
                  $isScrollable={isScrollable}
                  $hasHover
                >
                  <div ref={contentRef} onScroll={handleScroll}>
                    {o.title && o.title}
                    {o.description && o.description}
                  </div>
                </Style.OptionBlock>
              );
            })}
          </Style.OptionsWrapper>
          {!hideSubmit && (
            <Style.SubmitWrapper>
              <button onClick={handleSubmit}>Submit</button>
            </Style.SubmitWrapper>
          )}
        </Style.InnerWrapper>
      </Style.Wrapper>
    );
  }

  return (
    <Style.Wrapper $bgImg={bgImg} ref={wrapperRef}>
      <Style.InnerWrapper>
        <h2>{content.question}</h2>
        <p className="bot-1">{content.description}</p>
        <Style.OptionsWrapper>
          {content.options.map((o, index) => {
            const contentRef = useRef<HTMLDivElement>(null);
            contentRefs.current[index] = contentRef.current;

            const isScrollable = useDetectScrollable(contentRef);
            return (
              <Style.OptionBlock key={index} $isScrollable={isScrollable}>
                <div ref={contentRef} onScroll={handleScroll} className="at-top">
                  {o.title && o.title}
                  {o.description && o.description}
                </div>
                {o.btnText && <button onClick={() => handleSelection(o)}>{o.btnText}</button>}
              </Style.OptionBlock>
            );
          })}
        </Style.OptionsWrapper>
      </Style.InnerWrapper>
    </Style.Wrapper>
  );
}
