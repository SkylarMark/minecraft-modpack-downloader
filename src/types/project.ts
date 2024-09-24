export interface ProjectInfo {
  id: number;
  title: string;
  summary: string;
  description: string;
  game: "minecraft";
  type: "Mods" | "Shaders" | "Resource Packs";
  urls: Urls;
  thumbnail: string;
  created_at: string;
  downloads: Downloads;
  license: string;
  donate: string;
  categories: string[];
  members: Member[];
  links: any[];
  files: File[];
  versions: Versions;
  download: Download;
}

export interface Urls {
  curseforge: string;
  project: string;
}

export interface Downloads {
  monthly: number;
  total: number;
}

export interface Member {
  title: string;
  username: string;
  id: number;
}

export interface File {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface Versions {
  "1.10.2": N1102[];
  "1.11.2": N1112[];
  "1.12.2": N1122[];
  "1.13.2": N1132[];
  "1.14.4": N1144[];
  "1.15.2": N1152[];
  "1.16.5": N1165[];
  "1.17.1": N1171[];
  "1.18.2": N1182[];
  "1.19": N119[];
  "1.19.1": N1191[];
  "1.19.2": N1192[];
  "1.19.3": N1193[];
  "1.19.4": N1194[];
  "1.20": N120[];
  "1.20.1": N1201[];
  "1.20.2": N1202[];
  "1.20.3": N1203[];
  "1.20.4": N1204[];
  "1.20.5": N1205[];
  "1.20.6": N1206[];
  "1.21": N121[];
  "1.21.1": N1211[];
  "1.8.9": N189[];
  "1.9.4": N194[];
  Iris: Iri[];
  OptiFine: OptiFine[];
}

export interface N1102 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1112 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1122 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1132 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1144 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1152 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1165 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1171 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1182 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N119 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1191 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1192 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1193 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1194 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N120 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1201 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1202 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1203 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1204 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1205 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1206 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N121 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N1211 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N189 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface N194 {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface Iri {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface OptiFine {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface Download {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  version: string;
  filesize: number;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}
