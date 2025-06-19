import { Header } from "~/components/header/header";
import { TextAndImage } from "~/components/text-and-image/text-and-image";
import { TextScene } from "~/components/text-scene/text-scene";
import { InterSection } from "~/components/intersect-section/intersect-section";
import { ImagePathSelection } from "~/components/image-path-selection/image-path-selection";
import { ScenarioOne } from "./scenario1";
import { appState } from "~/state/app-state";
import { assets } from "~/config/module-1/assets";
import { module1Intro } from "~/config/module-1/content/module-1-intro";
import ChevronDownIcon from "~/components/icons/chevron-down";
import * as Style from "~/styles/module.styles";
import { useUpdateOnSectionChange } from "~/hooks/use-update-on-section-change";
import { Modal } from "~/components/modal/modal";
import { Navigation } from "~/components/navigation/navigation";
import { useRestoreSection } from "~/hooks/use-restore-section";
import { getModule1ListConfig } from "~/config/module-1/content/module-1-nav";
import { useEffect } from "react";
import { module1MarisolPathContent } from "~/config/module-1/content/module-1-marisol-path";
import { module1OmarPathContent } from "~/config/module-1/content/module-1-omar-path";

export function MainModule1() {
  const { showDownArrow, activeSectionCb } = useUpdateOnSectionChange();
  const bookmark = appState((state) => state.bookmark);
  const { scenarios, isIntroModalOpen } = bookmark

  useRestoreSection();

  useEffect(() => {
    if (scenarios.length === 0) {
      appState.getState().updateBookmark({ scenarios: getModule1ListConfig() });
    }
  }, []);

  return (
    <Style.Wrapper>
      <Header title={""} />
      <Modal content={module1Intro.modal} isModalOpen={isIntroModalOpen} />
      <Navigation title="Part 1 – Building Behaviors" />
      {showDownArrow && (
        <Style.DownArrowWrapper>
          <ChevronDownIcon />
        </Style.DownArrowWrapper>
      )}
      {/* Section 1 */}
      <InterSection id="S0S1" onActiveCb={activeSectionCb} >
        <TextAndImage content={module1Intro.section2.content} imgSrc={module1Intro.section2.image} />
      </InterSection>

      {/* Section 2 */}
      {/*
      <div className="section-marker" id="S0S2" />
      <InterSection id="S0S2" onActiveCb={activeSectionCb} useMarker>
        <TextAndImage content={module1Intro.section2.content} imgSrc={module1Intro.section2.image} />
      </InterSection>
      */}

      {/* Section 3 */}
      <div className="section-marker" id="S0S3" />
      <InterSection id="S0S3" onActiveCb={activeSectionCb} useMarker>
        <TextAndImage content={module1Intro.section3.content} imgSrc={module1Intro.section3.image} />
      </InterSection>

      {/* Section 4 */}
      <InterSection id="S0S4" onActiveCb={activeSectionCb} >
        <TextScene content={module1Intro.section4.content} />
      </InterSection>

      {/* Section 5 */}
      <div className="section-marker" id="S0S5" />
      <InterSection id="S0S5" onActiveCb={activeSectionCb} useMarker>
        <TextAndImage content={module1Intro.section5.content} imgSrc={module1Intro.section5.image} />
      </InterSection>

      {/* Section 6 */}
      <InterSection
        id="S0S6"
        onActiveCb={activeSectionCb}
        hideDownArrow
      >
        <ImagePathSelection
          data={{
            leftImgSrc: assets.characterImg1,
            leftImgTitle: module1Intro.section6.leftImgTitle,
            leftDescription: module1Intro.section6.leftDescription,
            onClickLeftSelection: () => {
              appState.getState().updateBookmark({ characterSelection: 1 });
              appState.getState().setShowDownArrow(true);
              appState.getState().updateBookmark({ scenarios: getModule1ListConfig('Omar') });
            },
            rightImgSrc: assets.characterImg2,
            rightImgTitle: module1Intro.section6.rightImgTitle,
            rightDescription: module1Intro.section6.rightDescription,
            onClickRightSelection: () => {
              appState.getState().updateBookmark({ characterSelection: 2 });
              appState.getState().setShowDownArrow(true);
              appState.getState().updateBookmark({ scenarios: getModule1ListConfig('Marisol') });
            },
          }}
          chosenPath={bookmark.characterSelection}
        />
      </InterSection>
      {bookmark.characterSelection === 1 && (
        <ScenarioOne activeSectionCb={activeSectionCb} config={module1OmarPathContent} />
      )}
      {bookmark.characterSelection === 2 && (
        <ScenarioOne activeSectionCb={activeSectionCb} config={module1MarisolPathContent} />
      )}
    </Style.Wrapper>
  );
}
