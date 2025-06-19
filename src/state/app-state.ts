import { create } from "zustand/react";
import type { Language, ModuleListConfig } from "~/types.ts";
import { scorm } from "~/services/scorm.ts";

type TDecision = {
  answer: number;
  hideQuestion: boolean;
}

type Bookmark = {
  pathname: string;
  language: Language;
  scenarios: ModuleListConfig;
  isIntroModalOpen: boolean;
  lastScene: string | null;
  completed: boolean;
  characterSelection: 0 | 1 | 2;
  textAndImageScrolledToEnd?: boolean;
  decision1Answer: TDecision;
  decision2Answer: TDecision;
  decision3Answer: TDecision;
  decision4Answer: TDecision;
  decision5Answer: {
    option1?: number | null;
    option2?: number | null;
    option3?: number | null;
    lastAnswer?: number;
  } | null;
  module2PreIntroModalClicked: boolean;
  module2IntroVideoWatched: boolean,
  rememberCharacterModalClicked: boolean,
  laptopRevealed: boolean;
  phoneAnimationStarted: boolean;
  phoneRevealed: boolean;
  secondPhoneRevealed: boolean;
  flipCards1Completed: boolean;
  flipCards2Completed: boolean;
  finishScreen: boolean;
};

type AppState = {
  initialize: () => Bookmark;
  bookmark: Bookmark;
  updateBookmark: (bookmark: Partial<Bookmark>) => void;
  resetBookmark: () => void;
  isNavigationOpen: boolean;
  setIsNavigationOpen: (isNavigationOpen: boolean) => void;
  showDownArrow: boolean;
  setShowDownArrow: (show: boolean) => void;
};

const defaultOption = { answer: 0, hideQuestion: false }

const DEFAULT_BOOKMARK: Bookmark = {
  pathname: "/",
  language: "en",
  scenarios: [],
  lastScene: null,
  isIntroModalOpen: true,
  completed: false,
  characterSelection: 0,
  textAndImageScrolledToEnd: false,
  decision1Answer: defaultOption,
  decision2Answer: defaultOption,
  decision3Answer: defaultOption,
  decision4Answer: defaultOption,
  decision5Answer: null,
  module2PreIntroModalClicked: false,
  module2IntroVideoWatched: false,
  rememberCharacterModalClicked: false,
  laptopRevealed: false,
  phoneAnimationStarted: false,
  phoneRevealed: false,
  secondPhoneRevealed: false,
  flipCards1Completed: false,
  flipCards2Completed: false,
  finishScreen: false,
};

export const appState = create<AppState>((setState, getState) => {
  return {
    initialize() {
      scorm.initialize();
      const bookmark = scorm.get<Bookmark>("cmi.suspend_data", DEFAULT_BOOKMARK);
      setState({ bookmark });
      return bookmark;
    },
    bookmark: { ...DEFAULT_BOOKMARK },
    updateBookmark(bookmark) {
      const updatedBookmark = { ...getState().bookmark, ...bookmark };
      scorm.set("cmi.suspend_data", updatedBookmark);
      setState({ bookmark: updatedBookmark });
    },
    resetBookmark() {
      const resetBookmark = { ...DEFAULT_BOOKMARK, pathname: getState().bookmark.pathname }
      scorm.set("cmi.core.score.raw", "0");
      scorm.set("cmi.suspend_data", resetBookmark);
      setState({ bookmark: resetBookmark });
    },
    isNavigationOpen: false,
    setIsNavigationOpen(isNavigationOpen: boolean) {
      setState({ isNavigationOpen });
    },
    showDownArrow: true,
    setShowDownArrow(show: boolean) {
      setState({ showDownArrow: show });
    },
  };
});
