import { sources, touchstoneLinks } from "./sources";
import type { Project } from "./types";

// Every number below traces to a source. No numbers are made up for the design.

export const projects: Project[] = [
  {
    slug: "touchstone",
    title: "Touchstone",
    status: "complete",
    summary: {
      text: "A pre-registered evaluation of whether Claude Code skills improve results. The pass bars were committed to git before any run, so they couldn't move after the results came in.",
    },
    // Source: Touchstone README, "In plain terms" and the F005 row of "What was measured".
    telemetry: {
      value: "0/15 → 15/15",
      label:
        "F005: target checks with the skill. It then failed a pre-registered harm check (−8.3 against a −5 limit), so nothing shipped.",
      source: sources.touchstoneReadme,
    },
    stack: ["Python", "Claude Code", "GitHub Actions"],
    links: [
      { label: "Repository", href: touchstoneLinks.repo },
      { label: "Findings", href: touchstoneLinks.findings },
      { label: "Errata", href: touchstoneLinks.errata },
    ],
  },
  {
    slug: "claude-constellation",
    title: "Claude Constellation",
    status: "live",
    summary: {
      text: "My Claude Code history as a night sky you can fly through. Every star is a prompt I sent, the dust around it is the tool calls Claude made to answer it, and a timeline replays the sky in the order I worked. A TypeScript CLI reads the local transcripts and keeps only totals, never prompts or code.",
    },
    stack: ["TypeScript", "three.js", "WebGL", "Node.js"],
    links: [
      { label: "Live demo", href: "https://jasperntc.github.io/claude-constellation/" },
      { label: "Repository", href: "https://github.com/jasperntc/claude-constellation" },
    ],
  },
  {
    slug: "build-story",
    title: "Build Story",
    status: "live",
    summary: {
      text: "Turns an app's git history into a vertical video of it growing: it builds every merged pull request in a throwaway clone, screenshots each build on a phone-sized screen, and records a captioned video for Reels with Chrome alone. No ffmpeg and no runtime dependencies.",
    },
    stack: ["TypeScript", "Node.js", "Chrome DevTools Protocol"],
    links: [{ label: "Repository", href: "https://github.com/jasperntc/build-story" }],
  },
  {
    slug: "verde-resources",
    title: "Verde Resources",
    status: "live",
    summary: {
      text: "Corporate site built end to end as the sole developer: a React front page with scroll-driven image-sequence animation, on a custom WordPress theme.",
    },
    stack: ["React", "WordPress", "PHP"],
    links: [{ label: "Visit site", href: "https://www.verderesources.com/" }],
    // Swapped for the compressed scroll recording once it exists.
    media: { kind: "placeholder", label: "Scroll recording coming soon" },
  },
  {
    slug: "built4you-ep-1",
    title: "Built4You, episode 1",
    status: "in-progress",
    summary: {
      text: "Friends send me app ideas. I pick one, build it in public, and post the build as Instagram stories.",
    },
    stack: ["TypeScript", "Next.js"],
    links: [],
  },
  {
    slug: "wine-kin",
    title: "Wine Kin",
    status: "live",
    summary: {
      text: "A custom WordPress theme synced in real time with the Wine Hub inventory API, on an AWS environment I ran as sole technical lead.",
    },
    // Source: LinkedIn, Experience: Wine Kin, "Cloud Infrastructure & DevOps" bullet.
    telemetry: {
      value: "24 months",
      label: "with no unplanned downtime",
      source: sources.linkedinWineKin,
    },
    stack: ["WordPress", "PHP", "AWS", "MySQL"],
    links: [{ label: "Visit site", href: "https://www.winekin.com/" }],
  },
];
