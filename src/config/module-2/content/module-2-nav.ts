import { ModuleListConfig } from "~/types";

export const module2ListConfig: ModuleListConfig = [
  {
    startSectionId: "S0S1",
    completionId: "S1S1", // This is ID of the first section in the next module
    isCompleted: false,
    title: "The Human Impact Film: Claudia’s Story",
  },
  {
    startSectionId: "S1S1",
    completionId: "S2S1",
    isCompleted: false,
    title: "Mortgage Products",
  },
  {
    startSectionId: "S2S1",
    completionId: "S3S1",
    isCompleted: false,
    title: "Searching for a Lender",
  },
  {
    startSectionId: "S3S1",
    completionId: "S4S1",
    isCompleted: false,
    title: "Reputational Risk & Consequences",
  },
  {
    startSectionId: "S4S1",
    completionId: "S4S14", // This is completionId of the last section in the module
    isCompleted: false,
    title: "Future Impacts",
  },
];
