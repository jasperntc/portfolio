import type { Source } from "./types";

const LINKEDIN = "https://www.linkedin.com/in/jasperng-dev/";
const TOUCHSTONE = "https://github.com/jasperntc/touchstone";

export const sources = {
  linkedinHeadline: { label: "LinkedIn, headline", url: LINKEDIN },
  linkedinAbout: { label: "LinkedIn, About", url: LINKEDIN },
  linkedinWineKin: { label: "LinkedIn, Experience: Wine Kin", url: LINKEDIN },
  linkedinAppbrewerie: {
    label: "LinkedIn, Experience: Appbrewerie",
    url: LINKEDIN,
  },
  linkedinEcohealth: {
    label: "LinkedIn, Experience: Ecohealth Taiwan",
    url: LINKEDIN,
  },
  touchstoneReadme: {
    label: "Touchstone README",
    url: `${TOUCHSTONE}#readme`,
  },
} satisfies Record<string, Source>;

export const touchstoneLinks = {
  repo: TOUCHSTONE,
  findings: `${TOUCHSTONE}/blob/main/docs/findings.md`,
  errata: `${TOUCHSTONE}/blob/main/docs/errata.md`,
};
