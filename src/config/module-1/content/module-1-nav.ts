import { ModuleListConfig } from "~/types";

export const getModule1ListConfig: (name?: string) => ModuleListConfig = (characterName?: string) => {
  return [
    {
      startSectionId: "S0S1",
      completionId: "S1S1", // This is ID of the first section in the next module
      isCompleted: false,
      title: "Introduction",
    },
    {
      startSectionId: "S1S1",
      completionId: "S2S1",
      isCompleted: false,
      title: "Internet Access and Education",
    },
    {
      startSectionId: "S2S1",
      completionId: "S3S1",
      isCompleted: false,
      title: `${characterName || 'Character'} Receives a Mortgage Marketing Flyer in her Mail`,
    },
    {
      startSectionId: "S3S1",
      completionId: "S4S1",
      isCompleted: false,
      title: "Call with a Mortgage Consultant",
    },
    {
      startSectionId: "S4S1",
      completionId: "S4S9", // This is completionId of the last section in the module
      isCompleted: false,
      title: "The Role We All Play, When We Don’t Get It Right",
    },
  ]
};
