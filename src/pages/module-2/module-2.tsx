import { Header } from "~/components/header/header";
import { TextScene } from "~/components/text-scene/text-scene";
import { InterSection } from "~/components/intersect-section/intersect-section";
import { ImagePathSelection } from "~/components/image-path-selection/image-path-selection";
import { appState } from "~/state/app-state";
import { assets } from "~/config/module-1/assets";
import ChevronDownIcon from "~/components/icons/chevron-down";
import * as Style from "~/styles/module.styles";
import { VideoBackground } from "~/components/video-background/video-background";
import { Scenario1Module2 } from "./scenario1";
import { module2Intro } from "~/config/module-2/content/module-2-intro";
import { useUpdateOnSectionChange } from "~/hooks/use-update-on-section-change";
import { Modal } from "~/components/modal/modal";
import { useRestoreSection } from "~/hooks/use-restore-section";
import { Navigation } from "~/components/navigation/navigation";
import { module2ListConfig } from "~/config/module-2/content/module-2-nav";
import { useEffect } from "react";
import { module2MarisolPathContent } from "~/config/module-2/content/module-2-marisol-path";
import { module2OmarPathContent } from "~/config/module-2/content/module-2-omar-path";
import { TextAndImage } from "~/components/text-and-image/text-and-image";

export function MainModule2() {
  const { showDownArrow, activeSectionCb } = useUpdateOnSectionChange();
  const bookmark = appState((state) => state.bookmark);
  const { scenarios, isIntroModalOpen } = appState((state) => state.bookmark);

  useRestoreSection();

  useEffect(() => {
    if (scenarios.length === 0) {
      appState.getState().updateBookmark({ scenarios: module2ListConfig });
    }
  }, []);

  return (
    <Style.Wrapper>
      <Header title={""} />
      {showDownArrow && (
        <Style.DownArrowWrapper>
          <ChevronDownIcon />
        </Style.DownArrowWrapper>
      )}
      <Modal content={module2Intro.preIntroModal} isModalOpen={!bookmark.module2PreIntroModalClicked} />
      <Navigation title="Part 2 – Inspire Impact" />
      <div>
        <Modal content={module2Intro.modal} isModalOpen={isIntroModalOpen} />
      </div>
      {bookmark.module2PreIntroModalClicked && (
        <>
          {/* Section 1 */}
          <div className="section-marker" id="S0S1" />
          <InterSection
            id="S0S1"
            onActiveCb={activeSectionCb}
            useMarker
            hideDownArrow={!bookmark.module2IntroVideoWatched}
          >
            <VideoBackground
              videoSrc={module2Intro.section1.video}
              showDefaultControls
              autoPlay={!bookmark.isIntroModalOpen}
              muted={false}
              containVideo
              canSkip={bookmark.module2IntroVideoWatched}
              videoEndCb={() => {
                appState.getState().updateBookmark({ module2IntroVideoWatched: true })
                appState.getState().setShowDownArrow(true)
              }}
            />
          </InterSection>
          {bookmark.module2IntroVideoWatched && (
            <>
              {/* Section 2 */}
              <InterSection id="S0S2" onActiveCb={activeSectionCb} >
                <TextScene content={module2Intro.section2.content} />
              </InterSection>

              {/* Section 3 */}
              <InterSection id="S0S3" onActiveCb={activeSectionCb}>
                <TextAndImage content={module2Intro.section3.content} imgSrc={module2Intro.section3.image} />
              </InterSection>

              {/* Section 4 */}
              <InterSection
                id="S0S4"
                onActiveCb={activeSectionCb}
                hideDownArrow
              >
                <ImagePathSelection
                  data={{
                    leftImgSrc: assets.characterImg1,
                    leftImgTitle: module2Intro.section4.leftImgTitle,
                    leftDescription: module2Intro.section4.leftDescription,
                    onClickLeftSelection: () => {
                      appState.getState().updateBookmark({ characterSelection: 1 });
                      appState.getState().setShowDownArrow(true);
                    },
                    rightImgSrc: assets.characterImg2,
                    rightImgTitle: module2Intro.section4.rightImgTitle,
                    rightDescription: module2Intro.section4.rightDescription,
                    onClickRightSelection: () => {
                      appState.getState().updateBookmark({ characterSelection: 2 });
                      appState.getState().setShowDownArrow(true);
                    },
                  }}
                  chosenPath={bookmark.characterSelection}
                  startingModal={
                    bookmark.rememberCharacterModalClicked
                      ? undefined
                      : module2Intro.section4.startingModal
                  }
                />
              </InterSection>
              {bookmark.characterSelection === 1 && (
                <Scenario1Module2 activeSectionCb={activeSectionCb} config={module2OmarPathContent} />
              )}
              {bookmark.characterSelection === 2 && (
                <Scenario1Module2 activeSectionCb={activeSectionCb} config={module2MarisolPathContent} />
              )}
            </>
          )}
        </>
      )}
    </Style.Wrapper>
  );
}
