import React from 'react'

import * as Style from './options-select.styles'

interface IOptionsSelectProps {
  bgImg: string
  options: {
    title: string;
    description: string;
    btnText?: string
    onClick?: () => void
  }[]
  onSubmitCb?: (selectedAnswer: number) => void
  savedAnswer?: number | null
}
export function OptionsSelect(
  { bgImg, options, onSubmitCb, savedAnswer = null }: IOptionsSelectProps
) {
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(savedAnswer)
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  function navigateToAnswer() {
    setTimeout(() => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const nextSection = wrapper.parentElement?.nextSibling as HTMLElement
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 1000)
  }

  const handleSubmit = () => {
    if (onSubmitCb && selectedAnswer) {
      onSubmitCb(selectedAnswer)
      navigateToAnswer()
    }
  }

  const handleSelection = (option: IOptionsSelectProps['options'][number]) => {
    option.onClick && option.onClick()
    // navigateToAnswer()
  }

  if (onSubmitCb) {
    return (
      <Style.Wrapper $bgImg={bgImg} ref={wrapperRef}>
        <Style.InnerWrapper>
          <div>What will you do?</div>
          <p className="bot-1">Select one option:</p>
          <Style.OptionsWrapper>
            {options.map((o, index) => (
              <Style.OptionBlock
                key={index}
                onClick={() => setSelectedAnswer(index + 1)}
                $isSelected={(selectedAnswer || 0) - 1 === index}
                aria-selected={(selectedAnswer || 0) - 1 === index}
              >
                <div>{o.title}</div>
                <div>{o.description}</div>
                {o.btnText && (
                  <button onClick={() => o.onClick && o.onClick()}>
                    {o.btnText}
                  </button>
                )}
              </Style.OptionBlock>
            ))}
          </Style.OptionsWrapper>
          <Style.SubmitWrapper>
            <button onClick={handleSubmit}>Submit</button>
          </Style.SubmitWrapper>
        </Style.InnerWrapper>
      </Style.Wrapper>
    )
  }

  return (
    <Style.Wrapper $bgImg={bgImg} ref={wrapperRef}>
      <Style.InnerWrapper>
        <div>What will you do?</div>
        <p className="bot-1">Select one option:</p>
        <Style.OptionsWrapper>
          {options.map((o, index) => (
            <Style.OptionBlock key={index}>
              <div>{o.title}</div>
              <div>{o.description}</div>
              {o.btnText && (
                <button onClick={() => handleSelection(o)}>
                  {o.btnText}
                </button>
              )}
            </Style.OptionBlock>
          ))}
        </Style.OptionsWrapper>
      </Style.InnerWrapper>
    </Style.Wrapper>
  )
}
