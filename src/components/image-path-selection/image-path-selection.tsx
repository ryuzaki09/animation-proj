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
  chosenPath?: 1 | 2 | null
}

export function ImagePathSelection({ data, chosenPath = null }: IImagePathSelectionProps) {
  const [selectedPath, setSelectedPath] = React.useState<null | 1 | 2>(chosenPath)

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
    </Style.Wrapper>
  )
}
