import { VideoBackground } from '~/components/video-background/video-background'
import { BackgroundImageContent } from '~/components/background-image-content/background-image-content'
import { pageContent } from '../../config/content'
import { TextAndImage } from '../../components/text-and-image/text-and-image'
import { TextScene } from '~/components/text-scene/text-scene'
import { OptionsSelect } from '~/components/options-select/options-select'
import { TextAndVideo } from '../../components/text-and-video/text-and-video'
import { InterSection } from '~/components/intersect-section/intersect-section'
import { ScenarioTwo } from './scenario2'
import { assets } from '~/config/assets'
import { appState } from '~/state/app-state'

import * as Style from './main.styles'

interface IProps {
  activeSectionCb: (entry: IntersectionObserverEntry) => void
}

export function ScenarioOne({ activeSectionCb }: IProps) {
  const { scenario1, intro } = pageContent
  const bookmark = appState((state) => state.bookmark)

  return (
    <>
      <InterSection onActiveCb={activeSectionCb} id="Introduction">
        <VideoBackground
          videoSrc={'./video/manhattan_bridge.mp4'}
          content={intro.section7.content}
        />
      </InterSection>
      <InterSection onActiveCb={activeSectionCb} id="Internet Access and Education">
        <BackgroundImageContent
          bgImg={assets.scenario1Bg1}
          content={scenario1.section1.content}
        />
      </InterSection>
      <Style.StyledSection>
        <BackgroundImageContent
          bgImg={assets.scenario1Bg2}
          columns={2}
          content={scenario1.section2.content}
        />
      </Style.StyledSection>
      <Style.StyledSection>
        <TextScene
          title={scenario1.section3.title}
          description={scenario1.section3.description}
          columns={1}
        />
      </Style.StyledSection>
      <Style.StyledSection>
        <BackgroundImageContent
          bgImg={assets.scenario1Bg3}
          columns={2}
          content={scenario1.section4.content}
        />
      </Style.StyledSection>
      <Style.StyledSection>
        <TextAndImage
          contents={scenario1.section5.content}
          imgSrc={assets.scenario1Bg4}
        />
      </Style.StyledSection>
      <Style.StyledSection>
        <BackgroundImageContent
          bgImg={assets.scenario1Bg5}
          columns={2}
          invertTxtColors
          content={scenario1.section6.content}
        />
      </Style.StyledSection>
      <InterSection onActiveCb={activeSectionCb}>
        <TextAndImage
          contents={scenario1.section7.content}
          imgSrc={assets.scenario1Bg6}
        />
      </InterSection>
      {bookmark.decision1Answer === null && (
        <InterSection
          onActiveCb={activeSectionCb}
          id="Your decisions"
          hideDownArrow
        >
          <OptionsSelect
            bgImg={assets.scenario1Bg7}
            options={scenario1.section8.options}
          />
        </InterSection>
      )}
      {bookmark.decision1Answer && (
        <>
          {bookmark.decision1Answer === 1 && (
            <InterSection onActiveCb={activeSectionCb} id="Outcome">
              <TextAndImage
                contents={scenario1.section9.option1content}
                imgSrc={assets.scenario1Bg8}
              />
            </InterSection>
          )}
          {bookmark.decision1Answer === 2 && (
            <InterSection onActiveCb={activeSectionCb} id="Outcome">
              <TextAndImage
                contents={scenario1.section9.option2content}
                imgSrc={assets.scenario1Bg8}
              />
            </InterSection>
          )}
          <Style.StyledSection>
            <TextAndVideo
              videoSrc={assets.scenario1Video}
              content1={scenario1.section10.content1}
              content2={scenario1.section10.content2}
              uniqueId="scenarioOne-reflect"
            />
          </Style.StyledSection>
          <ScenarioTwo activeSectionCb={activeSectionCb} />
        </>
      )}
    </>
  )
}
