import { BackgroundImageContent } from "~/components/background-image-content/background-image-content";
import { OptionsSelect } from "~/components/options-select/options-select";
import { TextScene } from "~/components/text-scene/text-scene";
import { assets } from "~/config/module-1/assets";
import { appState } from "~/state/app-state";
import { TextAndImage } from "~/components/text-and-image/text-and-image";
import { TextAndImageToFullImage } from "~/components/text-and-image-to-full/text-and-image-full";
import { VideoToText } from "~/components/video-to-text/video-to-text";
import { FlipCard } from "~/components/flip-card/flip-card";
import { InterSection } from "~/components/intersect-section/intersect-section";
import { ScenarioFour } from "./scenario4";
import { FixedTextScene } from "~/components/fixed-text-scene/fixed-text-scene";
import { TextAndImageWithFadeInScroll } from "~/components/text-and-image-with-fade-in-scroll/text-and-image-with-fade-in-scroll";
import { Module1PathI } from "~/types";

interface IProps {
  activeSectionCb: (entry: IntersectionObserverEntry) => void;
  config: Module1PathI;
}

export function ScenarioThree({ activeSectionCb, config }: IProps) {
  const { scenario3 } = config;
  const bookmark = appState((state) => state.bookmark);

  return (
    <>
      {/* Section 1 */}
      <InterSection id="S3S1" onActiveCb={activeSectionCb}>
        <BackgroundImageContent
          bgImg={scenario3.section1.image}
          content={scenario3.section1.content}
          pushDown={60}
          textPosition="center"
        />
      </InterSection>

      {/* Section 2 */}
      <InterSection id="S3S2" onActiveCb={activeSectionCb} >
        <BackgroundImageContent bgImg={scenario3.section2.image} content={scenario3.section2.content} columns={2} />
      </InterSection>

      {/* Section 3 */}
      <InterSection id="S3S3" onActiveCb={activeSectionCb} >
        <TextScene content={scenario3.section3.content} />
      </InterSection>

      {/* Section 4 */}
      <div className="section-marker" id="S3S4" />
      <InterSection id="S3S4" onActiveCb={activeSectionCb} useMarker>
        <TextAndImageToFullImage
          content={scenario3.section4.firstContent}
          imgSrc={scenario3.section4.image}
          contentTwo={scenario3.section4.secondContent}
        />
      </InterSection>

      {/* Section 5
      <InterSection id="S3S5" onActiveCb={activeSectionCb} >
        <BackgroundImageContent bgImg={scenario3.section5.image} content={scenario3.section5.content} columns={2} />
      </InterSection>
      */}

      {/* Section 6 */}
      <div className="section-marker" id="S3S6" />
      <InterSection id="S3S6" onActiveCb={activeSectionCb} useMarker>
        <TextAndImageWithFadeInScroll content={scenario3.section6.content ?? []} imgSrc={scenario3.section6.image} />
      </InterSection>
      {bookmark.textAndImageScrolledToEnd && (
        <>
          {!bookmark.decision3Answer?.hideQuestion && (
            // Section 7
            <InterSection id="S3S7" onActiveCb={activeSectionCb} hideDownArrow >
              <OptionsSelect bgImg={assets.scenario3Bg5} content={scenario3.section7.content} />
            </InterSection>
          )}
          {bookmark.decision3Answer.answer && (
            <>
              {/* Section 8 */}
              <div className="section-marker" id="S3S8" />
              <InterSection id="S3S8" onActiveCb={activeSectionCb} useMarker>
                {bookmark.decision3Answer.answer === 1 && (
                  <TextAndImage content={scenario3.section8.option1content} imgSrc={assets.scenario3OptionBg} />
                )}
                {bookmark.decision3Answer.answer === 2 && (
                  <TextAndImage content={scenario3.section8.option2content} imgSrc={assets.scenario3OptionBg} />
                )}
              </InterSection>

              {/* Section 9 */}
              <div className="section-marker" id="S3S9" />
              <InterSection
                id="S3S9"
                onActiveCb={activeSectionCb}
                useMarker
              >
                <TextAndImage content={scenario3.section9.content} imgSrc={scenario3.section9.image} />
              </InterSection>

              {/* Section 10 */}
              <InterSection
                id="S3S10"
                onActiveCb={activeSectionCb}
                hideDownArrow={!bookmark.flipCards1Completed}
              >
                <FlipCard
                  bgImg={assets.scenario3Bg7}
                  content={scenario3.section10.content}
                  onCompleteFn={scenario3.section10.onCompleteFn}
                />
              </InterSection>
              {bookmark.flipCards1Completed && (
                <>
                  {/* Section 11 */}
                  <div className="section-marker" id="S3S11" />
                  <InterSection id="S3S11" onActiveCb={activeSectionCb} useMarker>
                    <VideoToText
                      videoSrc={scenario3.section11.video}
                      content1={scenario3.section11.content1}
                      content2={scenario3.section11.content2}
                    />
                  </InterSection>

                  {/* Section 12 */}
                  <div className="section-marker" id="S3S12" />
                  <InterSection
                    id="S3S12"
                    onActiveCb={activeSectionCb}
                    useMarker
                  >
                    <FixedTextScene content={scenario3.section12.contents} />
                  </InterSection>

                  {/* Section 13 */}
                  <InterSection
                    id="S3S13"
                    onActiveCb={activeSectionCb}
                    hideDownArrow={!bookmark.flipCards2Completed}
                  >
                    <FlipCard
                      bgImg={assets.scenario3Bg7}
                      content={scenario3.section13.content}
                      onCompleteFn={scenario3.section13.onCompleteFn}
                      textAlignFront="center"
                    />
                  </InterSection>
                  {bookmark.flipCards2Completed && (
                    <>
                      {/* Section 14 */}
                      <InterSection
                        id="S3S14"
                        onActiveCb={activeSectionCb}
                      >
                        <TextScene content={scenario3.section14.content} columns={scenario3.section14.columns} />
                      </InterSection>
                      <ScenarioFour activeSectionCb={activeSectionCb} config={config} />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
