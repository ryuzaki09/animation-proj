import { BackgroundImageContent } from '~/components/background-image-content/background-image-content'
import { OptionsSelect } from '~/components/options-select/options-select'
import { TextScene } from '~/components/text-scene/text-scene'
import { assets } from '~/config/assets'
import { appState } from '~/state/app-state'
import { TextAndImage } from '../../components/text-and-image/text-and-image'
import { VideoBackground } from '~/components/video-background/video-background'
import { InterSection } from '~/components/intersect-section/intersect-section'
import { pageContent } from '../../config/content'

import * as Style from './main.styles'

interface IProps {
  activeSectionCb: (entry: IntersectionObserverEntry) => void
}

export function ScenarioFour({ activeSectionCb }: IProps) {
  const { scenario4 } = pageContent
  const bookmark = appState((state) => state.bookmark)

  return (
    <>
      <Style.StyledSection>
        <VideoBackground
          videoSrc={assets.scenario4CallVideo}
          content={scenario4.section1.content}
        />
      </Style.StyledSection>
      <Style.StyledSection>
        <TextScene
          title={scenario4.section2.title}
          description={scenario4.section2.description}
        />
      </Style.StyledSection>
      <Style.StyledSection>
        <TextAndImage
          contents={scenario4.section3.content}
          imgSrc={assets.scenario4Bg1}
        />
      </Style.StyledSection>
      <Style.StyledSection>
        <BackgroundImageContent
          bgImg={assets.scenario4Bg2}
          content={scenario4.section4.content}
          columns={2}
          invertTxtColors
        />
      </Style.StyledSection>
      <InterSection onActiveCb={activeSectionCb}>
        <TextAndImage
          contents={scenario4.section5.content}
          imgSrc={assets.scenario4Bg3}
        />
      </InterSection>
      {bookmark.decision4Answer === null && (
        <InterSection
          onActiveCb={activeSectionCb}
          hideDownArrow
        >
          <OptionsSelect
            bgImg={assets.scenario4Bg4}
            options={scenario4.section6.options}
          />
        </InterSection>
      )}
      {bookmark.decision4Answer && (
        <>
          <InterSection onActiveCb={activeSectionCb}>
            {bookmark.decision4Answer === 1 && (
              <TextAndImage
                contents={scenario4.section7.option1content}
                imgSrc={assets.scenario4Bg5}
              />
            )}
            {bookmark.decision4Answer === 2 && (
              <TextAndImage
                contents={scenario4.section7.option2content}
                imgSrc={assets.scenario4Bg5}
              />
            )}
          </InterSection>
          <Style.StyledSection>
            <BackgroundImageContent
              bgImg={assets.scenario4Bg6}
              content={scenario4.section8.content}
              columns={2}
              invertTxtColors
            />
          </Style.StyledSection>
          <Style.StyledSection>
            <TextScene
              title={scenario4.section9.title}
              description={scenario4.section9.description}
            />
          </Style.StyledSection>
          <Style.StyledSection>
            <TextScene
              title={scenario4.section10.title}
              description={scenario4.section10.description}
              columns={1}
            />
          </Style.StyledSection>
          <Style.StyledSection>
            <BackgroundImageContent
              bgImg={assets.scenario4Bg7}
              content={scenario4.section11.content}
              columns={2}
              contain
            />
          </Style.StyledSection>
          <InterSection onActiveCb={activeSectionCb}>
            <TextAndImage
              contents={scenario4.section12.content}
              imgSrc={assets.scenario4Bg7}
            />
          </InterSection>
          <InterSection
            onActiveCb={activeSectionCb}
            hideDownArrow={bookmark.decision5Answer === null}
          >
            <OptionsSelect
              bgImg={assets.scenario4Bg8}
              options={scenario4.section13.options}
              onSubmitCb={scenario4.section13.onSubmit}
            />
          </InterSection>
          {bookmark.decision5Answer && (
            <>
              <InterSection onActiveCb={activeSectionCb}>
                {bookmark.decision5Answer === 1 && (
                  <TextAndImage
                    contents={scenario4.section14.option1content}
                    imgSrc={assets.scenario4Bg9}
                  />
                )}
                {bookmark.decision5Answer === 2 && (
                  <TextAndImage
                    contents={scenario4.section14.option2content}
                    imgSrc={assets.scenario4Bg9}
                  />
                )}
                {bookmark.decision5Answer === 3 && (
                  <TextAndImage
                    contents={scenario4.section14.option3content}
                    imgSrc={assets.scenario4Bg9}
                  />
                )}
              </InterSection>
              <Style.StyledSection>
                <TextAndImage
                  contents={scenario4.section16.content}
                  imgSrc={assets.scenario4Bg10}
                />
              </Style.StyledSection>
            </>
          )}
        </>
      )}
    </>
  )
}
