export type CompanyMention = {
  name: string;
  url: string;
};

export type CuePayload = {
  section: string;
  company?: CompanyMention;
};

export type CueTarget = {
  route: string;
  sectionId: string;
};

const CUE_TARGETS: Record<string, CueTarget> = {
  hero: { route: "/", sectionId: "hero" },
  kily: { route: "/work", sectionId: "kily" },
  kodo: { route: "/work", sectionId: "kodo" },
  dukaan: { route: "/work", sectionId: "dukaan" },
  leazkart: { route: "/work", sectionId: "leazkart" },
  projects: { route: "/projects", sectionId: "projects" },
  writing: { route: "/writing", sectionId: "writing" },
  connect: { route: "/", sectionId: "connect" },
};

export function resolveCueTarget(cueSection: string): CueTarget {
  return CUE_TARGETS[cueSection] ?? { route: "/", sectionId: cueSection };
}

export function parseCue(text: string): CuePayload | null {
  try {
    const data = JSON.parse(text);
    if (data && typeof data.section === "string") return data as CuePayload;
    return null;
  } catch {
    return null;
  }
}
