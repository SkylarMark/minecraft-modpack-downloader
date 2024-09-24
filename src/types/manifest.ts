export interface CurseForgeManifest {
  manifestType: string;
  version: string;
  files: File[];
  manifestVersion: number;
  name: string;
  overrides: string;
  author: string;
  minecraft: Minecraft;
}

export interface File {
  projectID: number;
  fileID: number;
  downloadUrl: string;
  required: boolean;
}

export interface Minecraft {
  version: string;
  modLoaders: ModLoader[];
}

export interface ModLoader {
  id: string;
  primary: boolean;
}
