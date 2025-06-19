import { useEffect } from "react";
import { appState } from "~/state/app-state";

export const useRestoreSection = () => {
  const { lastScene } = appState((state) => state.bookmark);
  useEffect(() => {
    if (!lastScene) return;
    const element = document.getElementById(lastScene);
    if (element) {
      element.scrollIntoView(true);
    }
  }, []);
};
