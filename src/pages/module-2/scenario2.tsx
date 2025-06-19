import { BackgroundImageContent } from "~/components/background-image-content/background-image-content";
import { TextAndImage } from "~/components/text-and-image/text-and-image";
import { TextScene } from "~/components/text-scene/text-scene";
import { OptionsSelect } from "~/components/options-select/options-select";
import { InterSection } from "~/components/intersect-section/intersect-section";
import { assetsModule2 } from "~/config/module-2/assets";
import { appState } from "~/state/app-state";
import { VideoToText } from "~/components/video-to-text/video-to-text";
import { Scenario3Module2 } from "./scenario3";
import { TextAndImageWithFadeInScroll } from "~/components/text-and-image-with-fade-in-scroll/text-and-image-with-fade-in-scroll";
import { Module2MarisolPathContentI } from "~/types";

interface IProps {
  activeSectionCb: (entry: IntersectionObserverEntry) => void;
  config: Module2MarisolPathContentI;
}

export function Scenario2Module2({ activeSectionCb, config }: IProps) {
  const bookmark = appState((state) => state.bookmark);
  const { scenario2 } = config

  return (
    <>
      {/* Section 1 */}
      <InterSection id="S2S1" onActiveCb={activeSectionCb}>
        <BackgroundImageContent
          bgImg={scenario2.section1.image}
          content={scenario2.section1.content}
          invertTxtColors
          textPosition="right"
        />
      </InterSection>

      {/* Section 2 */}
      <InterSection id="S2S2" onActiveCb={activeSectionCb} >
        <BackgroundImageContent
          bgImg={scenario2.section2.image}
          content={scenario2.section2.content}
          textPosition="center"
          invertTxtColors
        />
      </InterSection>

      {/* Section 3 */}
      <InterSection id="S2S3" onActiveCb={activeSectionCb} >
        <TextScene
          content={scenario2.section3.content}
          columns={scenario2.section3.columns}
          textAlign="center"
        />
      </InterSection>

      {/* Section 4 */}
      <div className="section-marker" id="S2S4" />
      <InterSection
        id="S2S4"
        onActiveCb={activeSectionCb}
        useMarker
      >
        <TextAndImage
          content={scenario2.section4.content}
          imgSrc={scenario2.section4.image}
        />
      </InterSection>
      {/* Section 5 */}
      {!bookmark.decision1Answer.hideQuestion && (
        <InterSection id="S2S5" onActiveCb={activeSectionCb} hideDownArrow>
          <OptionsSelect bgImg={assetsModule2.scenario1Section15Bg} content={scenario2.section5.content} />
        </InterSection>
      )}
      {bookmark.decision1Answer.answer && (
        <>
          {/* Section 6 part 1 */}
          <div className="section-marker" id="S2S6_part1" />
          {bookmark.decision1Answer.answer === 1 && (
            <InterSection id="S2S6_part1" onActiveCb={activeSectionCb} useMarker>
              <TextAndImage
                content={scenario2.section6.option1content}
                imgSrc={scenario2.section6.image}
              />
            </InterSection>
          )}

          {/* Section 6 part 2 */}
          <div className="section-marker" id="S2S6_part2" />
          {bookmark.decision1Answer.answer === 2 && (
            <InterSection id="S2S6_part2" onActiveCb={activeSectionCb} useMarker>
              <TextAndImage
                content={scenario2.section6.option2content}
                imgSrc={scenario2.section6.image}
              />
            </InterSection>
          )}

          {/* Section 7 */}
          <InterSection
            id="S2S7"
            onActiveCb={activeSectionCb}
          >
            <BackgroundImageContent
              bgImg={scenario2.section7.image}
              content={scenario2.section7.content}
              invertTxtColors
              textPosition="right"
            />
          </InterSection>

          {/* Section 8 */}
          <div className="section-marker" id="S2S8" />
          <InterSection
            id="S2S8"
            onActiveCb={activeSectionCb}
            useMarker
          >
            <TextAndImage content={scenario2.section8.content} imgSrc={scenario2.section8.image} />
          </InterSection>

          {/* Section 9 */}
          <div className="section-marker" id="S2S9" />
          <InterSection
            id="S2S9"
            onActiveCb={activeSectionCb}
            useMarker
          >
            <TextAndImage content={scenario2.section9.content} imgSrc={scenario2.section9.image} />
          </InterSection>

          {/* Section 10 */}
          <InterSection
            id="S2S10"
            onActiveCb={activeSectionCb}
          >
            <TextScene content={scenario2.section10.content} />
          </InterSection>

          {/* Section 11 */}
          <InterSection
            id="S2S11"
            onActiveCb={activeSectionCb}
          >
            <TextScene content={scenario2.section11.content} />
          </InterSection>

          {/* Section 12 */}
          <InterSection
            id="S2S12"
            onActiveCb={activeSectionCb}
          >
            <TextScene content={scenario2.section12.content} />
          </InterSection>

          {/* Section 13 */}
          <div className="section-marker" id="S2S13" />
          <InterSection
            id="S2S13"
            onActiveCb={activeSectionCb}
            useMarker
          >
            <TextAndImage content={scenario2.section13.content} imgSrc={scenario2.section13.image} />
          </InterSection>

          {/* Section 14 */}
          {!bookmark.decision2Answer.hideQuestion && (
            <InterSection id="S2S14" onActiveCb={activeSectionCb} hideDownArrow>
              <OptionsSelect
                bgImg={assetsModule2.scenario1Section24Bg}
                content={scenario2.section14.content}
              />
            </InterSection>
          )}
          {bookmark.decision2Answer.answer && (
            <>
              {/* Section 15 part 1 */}
              <div className="section-marker" id="S2S15_part1" />
              {bookmark.decision2Answer.answer === 1 && (
                <InterSection id="S2S15_part1" onActiveCb={activeSectionCb} useMarker>
                  <TextAndImage
                    content={scenario2.section15.option1content}
                    imgSrc={scenario2.section15.image}
                  />
                </InterSection>
              )}

              {/* Section 16 part 2 */}
              <div className="section-marker" id="S2S15_part2" />
              {bookmark.decision2Answer.answer === 2 && (
                <InterSection id="S2S15_part2" onActiveCb={activeSectionCb} useMarker>
                  <TextAndImage
                    content={scenario2.section15.option2content}
                    imgSrc={assetsModule2.scenario1Section23Image}
                  />
                </InterSection>
              )}

              {/* Section 16 */}
              <div className="section-marker" id="S2S16" />
              <InterSection id="S2S16" onActiveCb={activeSectionCb} useMarker>
                <VideoToText
                  videoSrc={scenario2.section16.video}
                  content1={scenario2.section16.content1}
                  content2={scenario2.section16.content2}
                />
              </InterSection>

              {/* Section 17 */}
              <InterSection
                id="S2S17"
                onActiveCb={activeSectionCb}
              >
                <BackgroundImageContent
                  bgImg={scenario2.section17.image}
                  content={scenario2.section17.content}
                  invertTxtColors
                  textPosition="right"
                />
              </InterSection>

              {/* Section 18 */}
              <div className="section-marker" id="S2S18" />
              <InterSection
                id="S2S18"
                onActiveCb={activeSectionCb}
                useMarker
              >
                <TextAndImage
                  content={scenario2.section18.content}
                  imgSrc={scenario2.section18.image}
                />
              </InterSection>

              {/* Section 19 */}
              {!bookmark.decision3Answer.hideQuestion && (
                <InterSection id="S2S19" onActiveCb={activeSectionCb} hideDownArrow>
                  <OptionsSelect
                    bgImg={assetsModule2.scenario1Section29Bg}
                    content={scenario2.section19.content}
                  />
                </InterSection>
              )}
              {bookmark.decision3Answer.answer && (
                <>
                  {/* Section 20 */}
                  <div className="section-marker" id="S2S20" />
                  {bookmark.decision3Answer.answer === 1 && (
                    <InterSection id="S2S20" onActiveCb={activeSectionCb} useMarker>
                      <TextAndImage
                        content={scenario2.section20.option1content}
                        imgSrc={assetsModule2.scenario1Section28And30Image}
                      />
                    </InterSection>
                  )}

                  {/* Section 21 */}
                  <div className="section-marker" id="S2S21" />
                  {bookmark.decision3Answer.answer === 2 && (
                    <InterSection id="S2S21" onActiveCb={activeSectionCb} useMarker>
                      <TextAndImage
                        content={scenario2.section20.option2content}
                        imgSrc={assetsModule2.scenario1Section28And30Image}
                      />
                    </InterSection>
                  )}

                  {/* Section 22 */}
                  <div className="section-marker" id="S2S22" />
                  <InterSection
                    id="S2S22"
                    onActiveCb={activeSectionCb}
                    useMarker
                  >
                    <TextAndImage
                      content={scenario2.section21.content}
                      imgSrc={scenario2.section21.image}
                    />
                  </InterSection>
                  <Scenario3Module2 activeSectionCb={activeSectionCb} config={config} />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
