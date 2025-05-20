import { BackgroundImageContent } from '~/components/background-image-content/background-image-content'
import { OptionsSelect } from '~/components/options-select/options-select'
import { TextScene } from '~/components/text-scene/text-scene'
import { assets } from '~/config/assets'
import { appState } from '~/state/app-state'
import { TextAndImage } from '../../components/text-and-image/text-and-image'
import { VideoToText } from '~/components/video-to-text/video-to-text'
import { pageContent } from '../../config/content'
import { FlipCard } from '../../components/flip-card/flip-card'
import { InterSection } from '~/components/intersect-section/intersect-section'
import { ScenarioFour } from './scenario4'

import * as Style from './main.styles'

interface IProps {
  activeSectionCb: (entry: IntersectionObserverEntry) => void
}

export function ScenarioThree({ activeSectionCb }: IProps) {
  const { scenario3 } = pageContent
  const bookmark = appState((state) => state.bookmark)

  return (
    <>
      <InterSection onActiveCb={activeSectionCb}>
        <BackgroundImageContent
          bgImg={assets.scenario3Bg1}
          content={scenario3.section1.content}
          contain
        />
      </InterSection>
      <Style.StyledSection>
        <BackgroundImageContent
          bgImg={assets.scenario3Bg2}
          content={scenario3.section2.content}
          columns={2}
        />
      </Style.StyledSection>
      <Style.StyledSection>
        <TextScene
          title={scenario3.section3.title}
          description={scenario3.section3.description}
        />
      </Style.StyledSection>
      <Style.StyledSection>
        <TextAndImage
          contents={scenario3.section4.content}
          imgSrc={assets.scenario3Bg3}
        />
      </Style.StyledSection>
      <Style.StyledSection>
        <BackgroundImageContent
          bgImg={assets.scenario3Bg4}
          content={scenario3.section5.content}
          columns={2}
        />
      </Style.StyledSection>
      <InterSection onActiveCb={activeSectionCb}>
        <TextAndImage
          contents={scenario3.section6.content}
          imgSrc={assets.scenario3Bg4}
          overflowText
        />
      </InterSection>
      {bookmark.decision3Answer === null && (
        <InterSection
          onActiveCb={activeSectionCb}
          hideDownArrow
        >
          <OptionsSelect
            bgImg={assets.scenario3Bg5}
            options={scenario3.section7.options}
          />
        </InterSection>
      )}
      {bookmark.decision3Answer && (
        <>
          <InterSection onActiveCb={activeSectionCb}>
            {bookmark.decision3Answer === 1 && (
              <TextAndImage
                contents={scenario3.section8.option1content}
                imgSrc={assets.scenario3OptionBg}
              />
            )}
            {bookmark.decision3Answer === 2 && (
              <TextAndImage
                contents={scenario3.section8.option2content}
                imgSrc={assets.scenario3OptionBg}
              />
            )}
          </InterSection>
          <InterSection onActiveCb={activeSectionCb}>
            <TextAndImage
              contents={scenario3.section9.content}
              imgSrc={assets.scenario3Bg6}
            />
          </InterSection>
          <InterSection
            onActiveCb={activeSectionCb}
            hideDownArrow={!bookmark.flipCards1Completed}
          >
            <FlipCard
              bgImg={assets.scenario3Bg7}
              cards={scenario3.section10.cards}
              onCompleteFn={scenario3.section10.onCompleteFn}
            />
          </InterSection>
          {bookmark.flipCards1Completed && (
            <>
              <Style.StyledSection>
                <VideoToText
                  videoSrc={assets.scenario3BuildingTrafficVideo}
                  content1={pageContent.scenario3.section11.content1}
                  content2={pageContent.scenario3.section11.content2}
                />
              </Style.StyledSection>
              <InterSection
                onActiveCb={activeSectionCb}
                hideDownArrow={!bookmark.flipCards2Completed}
              >
                <FlipCard
                  bgImg={assets.scenario3Bg7}
                  cards={scenario3.section12.cards}
                  onCompleteFn={scenario3.section12.onCompleteFn}
                  textAlignFront="center"
                />
              </InterSection>
              {bookmark.flipCards2Completed && (
                <>
                  <InterSection onActiveCb={activeSectionCb}>
                    <TextScene
                      title={scenario3.section13.title}
                      description={scenario3.section13.description}
                      columns={1}
                    />
                  </InterSection>
                  <ScenarioFour activeSectionCb={activeSectionCb} />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  )
}
