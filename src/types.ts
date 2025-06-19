import { modulesConfig } from "~/config/content";

export type Language = keyof typeof modulesConfig;

export type ContentId = keyof (typeof modulesConfig)[Language];

export type OptionsT = {
  title?: React.ReactElement;
  description?: React.ReactElement;
  btnText?: string;
  onClick?: () => void;
};

export type OptionsSelectT = {
  question: string;
  description: string;
  options: OptionsT[];
};

export type ColumnsEnum = 1 | 2;

export type SectionTitleT = string;

export type TextSceenContentT = {
  title?: React.ReactElement;
  description?: React.ReactElement;
};

export type TextSceenSectionT = {
  sectionTitle: SectionTitleT;
  content: TextSceenContentT;
  columns?: ColumnsEnum;
};

export type TextSceenWithFadeScrollSectionT = {
  sectionTitle: SectionTitleT;
  content: React.ReactElement[];
  image: string;
};

export type TextAndImageSectionT = {
  sectionTitle: SectionTitleT;
  content?: React.ReactElement[];
  contentWithDownload?: (onDownload: () => void, hasDownloaded: boolean) => React.ReactElement[];
  image: string;
};

export type TextAndImageToFullSectionT = {
  sectionTitle: SectionTitleT;
  firstContent: React.ReactElement;
  image: string;
  secondContent: React.ReactElement
}

export type BackgroundVideoSectionT = {
  sectionTitle: string;
  content: React.ReactElement;
  video: string;
};

export type BackgroundImageSectionT = {
  sectionTitle: SectionTitleT;
  content: React.ReactElement;
  image: string;
};

export type VideoSceneT = {
  sectionTitle: SectionTitleT;
  content: React.ReactNode[];
  video: string;
};

export type FlipCardsT = {
  question: string;
  description: string;
  cards: {
    frontContent: React.ReactElement;
    backContent: React.ReactElement;
  }[];
};

export interface Module1IntroI {
  modal: {
    title: string;
    description: React.ReactElement;
    btnText: string;
    onClose: () => void;
  };
  section1: TextSceenSectionT;
  section2: TextAndImageSectionT;
  section3: TextAndImageSectionT;
  section4: TextSceenSectionT;
  section5: TextAndImageSectionT;
  section6: {
    id: string;
    leftImgTitle: string;
    leftDescription: string;
    rightImgTitle: string;
    rightDescription: string;
  };
}

interface Module1Scenario1I {
  section1: BackgroundVideoSectionT | BackgroundImageSectionT;
  section2: BackgroundImageSectionT;
  section3: BackgroundImageSectionT;
  section4: TextSceenSectionT;
  section5: BackgroundImageSectionT;
  section6: TextAndImageSectionT;
  section7: BackgroundImageSectionT;
  section8: TextAndImageSectionT;
  section9: {
    content: OptionsSelectT;
  };
  section10: {
    image: string;
    option1content: React.ReactElement[];
    option2content: React.ReactElement[];
  };
  section11: {
    image: string;
    video?: string;
    content?: React.ReactElement[];
    content1?: React.ReactElement[];
    content2?: React.ReactElement[];
  };
  section12: {
    image: string;
    content: React.ReactElement[];
  };
}

interface Module1Scenario2I {
  section1: BackgroundImageSectionT;
  section2: BackgroundImageSectionT;
  section3: TextSceenSectionT;
  section4: TextAndImageSectionT;
  section5: {
    content: OptionsSelectT;
  };
  section6: {
    option1Img: string;
    option2Img: string;
    option1content: React.ReactElement[];
    option2content: React.ReactElement[];
  };
  section7: TextAndImageSectionT;
  section8: TextAndImageSectionT;
  section9: TextAndImageSectionT;
  section10: BackgroundImageSectionT;
  section11: TextSceenSectionT;
  section12: {
    sectionTitle: string;
    content: React.ReactElement;
    onClickReveal: () => void;
  };
  section13: {
    video: string;
    content1: React.ReactElement[];
    content2: React.ReactElement[];
  };
}

interface Module1Scenario3I {
  section1: BackgroundImageSectionT;
  section2: BackgroundImageSectionT;
  section3: TextSceenSectionT;
  section4: TextAndImageToFullSectionT;
  section5: BackgroundImageSectionT;
  section6: TextAndImageSectionT;
  section7: {
    content: OptionsSelectT;
  };
  section8: {
    option1content: React.ReactElement[];
    option2content: React.ReactElement[];
  };
  section9: TextAndImageSectionT;
  section10: {
    sectionTitle: SectionTitleT;
    content: FlipCardsT;
    onCompleteFn: () => void;
  };
  section11: {
    video: string;
    content1: React.ReactElement[];
    content2: React.ReactElement[];
  };
  section12: {
    contents: {
      fixedText: React.ReactElement;
      content: React.ReactElement[];
    };
  };
  section13: {
    content: FlipCardsT;
    onCompleteFn: () => void;
  };
  section14: TextSceenSectionT;
}

