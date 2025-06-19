import { BackgroundImageContent } from "~/components/background-image-content/background-image-content";
import { TextAndImage } from "~/components/text-and-image/text-and-image";
import { TextScene } from "~/components/text-scene/text-scene";
import { TextAndVideo } from "~/components/text-and-video/text-and-video";
import { OptionsSelect } from "~/components/options-select/options-select";
import { LaptopScene } from "~/components/laptop-scene/laptop-scene";
import { InterSection } from "~/components/intersect-section/intersect-section";
import { assets } from "~/config/module-1/assets";
import { appState } from "~/state/app-state";
import { ScenarioThree } from "./scenario3";
import { Module1PathI } from "~/types";

interface IProps {
  activeSectionCb: (entry: IntersectionObserverEntry) => void;
  config: Module1PathI;
}

export function ScenarioTwo({ activeSectionCb, config }: IProps) {
  const bookmark = appState((state) => state.bookmark);
  const { scenario2 } = config

  return (
    <>
      {/* Section 1 */}
      <InterSection id="S2S1" onActiveCb={activeSectionCb}>
        <BackgroundImageContent
          bgImg={scenario2.section1.image}
          content={scenario2.section1.content}
          textPosition="center"
        />
      </InterSection>

      {/* Section 2 */}
      <InterSection id="S2S2" onActiveCb={activeSectionCb} >
        <BackgroundImageContent
          bgImg={scenario2.section2.image}
          content={scenario2.section2.content}
          columns={2}
          invertTxtColors
        />
      </InterSection>

      {/* Section 3 */}
      <InterSection id="S2S3" onActiveCb={activeSectionCb} >
        <TextScene content={scenario2.section3.content} />
      </InterSection>

      {/* Section 4 */}
      <div className="section-marker" id="S2S4" />
      <InterSection
        id="S2S4"
        onActiveCb={activeSectionCb}
        hideDownArrow={false}
        useMarker
      >
        <TextAndImage content={scenario2.section4.content} imgSrc={scenario2.section4.image} />
      </InterSection>
      {!bookmark.decision2Answer.hideQuestion && (
        // Section 5
        <InterSection id="S2S5" onActiveCb={activeSectionCb} hideDownArrow >
          <OptionsSelect bgImg={assets.scenario2Bg4} content={scenario2.section5.content} />
        </InterSection>
      )}
      {bookmark.decision2Answer.answer && (
        <>
          {/* Section 6 */}
          <div className="section-marker" id="S2S6" />
          <InterSection id="S2S6" onActiveCb={activeSectionCb} useMarker>
            {bookmark.decision2Answer.answer === 1 && (
              <TextAndImage
                content={scenario2.section6.option1content}
                imgSrc={scenario2.section6.option1Img}
              />
            )}
            {bookmark.decision2Answer.answer === 2 && (
              <TextAndImage
                content={scenario2.section6.option2content}
                imgSrc={scenario2.section6.option2Img}
              />
            )}
          </InterSection>

          {/* Section 7 */}
          <div className="section-marker" id="S2S7" />
          <InterSection
            id="S2S7"
            onActiveCb={activeSectionCb}
            useMarker
          >
            <TextAndImage
              content={scenario2.section7.content}
              imgSrc={scenario2.section7.image}
              containImg
            />
          </InterSection>

          {/* Section 8 */}
          <div className="section-marker" id="S2S8" />
          <InterSection
            id="S2S8"
            onActiveCb={activeSectionCb}
            useMarker
          >
            <TextAndImage
              content={scenario2.section8.content}
              imgSrc={scenario2.section8.image}
              containImg
            />
          </InterSection>

          {/* Section 9 */}
          <div className="section-marker" id="S2S9" />
          <InterSection
            id="S2S9"
            onActiveCb={activeSectionCb}
            useMarker
          >
            <TextAndImage
              content={scenario2.section9.content}
              imgSrc={scenario2.section9.image}
              containImg
            />
          </InterSection>

          {/* Section 10 */}
          <InterSection
            id="S2S10"
            onActiveCb={activeSectionCb}
          >
            <BackgroundImageContent
              bgImg={scenario2.section10.image}
              content={scenario2.section10.content}
              columns={2}
            />
          </InterSection>

          {/* Section 11 */}
          <InterSection
            id="S2S11"
            onActiveCb={activeSectionCb}
          >
            <TextScene
              content={scenario2.section11.content}
              columns={scenario2.section11.columns}
              titleBottom
            />
          </InterSection>

          {/* Section 12 */}
          <div className="section-marker" id="S2S12" />
          <InterSection
            id="S2S12"
            onActiveCb={activeSectionCb}
            hideDownArrow={!bookmark.laptopRevealed}
            useMarker
          >
            <LaptopScene
              content={scenario2.section12.content}
              onClickCb={scenario2.section12.onClickReveal}
              hasRevealed={bookmark.laptopRevealed}
            />
          </InterSection>
          {bookmark.laptopRevealed && (
            <>
              {/* Section 13 */}
              <div className="section-marker" id="S2S13" />
              <InterSection id="S2S13" onActiveCb={activeSectionCb} useMarker>
                <TextAndVideo
                  videoSrc={scenario2.section13.video}
                  content1={scenario2.section13.content1}
                  content2={scenario2.section13.content2}
                />
              </InterSection>
              <ScenarioThree activeSectionCb={activeSectionCb} config={config} />
            </>
          )}
        </>
      )}
    </>
  );
}
