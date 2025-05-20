import React from "react";
import * as Style from "~/pages/home-page/home-page.style.ts";
import Translate from "~/components/translate.tsx";
import { scorm } from "~/services/scorm.ts";
import { appState } from "~/state/app-state.ts";

export default function HomePage() {
  const completed = appState((state) => state.bookmark.completed);
  return (
    <Style.Wrapper>
      <h1>
        <Translate id="homePage" />
      </h1>
      <p>
        {completed ? (
          <button
            onClick={() => {
              window.close();
            }}
          >
            <Translate id="exit" />
          </button>
        ) : (
          <button
            onClick={() => {
              scorm.setScore(100);
              scorm.markCompleted();
              scorm.terminate();
              appState.getState().updateBookmark({ completed: true });
            }}
          >
            <Translate id="markAsComplete" />
          </button>
        )}
      </p>
    </Style.Wrapper>
  );
}
