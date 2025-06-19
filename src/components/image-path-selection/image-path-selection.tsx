import React from 'react'

import * as Style from './image-path-selection.styles'

interface IImagePathSelectionProps {
  data: {
    leftImgSrc: string;
    leftImgTitle: string;
    leftDescription: string;
    onClickLeftSelection: () => void;
    rightImgSrc: string;
    rightImgTitle: string;
    rightDescription: string;
    onClickRightSelection: () => void;
  },
  chosenPath?: 0 | 1 | 2;
  startingModal?: {
    content: React.ReactNode
    onCloseCb: () => void
  };
}

export function ImagePathSelection({ data, chosenPath = 0, startingModal }: IImagePathSelectionProps) {
  const [selectedPath, setSelectedPath] = React.useState(chosenPath)
  const modalRef = React.useRef<HTMLDialogElement>(null)

  const handleLeftClick = () => {
    if (selectedPath) return
    setSelectedPath(1)
    data.onClickLeftSelection()
  }

  const handleRightClick = () => {
    if (selectedPath) return
    setSelectedPath(2)
    data.onClickRightSelection()
  }

  const handleCloseModal = () => {
    if (!modalRef.current) return

    modalRef.current.close()
    if (startingModal) {
      startingModal.onCloseCb()
    }
  }

  return (
    <Style.Wrapper>
      <Style.LeftBlock $isSelected={selectedPath === 1}>
        <img src={data.leftImgSrc} alt="" />
        <div className="description">
          {data.leftDescription}
        </div>
        <Style.BlockTitle onClick={handleLeftClick}>
          {data.leftImgTitle}
        </Style.BlockTitle>
      </Style.LeftBlock>
      <Style.RightBlock $isSelected={selectedPath === 2}>
        <img src={data.rightImgSrc} alt="" />
        <div className="description">
          {data.rightDescription}
        </div>
        <Style.BlockTitle onClick={handleRightClick}>
          {data.rightImgTitle}
        </Style.BlockTitle>
      </Style.RightBlock>
      {startingModal && (
        <Style.SectionModalWrapper>
          <Style.ModalOverlay aria-hidden />
          <Style.ModalContent ref={modalRef}>
            <div><button onClick={handleCloseModal}>✕</button></div>
            <div>{startingModal.content}</div>
          </Style.ModalContent>
        </Style.SectionModalWrapper>
      )}
    </Style.Wrapper>
  )
}
