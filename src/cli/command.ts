import { resolveSync } from "bun";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { install } from "..";

yargs(hideBin(process.argv))
  .command(
    "install <zip> <extractPath>",
    "Installs a Curse Forge Modpack from a zip file",
    (yargs) =>
      yargs
        .positional("zip", {
          description: "The path to the zip file",
          type: "string",
        })
        .positional("extractPath", {
          description: "The path where files will be extracted",
          type: "string",
        }),
    ({ zip, extractPath }) => {
      if (!zip) throw new Error("No zip file provided");
      const path = resolveSync(zip, process.cwd());
      install(path, extractPath ?? "./extracted/");
    }
  )
  .parse();
