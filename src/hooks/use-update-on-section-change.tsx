import { useCallback, useState } from "react";
import { appState } from "~/state/app-state";

export const useUpdateOnSectionChange = () => {
  const [sectionTitle, setSectionTitle] = useState<string | null>(null);
  const showDownArrow = appState((state) => state.showDownArrow);
  const { scenarios } = appState((state) => state.bookmark);


  const activeSectionCb = useCallback(
    (entry: IntersectionObserverEntry) => {
      const element = entry.target;

      // Get sections or div elements with session-marker class for problematic sticky sections
      const section = element.classList.contains("section-marker")
        ? (element.nextElementSibling as HTMLElement)
        : element;

      // Update the section title
      // const elementSectionTitle = section.getAttribute("data-title");
      // if (elementSectionTitle) {
      //   setSectionTitle(elementSectionTitle);
      // }
      // if (!elementSectionTitle) {
      //   setSectionTitle(null);
      // }
      // Update the app state with the last seen section ID
      const elementId = section.getAttribute("id");
      if (elementId && scenarios.length > 0) {
        appState.getState().updateBookmark({ lastScene: elementId });
      }

      // Update the arrow state
      const elementHideArrow = element.getAttribute("data-hide-arrow");
      appState.getState().setShowDownArrow(!!(elementHideArrow && elementHideArrow !== "true"));

      // Update scenario completions
      const updatedModules = scenarios.map((module) => {
        if (module.completionId === elementId && !module.isCompleted) {
          return { ...module, isCompleted: true };
        }
        return module;
      });

      // Only update if there are changes
      const hasChanges = updatedModules.some((module, idx) => module.isCompleted !== scenarios[idx].isCompleted);

      if (hasChanges) {
        appState.getState().updateBookmark({ scenarios: updatedModules });
      }
    },
    [scenarios],
  );

  return { sectionTitle, showDownArrow, activeSectionCb };
};
