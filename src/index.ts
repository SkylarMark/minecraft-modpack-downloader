import { Glob } from "bun";
import { write } from "bun";
import StreamZip from "node-stream-zip";
import type { ProjectInfo } from "@/types/project";
import type { CurseForgeManifest } from "./types/manifest";
import ora from "ora";
import { basename } from "node:path";

export function preLoad(extractPath: string) {
  const downloaded = [];
  const files = new Glob("**/*.{jar,zip}");

  for (const file of files.scanSync(extractPath)) {
    const fileName = basename(file);
    downloaded.push(fileName);
  }

  return downloaded;
}

export async function install(zipFilePath: string, extractPath: string) {
  const alreadyDownloaded = preLoad(extractPath);
  const zip = new StreamZip.async({ file: zipFilePath });
  const buffer = await zip.entryData("manifest.json");
  const manifest = JSON.parse(buffer.toString()) as CurseForgeManifest;
  await zip.close();

  for (const file of manifest.files) {
    const name = getFileName(file.downloadUrl);
    if (alreadyDownloaded.includes(name)) {
      ora().stopAndPersist({ symbol: "🌏", text: ` Skipped ${name}` });
      continue;
    }

    const spinner = ora(` Installing ${name}`).start();
    spinner.text = ` Reading metadata`;

    try {
      let type: ProjectInfo["type"] = "Mods";

      if (!name.includes(".jar")) {
        const data = await getProjectInfo(file.projectID);
        type = data.type;
      }

      spinner.text = ` Downloading`;
      const result = await fetch(file.downloadUrl);

      if (type === "Shaders") {
        spinner.text = ` Saving Shader Pack`;
        await write(`${extractPath}\\shaderpacks\\${name}`, result);
      }
      if (type === "Resource Packs") {
        spinner.text = ` Saving Resource Pack`;
        await write(`${extractPath}\\resourcepacks\\${name}`, result);
      }
      if (type === "Mods") {
        spinner.text = ` Saving Mod`;
        await write(`${extractPath}\\mods\\${name}`, result);
      }
      spinner.succeed(` ${name}`);
    } catch (e) {
      spinner.fail(` Failed to download ${name}`);
    }
  }

  console.log("Enjoy your modded Minecraft experience! 🎮");
}

function getFileName(url: string) {
  return decodeURIComponent(url.split("/")[6]);
}

async function getProjectInfo(projectID: number): Promise<ProjectInfo> {
  const project = await fetch(`https://api.cfwidget.com/${projectID}`);
  const json = (await project.json()) as ProjectInfo;
  return json;
}
