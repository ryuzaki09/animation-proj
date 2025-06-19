import { VideoBackground } from "~/components/video-background/video-background";
import { BackgroundImageContent } from "~/components/background-image-content/background-image-content";
import { TextAndImage } from "~/components/text-and-image/text-and-image";
import { TextScene } from "~/components/text-scene/text-scene";
import { OptionsSelect } from "~/components/options-select/options-select";
import { InterSection } from "~/components/intersect-section/intersect-section";
import { ScenarioTwo } from "./scenario2";
import { assets } from "~/config/module-1/assets";
import { appState } from "~/state/app-state";
import { Module1PathI } from "~/types";
import { TextAndVideo } from "~/components/text-and-video/text-and-video";

interface IProps {
  activeSectionCb: (entry: IntersectionObserverEntry) => void;
  config: Module1PathI;
}

export function ScenarioOne({ activeSectionCb, config }: IProps) {
  const bookmark = appState((state) => state.bookmark);
  const { scenario1 } = config

  return (
    <>
      {/* Section 7 from Introduction */}
      <div className="section-marker" id="S0S7" />
      <InterSection
        id="S0S7"
        onActiveCb={activeSectionCb}
        useMarker
      >
        {bookmark.characterSelection === 1 && (
          <VideoBackground
            videoSrc={(scenario1.section1 as any).video}
            content={scenario1.section1.content}
            loop
          />
        )}
        {bookmark.characterSelection === 2 && (
          <BackgroundImageContent
            bgImg={(scenario1.section1 as any).image}
            content={scenario1.section1.content}
            textPosition="center"
            normalFontSize
          />
        )}
      </InterSection>

      {/* Section 1 */}
      <InterSection id="S1S1" onActiveCb={activeSectionCb}>
        <BackgroundImageContent
          bgImg={scenario1.section2.image}
          content={scenario1.section2.content}
          textPosition="center"
        />
      </InterSection>

      {/* Section 2 */}
      <InterSection id="S1S2" onActiveCb={activeSectionCb}>
        <BackgroundImageContent
          bgImg={scenario1.section3.image}
          columns={2}
          content={scenario1.section3.content}
        />
      </InterSection>

      {/* Section 3 */}
      <InterSection id="S1S3" onActiveCb={activeSectionCb} >
        <TextScene content={scenario1.section4.content} columns={1} />
      </InterSection>

      {/* Section 4 */}
      <InterSection id="S1S4" onActiveCb={activeSectionCb} >
        <BackgroundImageContent
          bgImg={scenario1.section5.image}
          columns={2}
          content={scenario1.section5.content}
        />
      </InterSection>

      {/* Section 5 */}
      <div className="section-marker" id="S1S5" />
      <InterSection
        id="S1S5"
        onActiveCb={activeSectionCb}
        useMarker
      >
        <TextAndImage content={scenario1.section6.content} imgSrc={scenario1.section6.image} />
      </InterSection>

      {/* Section 6 */}
      <InterSection id="S1S6" onActiveCb={activeSectionCb} >
        <BackgroundImageContent
          bgImg={scenario1.section7.image}
          columns={2}
          invertTxtColors
          content={scenario1.section7.content}
        />
      </InterSection>

      {/* Section 7 */}
      <div className="section-marker" id="S1S7" />
      <InterSection
        id="S1S7"
        onActiveCb={activeSectionCb}
        useMarker
      >
        <TextAndImage content={scenario1.section8.content} imgSrc={scenario1.section8.image} />
      </InterSection>

      {/* Section 8 */}
      {!bookmark.decision1Answer.hideQuestion && (
        <InterSection id="S1S8" onActiveCb={activeSectionCb} hideDownArrow>
          <OptionsSelect bgImg={assets.scenario1Bg7} content={scenario1.section9.content} />
        </InterSection>
      )}
      {bookmark.decision1Answer.answer && (
        <>
          {/* Section 9 */}
          <div className="section-marker" id="S1S9" />
          {bookmark.decision1Answer.answer === 1 && (
            <>
              <InterSection id="S1S9" onActiveCb={activeSectionCb} useMarker>
                <TextAndImage
                  content={scenario1.section10.option1content}
                  imgSrc={scenario1.section10.image}
                />
              </InterSection>
            </>
          )}
          {bookmark.decision1Answer.answer === 2 && (
            <InterSection id="S1S9" onActiveCb={activeSectionCb} >
              <TextAndImage
                content={scenario1.section10.option2content}
                imgSrc={scenario1.section10.image}
              />
            </InterSection>
          )}

          {/* Section 10 */}
          <div className="section-marker" id="S1S10" />
          <InterSection id="S1S10" onActiveCb={activeSectionCb} useMarker>
            {bookmark.characterSelection === 1 && (
              <TextAndVideo
                videoSrc={scenario1.section11.video || ''}
                content1={scenario1.section11.content1 || []}
                content2={scenario1.section11.content2}
              />
            )}
            {bookmark.characterSelection === 2 && (
              <TextAndImage
                content={scenario1.section11.content}
                imgSrc={scenario1.section11.image}
              />
            )}
          </InterSection>
          {bookmark.characterSelection === 2 && (
            <InterSection id="S1S11" onActiveCb={activeSectionCb}>
              <BackgroundImageContent
                bgImg={scenario1.section12.image}
                content={scenario1.section12.content}
                columns={1}
                normalFontSize
              />
            </InterSection>
          )}
          <ScenarioTwo activeSectionCb={activeSectionCb} config={config} />
        </>
      )}
    </>
  );
}
