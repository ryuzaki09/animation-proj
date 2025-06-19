import { BackgroundImageContent } from "~/components/background-image-content/background-image-content";
import { InterSection } from "~/components/intersect-section/intersect-section";
import { TextAndImage } from "~/components/text-and-image/text-and-image";
import { VideoBackground } from "~/components/video-background/video-background";
import { TextScene } from "~/components/text-scene/text-scene";
import { Module2MarisolPathContentI } from "~/types";

interface IProps {
  activeSectionCb: (entry: IntersectionObserverEntry) => void;
  config: Module2MarisolPathContentI;
}

export function Scenario4Module2({ activeSectionCb, config }: IProps) {
  const { scenario4 } = config

  return (
    <>
      {/* Section 1 */}
      <div className="section-marker" id="S4S1" />
      <InterSection id="S4S1" onActiveCb={activeSectionCb} useMarker>
        <VideoBackground
          videoSrc={scenario4.section1.video}
          content={scenario4.section1.content}
        />
      </InterSection>

      {/* Section 2 */}
      <InterSection id="S4S2" onActiveCb={activeSectionCb} >
        <BackgroundImageContent
          bgImg={scenario4.section2.image}
          content={scenario4.section2.content}
          invertTxtColors
          textPosition="right"
        />
      </InterSection>

      {/* Section 3 */}
      <InterSection id="S4S3" onActiveCb={activeSectionCb} >
        <TextScene content={scenario4.section3.content} />
      </InterSection>

      {/* Section 4 */}
      <InterSection id="S4S4" onActiveCb={activeSectionCb} >
        <TextScene content={scenario4.section4.content} />
      </InterSection>

      {/* Section 5 */}
      <InterSection id="S4S5" onActiveCb={activeSectionCb} >
        <BackgroundImageContent
          bgImg={scenario4.section5.image}
          content={scenario4.section5.content}
          invertTxtColors
          textPosition="right"
        />
      </InterSection>

      {/* Section 6 */}
      <InterSection id="S4S6" onActiveCb={activeSectionCb} >
        <TextScene content={scenario4.section6.content} />
      </InterSection>

      {/* Section 7 */}
      <InterSection id="S4S7" onActiveCb={activeSectionCb} >
        <BackgroundImageContent
          bgImg={scenario4.section7.image}
          content={scenario4.section7.content}
          invertTxtColors
          textPosition="right"
        />
      </InterSection>

      {/* Section 8 */}
      <div className="section-marker" id="S4S8" />
      <InterSection
        id="S4S8"
        onActiveCb={activeSectionCb}
        useMarker
      >
        <TextAndImage content={scenario4.section8.content} imgSrc={scenario4.section8.image} />
      </InterSection>

      {/* Section 9 */}
      <div className="section-marker" id="S4S9" />
      <InterSection
        id="S4S9"
        onActiveCb={activeSectionCb}
        useMarker
      >
        <TextAndImage content={scenario4.section9.content} imgSrc={scenario4.section9.image} />
      </InterSection>

      {/* Section 10 */}
      <div className="section-marker" id="S4S10" />
      <InterSection
        id="S4S10"
        onActiveCb={activeSectionCb}
        useMarker
      >
        <TextAndImage content={scenario4.section10.content} imgSrc={scenario4.section10.image} />
      </InterSection>

      {/* Section 11 */}
      <div className="section-marker" id="S4S11" />
      <InterSection
        id="S4S11"
        onActiveCb={activeSectionCb}
        useMarker
      >
        <TextAndImage content={scenario4.section11.content} imgSrc={scenario4.section11.image} />
      </InterSection>

      {/* Section 12 */}
      <div className="section-marker" id="S4S12" />
      <InterSection
        id="S4S12"
        onActiveCb={activeSectionCb}
        useMarker
      >
        <TextAndImage content={scenario4.section12.content} imgSrc={scenario4.section12.image} />
      </InterSection>

      {/* Section 13 */}
      <div className="section-marker" id="S4S13" />
      <InterSection
        id="S4S13"
        onActiveCb={activeSectionCb}
        useMarker
      >
        <TextAndImage content={scenario4.section13.content} imgSrc={scenario4.section13.image} />
      </InterSection>

      {/* Section 14 */}
      <div className="section-marker" id="S4S14" />
      <InterSection
        id="S4S14"
        onActiveCb={activeSectionCb}
        useMarker
      >
        <TextAndImage
          contentWithDownload={scenario4.section14.contentWithDownload}
          imgSrc={scenario4.section14.image}
          buttonRevertColors
        />
      </InterSection>
    </>
  );
}
