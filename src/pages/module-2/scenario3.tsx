import { appState } from "~/state/app-state";
import { BackgroundImageContent } from "~/components/background-image-content/background-image-content";
import { InterSection } from "~/components/intersect-section/intersect-section";
import { TextAndImage } from "~/components/text-and-image/text-and-image";
import { PhoneScene as PhoneSceneV2 } from "~/components/phone-scene-v2/phone-scene";
import { Scenario4Module2 } from "./scenario4";
import { Module2MarisolPathContentI } from "~/types";

interface IProps {
  activeSectionCb: (entry: IntersectionObserverEntry) => void;
  config: Module2MarisolPathContentI;
}

export function Scenario3Module2({ activeSectionCb, config }: IProps) {
  const bookmark = appState((state) => state.bookmark);
  return (
    <>
      {/* Section 1 */}
      <InterSection id="S3S1" onActiveCb={activeSectionCb}>
        <BackgroundImageContent bgImg={config.scenario3.section1.image} content={config.scenario3.section1.content} />
      </InterSection>

      {/* Section 2 */}
      <InterSection id="S3S2" onActiveCb={activeSectionCb} >
        <BackgroundImageContent
          bgImg={config.scenario3.section2.image}
          content={config.scenario3.section2.content}
          textPosition="right"
        />
      </InterSection>

      {/* Section 3 */}
      <div className="section-marker" id="S3S3" />
      <InterSection id="S3S3" onActiveCb={activeSectionCb} useMarker>
        <TextAndImage content={config.scenario3.section3.content} imgSrc={config.scenario3.section3.image} />
      </InterSection>

      {/* Section 4 */}
      <div className="section-marker" id="S3S4" />
      <InterSection
        id="S3S4"
        onActiveCb={activeSectionCb}
        hideDownArrow={!bookmark.phoneAnimationStarted}
        useMarker
      >
        <PhoneSceneV2
          content={config.scenario3.section4.content}
        />
      </InterSection>
      {/*<InterSection
        id="S3S4"
        onActiveCb={activeSectionCb}
        hideDownArrow={!bookmark.phoneAnimationStarted}
        useMarker
      >
        <PhoneScene
          mobileScreens={config.scenario3.section4.mobileScreens}
          revealContent={config.scenario3.section4.revealContent}
        />
      </InterSection>*/}
      {bookmark.phoneAnimationStarted && bookmark.secondPhoneRevealed && (
        <>
          {/* Section 5 */}
          <div className="section-marker" id="S3S5" />
          <InterSection
            id="S3S5"
            onActiveCb={activeSectionCb}
            useMarker
          >
            <TextAndImage content={config.scenario3.section5.content} imgSrc={config.scenario3.section5.image} />
          </InterSection>

          {/* Section 6 */}
          <div className="section-marker" id="S3S6" />
          <InterSection
            id="S3S6"
            onActiveCb={activeSectionCb}
            useMarker
          >
            <TextAndImage content={config.scenario3.section6.content} imgSrc={config.scenario3.section6.image} />
          </InterSection>

          {/* Section 7 */}
          <div className="section-marker" id="S3S7" />
          <InterSection id="S3S7" onActiveCb={activeSectionCb} useMarker>
            <TextAndImage content={config.scenario3.section7.content} imgSrc={config.scenario3.section7.image} />
          </InterSection>
          <Scenario4Module2 activeSectionCb={activeSectionCb} config={config} />
        </>
      )}
    </>
  );
}
