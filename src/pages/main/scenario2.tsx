import { BackgroundImageContent } from '~/components/background-image-content/background-image-content'
import { pageContent } from '../../config/content'
import { TextAndImage } from '../../components/text-and-image/text-and-image'
import { TextScene } from '~/components/text-scene/text-scene'
import { TextAndVideo } from '~/components/text-and-video/text-and-video'
import { OptionsSelect } from '~/components/options-select/options-select'
import { LaptopScene } from '~/components/laptop-scene/laptop-scene'
import { InterSection } from '~/components/intersect-section/intersect-section'
import { assets } from '~/config/assets'
import { appState } from '~/state/app-state'
import { ScenarioThree } from './scenario3'

import * as Style from './main.styles'

interface IProps {
  activeSectionCb: (entry: IntersectionObserverEntry) => void
}

export function ScenarioTwo({ activeSectionCb }: IProps) {
  const { scenario2, scenario3 } = pageContent
  const bookmark = appState((state) => state.bookmark)

  return (
    <>
      <Style.StyledSection>
        <BackgroundImageContent
          bgImg={assets.scenario2Bg1}
          content={scenario2.section1.content}
          contain
        />
      </Style.StyledSection>
      <Style.StyledSection>
        <BackgroundImageContent
          bgImg={assets.scenario2Bg2}
          content={scenario2.section2.content}
          columns={2}
          invertTxtColors
        />
      </Style.StyledSection>
      <Style.StyledSection>
        <TextScene
          title={scenario2.section3.title}
          description={scenario2.section3.description}
        />
      </Style.StyledSection>
      <InterSection
        onActiveCb={activeSectionCb}
        hideDownArrow={false}
      >
        <TextAndImage
          contents={scenario2.section4.content}
          imgSrc={assets.scenario2Bg3}
        />
      </InterSection>
      {bookmark.decision2Answer === null && (
        <InterSection
          onActiveCb={activeSectionCb}
          hideDownArrow
        >
          <OptionsSelect
            bgImg={assets.scenario2Bg4}
            options={scenario2.section5.options}
          />
        </InterSection>
      )}
      {bookmark.decision2Answer && (
        <>
          <InterSection onActiveCb={activeSectionCb}>
            {bookmark.decision2Answer === 1 && (
              <TextAndImage
                contents={scenario2.section6.option1content}
                imgSrc={assets.scenario2Option1}
              />
            )}
            {bookmark.decision2Answer === 2 && (
              <TextAndImage
                contents={scenario2.section6.option2content}
                imgSrc={assets.scenario2Option2}
              />
            )}
          </InterSection>
          <Style.StyledSection>
            <TextAndImage
              contents={scenario2.section7.content}
              imgSrc={assets.scenario2ReflectionImg1}
              containImg
            />
          </Style.StyledSection>
          <Style.StyledSection>
            <TextAndImage
              contents={scenario2.section8.content}
              imgSrc={assets.scenario2ReflectionImg2}
              containImg
            />
          </Style.StyledSection>
          <Style.StyledSection>
            <TextAndImage
              contents={scenario2.section9.content}
              imgSrc={assets.scenario2ReflectionImg3}
              containImg
            />
          </Style.StyledSection>
          <Style.StyledSection>
            <BackgroundImageContent
              bgImg={assets.scenario2Bg5}
              content={scenario2.section10.content}
              columns={2}
            />
          </Style.StyledSection>
          <InterSection onActiveCb={activeSectionCb}>
            <TextScene
              title={scenario2.section11.title}
              description={scenario2.section11.description}
              columns={1}
              customRender={() => (
                <>
                  <p>{scenario2.section11.description}</p>
                  <p><strong>{scenario2.section11.title}</strong></p>
                </>
              )}
            />
          </InterSection>
          <InterSection onActiveCb={activeSectionCb} hideDownArrow={!bookmark.laptopRevealed}>
            <LaptopScene
              content={scenario2.section12.content}
              onClickCb={scenario2.section12.onClickReveal}
              hasRevealed={bookmark.laptopRevealed}
            />
          </InterSection>
          {bookmark.laptopRevealed && (
            <>
              <Style.StyledSection>
                <TextAndVideo
                  videoSrc={assets.scenario2BuildingVideo}
                  content1={scenario2.section13.content1}
                  content2={scenario2.section13.content2}
                  uniqueId="scenarioTwo-reflect"
                />
              </Style.StyledSection>
              <ScenarioThree activeSectionCb={activeSectionCb} />
            </>
          )}
        </>
      )}
    </>
  )
}
