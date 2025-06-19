import parse from "html-react-parser";
import type { ContentId } from "~/types";
import { modulesConfig  } from "~/config/content";
import { appState } from "~/state/app-state";

type Props = {
  id: ContentId;
};

export default function Translate(props: Props) {
  const language = appState((state) => state.bookmark.language);
  return parse(modulesConfig [language][props.id] ?? modulesConfig .en[props.id]);
}

export function getTranslation(id: ContentId) {
  return modulesConfig[appState.getState().bookmark.language][id] ?? modulesConfig.en[id];
}