interface Module1Scenario4I {
  section1: BackgroundVideoSectionT;
  section2: TextSceenSectionT;
  section3: TextAndImageSectionT;
  section4: BackgroundImageSectionT;
  section5: TextAndImageSectionT;
  section6: { content: OptionsSelectT; onSubmit?: (answer: number) => void };
  section7: {
    optionImg: string;
    option1content: React.ReactElement[];
    option2content: React.ReactElement[];
    option3content: React.ReactElement[];
  };
  section8: VideoSceneT;
  section9: TextAndImageSectionT;
}

export interface Module1PathI {
  scenario1: Module1Scenario1I;
  scenario2: Module1Scenario2I;
  scenario3: Module1Scenario3I;
  scenario4: Module1Scenario4I;
}

export interface Module2IntroI {
  modal: {
    title: string;
    description: React.ReactElement;
    btnText: string;
    onClose: () => void
  };
  preIntroModal: {
    title: string;
    description: React.ReactElement;
    btnText: string;
    onClose: () => void
  },
  section1: {
    sectionTitle: SectionTitleT;
    video: string;
  };
  section2: TextSceenSectionT;
  section3: TextAndImageSectionT;
  section4: {
    instructions: React.ReactElement;
    leftImgTitle: string;
    leftDescription: string;
    rightImgTitle: string;
    rightDescription: string;
    startingModal?: {
      content: React.ReactElement;
      onCloseCb: () => void;
    }
  };
}

export interface Scenario1PathMarisolModule2I {
  section1: TextSceenSectionT;
  section2: TextSceenSectionT;
  section3: TextSceenSectionT;
  section4: TextSceenSectionT;
  section5: TextSceenSectionT;
  section6: TextSceenSectionT;
  section7: TextSceenSectionT;
  section8: TextSceenSectionT;
  section9: TextSceenSectionT;
  section10: TextSceenSectionT;
}

export interface Scenario2PathMarisolModule2I {
  section1: BackgroundImageSectionT;
  section2: BackgroundImageSectionT;
  section3: TextSceenSectionT;
  section4: TextSceenWithFadeScrollSectionT;
  section5: {
    content: OptionsSelectT;
  };
  section6: {
    image: string;
    option1content: React.ReactElement[];
    option2content: React.ReactElement[];
  };
  section7: BackgroundImageSectionT;
  section8: TextAndImageSectionT;
  section9: TextAndImageSectionT;
  section10: TextSceenSectionT;
  section11: TextSceenSectionT;
  section12: TextSceenSectionT;
  section13: TextAndImageSectionT;
  section14: {
    content: OptionsSelectT;
  };
  section15: {
    image: string;
    option1content: React.ReactElement[];
    option2content: React.ReactElement[];
  };
  section16: {
    video: string;
    content1: React.ReactElement[];
    content2: React.ReactElement[];
  };
  section17: BackgroundImageSectionT;
  section18: TextAndImageSectionT;
  section19: {
    content: OptionsSelectT;
  };
  section20: {
    option1content: React.ReactElement[];
    option2content: React.ReactElement[];
  };
  section21: TextAndImageSectionT;
}

export interface Scenario3PathMarisolModule2I {
  section1: BackgroundImageSectionT;
  section2: BackgroundImageSectionT;
  section3: TextAndImageSectionT;
  section4: {
    sectionTitle: SectionTitleT;
    revealContent: React.ReactElement[];
    mobileScreens: React.ReactElement[];
    content: { phoneContent: React.ReactElement, revealContent: React.ReactElement, showDownArrow: boolean }[]
  };
  section5: TextAndImageSectionT;
  section6: TextAndImageSectionT;
  section7: TextAndImageSectionT;
}

export interface Scenario4PathMarisolModule2I {
  section1: BackgroundVideoSectionT;
  section2: BackgroundImageSectionT;
  section3: TextSceenSectionT;
  section4: TextSceenSectionT;
  section5: BackgroundImageSectionT;
  section6: TextSceenSectionT;
  section7: BackgroundImageSectionT;
  section8: TextAndImageSectionT;
  section9: TextAndImageSectionT;
  section10: TextAndImageSectionT;
  section11: TextAndImageSectionT;
  section12: TextAndImageSectionT;
  section13: TextAndImageSectionT;
  section14: TextAndImageSectionT;
}
export interface Module2MarisolPathContentI {
  scenario1: Scenario1PathMarisolModule2I;
  scenario2: Scenario2PathMarisolModule2I;
  scenario3: Scenario3PathMarisolModule2I;
  scenario4: Scenario4PathMarisolModule2I;
}

export type ModuleItemT = {
  startSectionId: string;
  completionId: string;
  isCompleted: boolean;
  title: string;
};

export type ModuleListConfig = ModuleItemT[];
