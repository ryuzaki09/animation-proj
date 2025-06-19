import { BackgroundImageContent } from "~/components/background-image-content/background-image-content";
import { OptionsSelect } from "~/components/options-select/options-select";
import { TextScene } from "~/components/text-scene/text-scene";
import { assets } from "~/config/module-1/assets";
import { appState } from "~/state/app-state";
import { TextAndImage } from "~/components/text-and-image/text-and-image";
import { VideoBackground } from "~/components/video-background/video-background";
import { InterSection } from "~/components/intersect-section/intersect-section";
import { VideoScene } from "~/components/video-scene/video-scene";
import { Module1PathI } from "~/types";

interface IProps {
  activeSectionCb: (entry: IntersectionObserverEntry) => void;
  config: Module1PathI;
}

export function ScenarioFour({ activeSectionCb, config }: IProps) {
  const { scenario4 } = config;
  const bookmark = appState((state) => state.bookmark);
  const { decision5Answer } = bookmark;

  const answeredAllquestion5 =
    decision5Answer && decision5Answer.option1 && decision5Answer.option2 && decision5Answer.option3;

  function navigateToPreviousSection() {
    setTimeout(() => {
      const section = document.getElementById("S4S6") as HTMLDivElement;

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  }

  const decision5ResultButton = {
    text: "Explore other answers",
    click: navigateToPreviousSection,
  };

  return (
    <>
      {/* Section 1 */}
      <div className="section-marker" id="S4S1" />
      <InterSection id="S4S1" onActiveCb={activeSectionCb} useMarker>
        <VideoBackground videoSrc={scenario4.section1.video} content={scenario4.section1.content} />
      </InterSection>

      {/* Section 2 */}
      <InterSection id="S4S2" onActiveCb={activeSectionCb} >
        <TextScene content={scenario4.section2.content} />
      </InterSection>

      {/* Section 3 */}
      <div className="section-marker" id="S4S3" />
      <InterSection
        id="S4S3"
        onActiveCb={activeSectionCb}
        useMarker
      >
        <TextAndImage content={scenario4.section3.content} imgSrc={scenario4.section3.image} />
      </InterSection>

      {/* Section 4 */}
      <InterSection id="S4S4" onActiveCb={activeSectionCb} >
        <BackgroundImageContent
          bgImg={scenario4.section4.image}
          content={scenario4.section4.content}
          columns={2}
          overrideWithGrey
          textAlign="right"
        />
      </InterSection>

      {/* Section 5 */}
      <div className="section-marker" id="S4S5" />
      <InterSection
        id="S4S5"
        onActiveCb={activeSectionCb}
        useMarker
      >
        <TextAndImage content={scenario4.section5.content} imgSrc={scenario4.section5.image} />
      </InterSection>

      {/* Section 6 */}
      <InterSection
        id="S4S6"
        onActiveCb={activeSectionCb}
        hideDownArrow={decision5Answer === null}
      >
        <OptionsSelect
          bgImg={assets.scenario4Bg8}
          content={scenario4.section6.content}
          onSubmitCb={scenario4.section6.onSubmit}
          hideSubmit={!!answeredAllquestion5}
          savedAnswer={decision5Answer?.lastAnswer}
        />
      </InterSection>
      {decision5Answer && (
        <>
          {/* Section 7 */}
          <div className="section-marker" id="S4S7" />
          <InterSection
            id="S4S7"
            onActiveCb={activeSectionCb}
            useMarker
            hideDownArrow={!answeredAllquestion5}
          >
            {decision5Answer.option1 !== null && decision5Answer.lastAnswer === 1 && (
              <TextAndImage
                content={scenario4.section7.option1content}
                imgSrc={scenario4.section7.optionImg}
                button={answeredAllquestion5 ? undefined : decision5ResultButton}
              />
            )}
            {decision5Answer.option2 !== null && decision5Answer.lastAnswer === 2 && (
              <TextAndImage
                content={scenario4.section7.option2content}
                imgSrc={scenario4.section7.optionImg}
                button={answeredAllquestion5 ? undefined : decision5ResultButton}
              />
            )}
            {decision5Answer.option3 !== null && decision5Answer.lastAnswer === 3 && (
              <TextAndImage
                content={scenario4.section7.option3content}
                imgSrc={scenario4.section7.optionImg}
                button={answeredAllquestion5 ? undefined : decision5ResultButton}
              />
            )}
          </InterSection>

          {answeredAllquestion5 && (
            <>
              {/* Section 8 */}
              <div className="section-marker" id="S4S8" />
              <InterSection
                id="S4S8"
                onActiveCb={activeSectionCb}
                useMarker
              >
                <VideoScene content={scenario4.section8.content} video={scenario4.section8.video} />
              </InterSection>

              {/* Section 9 */}
              <div className="section-marker" id="S4S9" />
              <InterSection
                id="S4S9"
                onActiveCb={activeSectionCb}
                useMarker
              >
                <TextAndImage
                  contentWithDownload={scenario4.section9.contentWithDownload}
                  imgSrc={scenario4.section9.image}
                  buttonRevertColors
                />
              </InterSection>
            </>
          )}
        </>
      )}
    </>
  );
}
