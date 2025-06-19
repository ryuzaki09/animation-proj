import { TextScene } from "~/components/text-scene/text-scene";
import { InterSection } from "~/components/intersect-section/intersect-section";
import { Scenario2Module2 } from "./scenario2";
import { Module2MarisolPathContentI } from "~/types";

interface IProps {
  activeSectionCb: (entry: IntersectionObserverEntry) => void;
  config: Module2MarisolPathContentI;
}

export function Scenario1Module2({ activeSectionCb, config }: IProps) {
  const { scenario1 } = config

  return (
    <>
      {/* Section 5 from Introduction */}
      <InterSection id="S0S5" onActiveCb={activeSectionCb} >
        <TextScene content={scenario1.section1.content} />
      </InterSection>

      {/* Section 1 */}
      <InterSection id="S1S1" onActiveCb={activeSectionCb} >
        <TextScene content={scenario1.section2.content} />
      </InterSection>

      {/* Section 2 */}
      <InterSection id="S1S2" onActiveCb={activeSectionCb} >
        <TextScene content={scenario1.section3.content} />
      </InterSection>

      {/* Section 3 */}
      <InterSection id="S1S3" onActiveCb={activeSectionCb} >
        <TextScene content={scenario1.section4.content} />
      </InterSection>

      {/* Section 4 */}
      <InterSection id="S1S4" onActiveCb={activeSectionCb} >
        <TextScene content={scenario1.section5.content} />
      </InterSection>

      {/* Section 5 */}
      <InterSection id="S1S5" onActiveCb={activeSectionCb} >
        <TextScene content={scenario1.section6.content} />
      </InterSection>

      {/* Section 6 */}
      <InterSection id="S1S6" onActiveCb={activeSectionCb} >
        <TextScene content={scenario1.section7.content} />
      </InterSection>

      {/* Section 7 */}
      <InterSection id="S1S7" onActiveCb={activeSectionCb} >
        <TextScene content={scenario1.section8.content} />
      </InterSection>

      {/* Section 8 */}
      <InterSection id="S1S8" onActiveCb={activeSectionCb} >
        <TextScene content={scenario1.section9.content} />
      </InterSection>

      {/* Section 9 */}
      <InterSection id="S1S9" onActiveCb={activeSectionCb} >
        <TextScene content={scenario1.section10.content} />
      </InterSection>
      <Scenario2Module2 activeSectionCb={activeSectionCb} config={config} />
    </>
  );
}
