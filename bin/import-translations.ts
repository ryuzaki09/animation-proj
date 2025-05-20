import path from "node:path";
import url from "node:url";
import fs from "node:fs";
import xlsx from "node-xlsx";
import prettier from "prettier";
import content from "../src/config/content.ts";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");

const [, , ...args] = process.argv;
const language = args[0];

type Row = [key: string, original: string, translated: string];
type Writeable<T> = { -readonly [P in keyof T]-?: T[P] };
type Key = keyof typeof content.en;
type Value = (typeof content.en)[Key];

async function main() {
  if (language === undefined) {
    console.error("No language passed\nUsage: npm run import-translations de");
    process.exit(1);
  }

  const sheets = xlsx.parse<Row>(path.join(ROOT_DIR, "storage", "translations.xlsx"));
  if (sheets.length === 0) {
    throw new Error("No sheets found");
  }
  const [, ...rows] = sheets[0].data;

  const keys = Object.keys(content.en);

  const importedContent: { [language: string]: Partial<Writeable<typeof content.en>> } = {
    [language]: {},
  };

  for (const key of keys) {
    const row = rows.find((row) => row[0] === key);
    if (row === undefined) {
      console.warn(`Key not found: ${key}`);
      continue;
    }
    importedContent[language][row[0] as Key] = row[2] as Value;
  }

  const updatedContent = JSON.stringify({ ...content, ...importedContent }, null, 2);

  await fs.promises.writeFile(
    path.join(ROOT_DIR, "src", "config", "content.ts"),
    await prettier.format(`const content = ${updatedContent} as const;\n\nexport default content;`, {
      parser: "typescript",
    }),
    "utf-8",
  );
}

await main().catch((err) => {
  console.error(err);
  process.exit(1);
});

console.log("Translations imported successfully");
process.exit(0);
