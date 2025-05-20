import parse from "html-react-parser";
import type { ContentId } from "~/types";
import content from "~/config/content";
import { appState } from "~/state/app-state";

type Props = {
  id: ContentId;
};

export default function Translate(props: Props) {
  const language = appState((state) => state.bookmark.language);
  return parse(content[language][props.id] ?? content.en[props.id]);
}

export function getTranslation(id: ContentId) {
  return content[appState.getState().bookmark.language][id] ?? content.en[id];
}
