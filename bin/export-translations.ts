import path from "node:path";
import url from "node:url";
import fs from "node:fs";
import xlsx, { type WorkSheet } from "node-xlsx";
import content from "../src/config/content.ts";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");

type Key = keyof typeof content.en;

async function main() {
  const sheet: WorkSheet<string> = {
    name: "Translations",
    data: [["key", "original", "translated"]],
    options: {},
  };
  for (const key in content.en) {
    const value = content.en[key as Key];
    sheet.data.push([key, value, ""]);
  }
  await fs.promises.writeFile(path.join(ROOT_DIR, "storage", "translations.xlsx"), xlsx.build([sheet]), "utf-8");
}

await main().catch((err) => {
  console.error(err);
  process.exit(1);
});

console.log("Translations exported successfully");
process.exit(0);
