import { scorm as api } from "@gamestdio/scorm";
import { IS_IOS } from "~/config/consts.ts";
import { name } from "~/../package.json";

api.configure({ version: "2004", handleExitMode: true, handleCompletionStatus: true, debug: true });

const LOCAL_STORAGE_KEY_PREFIX = name ?? "package";

export const scorm = {
  api,
  initialize() {
    api.initialize();
    switch (api.version) {
      case "1.2":
        this.set("cmi.core.score.min", "0");
        this.set("cmi.core.score.max", "100");
        break;
      case "2004":
        this.set("cmi.score.min", "0");
        this.set("cmi.score.max", "100");
        break;
    }
    const terminate = () => {
      scorm.terminate();
    };
    window.removeEventListener("beforeunload", terminate);
    window.addEventListener("beforeunload", terminate);
    if (IS_IOS) {
      window.removeEventListener("unload", terminate);
      window.addEventListener("unload", terminate);
      window.removeEventListener("pagehide", terminate);
      window.addEventListener("pagehide", terminate);
    }
  },
  get<T = any>(key: string, defaultValue?: T) {
    const parse = (value: string) => {
      if (value === "") {
        return defaultValue;
      }
      try {
        return JSON.parse(value) ?? defaultValue;
      } catch {
        return defaultValue;
      }
    };
    if (!api.isActive) {
      return parse(localStorage.getItem([LOCAL_STORAGE_KEY_PREFIX, key].join(".")) ?? "");
    }
    const value = api.get(key);
    if (value === "") {
      return defaultValue;
    }
    return key === "cmi.suspend_data" ? parse(value) : value;
  },
  set(key: string, value: any) {
    if (!api.isActive) {
      return localStorage.setItem(
        [LOCAL_STORAGE_KEY_PREFIX, key].join("."),
        key === "cmi.suspend_data" ? JSON.stringify(value) : value,
      );
    }
    api.set(key, key === "cmi.suspend_data" ? JSON.stringify(value) : value);
    api.commit();
  },
  terminate() {
    if (!api.isActive) {
      return;
    }
    api.commit();
    api.terminate();
  },
  markCompleted() {
    switch (api.version) {
      case "1.2":
        this.set("cmi.core.lesson_status", "completed");
        break;
      case "2004":
        this.set("cmi.completion_status", "completed");
        this.set("cmi.success_status", "passed");
        break;
    }
  },
  getScore() {
    switch (api.version) {
      case "1.2":
        return parseFloat(this.get("cmi.core.score.raw", "0"));
      case "2004":
        return parseFloat(this.get("cmi.score.raw", "0"));
    }
  },
  setScore(score: number) {
    switch (api.version) {
      case "1.2":
        this.set("cmi.core.score.raw", `${score}`);
        break;
      case "2004":
        this.set("cmi.score.raw", `${score}`);
        break;
    }
  },
};

// For debugging
(window as any).SCORM_API = scorm;
