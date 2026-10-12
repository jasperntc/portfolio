export type Status = "live" | "complete" | "in-progress" | "planned";

export const STATUS_LABELS: Record<Status, string> = {
  live: "Live",
  complete: "Complete",
  "in-progress": "In progress",
  planned: "Planned",
};

/** Where a claim comes from. Every number on the site needs one. */
export type Source = {
  label: string;
  url: string;
};

/** A sentence that may carry a number. If it does, it needs a source. */
export type Fact = {
  text: string;
  source?: Source;
};

/** One real number shown on a card or timeline entry. */
export type Telemetry = {
  value: string;
  label: string;
  source: Source;
};

export type Link = {
  label: string;
  href: string;
};

export type Media =
  | {
      kind: "video";
      src: string;
      poster: string;
      width: number;
      height: number;
      alt: string;
    }
  | { kind: "placeholder"; label: string };

export type Project = {
  slug: string;
  title: string;
  status: Status;
  summary: Fact;
  stack: string[];
  telemetry?: Telemetry;
  links: Link[];
  media?: Media;
  /** Built4You idea-giver. Set only with their permission. */
  credit?: string;
};

export type Experience = {
  org: string;
  role: string;
  /** YYYY-MM */
  start: string;
  /** YYYY-MM, or null if current */
  end: string | null;
  location: string;
  standout?: Telemetry;
  bullets: Fact[];
  stack: string[];
  links?: Link[];
};

export type Education = {
  degree: string;
  school: string;
  start: string;
  end: string;
};

export type Profile = {
  name: string;
  headline: string;
  intro: Fact;
  about: Fact[];
  education: Education;
  email: string;
  links: Link[];
};
