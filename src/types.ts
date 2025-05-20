import content from "~/config/content.ts";

export type Language = keyof typeof content;

export type ContentId = keyof (typeof content)[Language];
