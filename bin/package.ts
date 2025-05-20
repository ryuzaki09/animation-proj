import path from "node:path";
import url from "node:url";
import fs from "node:fs";
import { zip } from "zip-a-folder";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VERSION: "1.2" | "2004" = "2004";
const ROOT_DIR = path.resolve(__dirname, "..");
const SCORM_DIR = path.join(ROOT_DIR, "scorm");
const PACKAGES_DIR = path.join(ROOT_DIR, "packages");
const BUILD_DIR = path.join(ROOT_DIR, "build");

function replaceTemplate(template: string, key: string, value: string): string {
  const regex = new RegExp(`::${key}::`, "gmi");
  return template.replace(regex, value);
}

async function getAllFiles(directory: string): Promise<string[]> {
  const items = await fs.promises.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    items.map((item) => {
      const res = path.resolve(directory, item.name);
      return item.isDirectory() ? getAllFiles(res) : res;
    }),
  );
  return Array.prototype.concat(...files);
}

(async () => {
  try {
    const pkg = JSON.parse(await fs.promises.readFile(path.join(ROOT_DIR, "package.json"), "utf-8"));

    await fs.promises.rm(path.join(PACKAGES_DIR, "build"), { recursive: true, force: true });
    await fs.promises.cp(BUILD_DIR, path.join(PACKAGES_DIR, "build"), { recursive: true });

    const manifestTemplate = await fs.promises.readFile(path.join(SCORM_DIR, `imsmanifest-${VERSION}.xml`), "utf-8");
    const files = await getAllFiles(BUILD_DIR);

    let manifest = replaceTemplate(manifestTemplate, "name", pkg.name);
    manifest = replaceTemplate(
      manifest,
      "files",
      files
        .map((file) => {
          const href = file.replace(BUILD_DIR, ".").replace(path.sep, "/");
          return `<file href="${href}"/>`;
        })
        .join("\n"),
    );
    manifest = replaceTemplate(manifest, "version", String(pkg.version));

    await fs.promises.cp(path.join(SCORM_DIR, VERSION), path.join(PACKAGES_DIR, "build"), { recursive: true });
    await fs.promises.writeFile(path.join(PACKAGES_DIR, "build", "imsmanifest.xml"), manifest);

    await zip(path.join(PACKAGES_DIR, "build"), path.join(PACKAGES_DIR, "build.zip"));

    await fs.promises.rm(path.join(PACKAGES_DIR, "build"), { recursive: true, force: true });

    await fs.promises.rename(
      path.join(PACKAGES_DIR, "build.zip"),
      path.join(PACKAGES_DIR, `${pkg.name}-${pkg.version}.zip`),
    );

    console.log("SCORM package generated successfully");

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
