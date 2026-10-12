import { describe, expect, it } from "vitest";
import { experience } from "../content/experience";
import { profile } from "../content/profile";
import { projects } from "../content/projects";
import { STATUS_LABELS, type Fact, type Link, type Telemetry } from "../content/types";

const allTelemetry: Telemetry[] = [
  ...projects.flatMap((p) => (p.telemetry ? [p.telemetry] : [])),
  ...experience.flatMap((e) => (e.standout ? [e.standout] : [])),
];

const allFacts: Fact[] = [
  profile.intro,
  ...profile.about,
  ...projects.map((p) => p.summary),
  ...experience.flatMap((e) => e.bullets),
];

const allLinks: Link[] = [
  ...profile.links,
  ...projects.flatMap((p) => p.links),
  ...experience.flatMap((e) => e.links ?? []),
];

describe("sources", () => {
  it("every telemetry number has a source", () => {
    for (const t of allTelemetry) {
      expect(t.source.label, t.value).not.toBe("");
      expect(t.source.url, t.value).toMatch(/^https:\/\//);
    }
  });

  it("every sentence containing a number has a source", () => {
    // A number is a digit not glued to a letter, so names like "Built4You" don't count.
    const hasNumber = (text: string) => /(^|[^A-Za-z0-9])\d/.test(text);
    const unsourced = allFacts
      .filter((f) => hasNumber(f.text) && !f.source)
      .map((f) => f.text);
    expect(unsourced).toEqual([]);
  });
});

describe("projects", () => {
  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses only known statuses", () => {
    for (const p of projects) {
      expect(Object.keys(STATUS_LABELS)).toContain(p.status);
    }
  });

  it("credits an idea-giver only when explicitly set", () => {
    for (const p of projects) {
      if ("credit" in p) expect(p.credit?.trim(), p.slug).toBeTruthy();
    }
  });

  it("names a video's media files under /media/", () => {
    for (const p of projects) {
      if (p.media?.kind === "video") {
        expect(p.media.src).toMatch(/^\/media\/.+\.mp4$/);
        expect(p.media.poster).toMatch(/^\/media\/.+\.(jpg|webp|png)$/);
        expect(p.media.alt.trim()).not.toBe("");
      }
    }
  });
});

describe("Touchstone wording", () => {
  const touchstone = projects.find((p) => p.slug === "touchstone");
  const text = JSON.stringify(touchstone);

  it("cites F005 only", () => {
    expect(text).toContain("F005");
    expect(text).not.toMatch(/F00[1-4]/);
  });

  it("says it failed a pre-registered harm check", () => {
    expect(text).toContain("failed a pre-registered harm check");
    expect(text.toLowerCase()).not.toContain("hurts unrelated work");
  });

  it("links the errata", () => {
    expect(touchstone?.links.map((l) => l.href)).toContain(
      "https://github.com/jasperntc/touchstone/blob/main/docs/errata.md",
    );
  });
});

describe("experience", () => {
  it("is newest first: current roles, then by end date", () => {
    const ends = experience.map((e) => e.end ?? "9999-12");
    expect(ends).toEqual([...ends].sort().reverse());
  });

  it("ends after it starts", () => {
    for (const e of experience) {
      if (e.end) expect(e.end > e.start, e.org).toBe(true);
    }
  });
});

describe("links", () => {
  it("all use https", () => {
    for (const l of allLinks) expect(l.href, l.label).toMatch(/^https:\/\//);
  });

  it("uses the site email address", () => {
    expect(profile.email).toBe("hello@jasperntc.dev");
  });
});
