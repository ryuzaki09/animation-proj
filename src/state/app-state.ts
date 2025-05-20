import { create } from "zustand/react";
import type { Language } from "~/types.ts";
import { scorm } from "~/services/scorm.ts";

type Bookmark = {
  pathname: string;
  language: Language;
  completed: boolean;
  characterSelection: 1 | 2 | null
  decision1Answer: number | null
  decision2Answer: number | null
  decision3Answer: number | null
  decision4Answer: number | null
  decision5Answer: number | null
  laptopRevealed: boolean
  flipCards1Completed: boolean
  flipCards2Completed: boolean
};

type AppState = {
  initialize: () => Bookmark;
  bookmark: Bookmark;
  updateBookmark: (bookmark: Partial<Bookmark>) => void;
  showDownArrow: boolean;
  setShowDownArrow: (show: boolean) => void
};

const DEFAULT_BOOKMARK: Bookmark = {
  pathname: "/",
  language: "en",
  completed: false,
  characterSelection: null,
  decision1Answer: null,
  decision2Answer: null,
  decision3Answer: null,
  decision4Answer: null,
  decision5Answer: null,
  laptopRevealed: false,
  flipCards1Completed: false,
  flipCards2Completed: false
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
    showDownArrow: true,
    setShowDownArrow(show: boolean) {
      setState({ showDownArrow: show })
    }
  };
});
