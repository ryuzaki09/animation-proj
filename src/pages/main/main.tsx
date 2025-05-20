import React from 'react'

import { Header } from '../../components/header/header'
import { TextAndImage } from '../../components/text-and-image/text-and-image'
import { TextScene } from '~/components/text-scene/text-scene'
import { InterSection } from '~/components/intersect-section/intersect-section'
import { ImagePathSelection } from '~/components/image-path-selection/image-path-selection'
import { ScenarioOne } from './scenario1'
import { appState } from '~/state/app-state'
import { assets } from '~/config/assets'
import { pageContent } from '../../config/content'
import ChevronDownIcon from '~/components/icons/chevron-down'

import * as Style from './main.styles'

export function Main() {
  const [sectionTitle, setSectionTitle] = React.useState<string | null>(null)
  // const [hideDownArrow, setHideDownArrow] = React.useState(false)

  const bookmark = appState((state) => state.bookmark)
  const showDownArrow = appState((state) => state.showDownArrow)
  const { intro } = pageContent
  console.log('bookmark: ', bookmark)

  function activeSectionCb(entry: IntersectionObserverEntry) {
    const element = entry.target
    const elementId = element.getAttribute('data-title')
    const elementHideArrow = element.getAttribute('data-hide-arrow')
    // console.log('elementHideArrow: ', elementHideArrow)
    if (elementId) {
      setSectionTitle(elementId)
    }
    appState.getState().setShowDownArrow(!!(elementHideArrow && elementHideArrow !== "true"))
  }

  return (
    <Style.Wrapper>
      <Header title={sectionTitle || ''} />
      {showDownArrow && (
        <Style.DownArrowWrapper>
          <ChevronDownIcon />
        </Style.DownArrowWrapper>
      )}
      <InterSection onActiveCb={activeSectionCb} id="Imagine">
        <TextScene
          title={intro.section1.title}
          description={intro.section1.description}
        />
      </InterSection>
      <InterSection onActiveCb={activeSectionCb}>
        <TextAndImage
          contents={intro.section2.content}
          imgSrc={assets.introBg1}
        />
      </InterSection>
      <InterSection onActiveCb={activeSectionCb}>
        <TextAndImage
          contents={intro.section3.content}
          imgSrc={assets.introBg2}
        />
      </InterSection>
      <InterSection onActiveCb={activeSectionCb}>
        <TextScene
          title={intro.section4.leftContent}
          description={intro.section4.rightContent}
        />
      </InterSection>
      <InterSection onActiveCb={activeSectionCb} id="Reflect">
        <TextAndImage
          contents={intro.section5.content}
          imgSrc={assets.introBg3}
        />
      </InterSection>
      <InterSection
        onActiveCb={activeSectionCb}
        id="Choose your character experience"
        hideDownArrow={bookmark.characterSelection === null}
      >
        <ImagePathSelection
          data={{
            leftImgSrc: assets.characterImg1,
            leftImgTitle: intro.section6.leftImgTitle,
            leftDescription: intro.section6.leftDescription,
            onClickLeftSelection: () => {
              appState.getState().updateBookmark({ characterSelection: 1 })
              appState.getState().setShowDownArrow(true)
            },
            rightImgSrc: assets.characterImg2,
            rightImgTitle: intro.section6.rightImgTitle,
            rightDescription: intro.section6.rightDescription,
            onClickRightSelection: () => {
              appState.getState().updateBookmark({ characterSelection: 2 })
              appState.getState().setShowDownArrow(true)
            },
          }}
          chosenPath={bookmark.characterSelection}
        />
      </InterSection>

      {bookmark.characterSelection && (
        <ScenarioOne activeSectionCb={activeSectionCb} />
      )}
    </Style.Wrapper>
  )
}
