import { sources } from "./sources";
import type { Experience } from "./types";

// Newest first. Every number below traces to a source.

export const experience: Experience[] = [
  {
    org: "Independent and freelance",
    role: "Developer",
    start: "2023-04",
    end: null,
    location: "Remote",
    bullets: [
      // Source: Touchstone README, "Verify it yourself" (CLAIMS line).
      {
        text: "Touchstone: a pre-registered evaluation of Claude Code skills. One offline command re-checks all 166 published claims.",
        source: sources.touchstoneReadme,
      },
      {
        text: "Verde Resources: a corporate site with a React scroll-animated front page on a custom WordPress theme.",
      },
      {
        text: "Built4You: friends' app ideas, built in public.",
      },
    ],
    stack: ["Python", "React", "WordPress", "TypeScript", "Next.js"],
  },
  {
    org: "Wine Kin",
    role: "Web Developer",
    start: "2023-07",
    end: "2026-03",
    location: "Singapore, remote",
    // Source: LinkedIn, Experience: Wine Kin, "SEO & Troubleshooting" bullet.
    standout: {
      value: "50%+",
      label: "organic traffic within 6 months",
      source: sources.linkedinWineKin,
    },
    bullets: [
      // Source: LinkedIn, Experience: Wine Kin, "Cloud Infrastructure & DevOps" bullet.
      {
        text: "Sole technical lead for the site and its AWS environment. Fixed the database bottlenecks that threatened uptime, with no unplanned downtime over 24 months.",
        source: sources.linkedinWineKin,
      },
      {
        text: "Built a custom WordPress theme synced in real time with the Wine Hub inventory API.",
      },
      // Source: LinkedIn, Experience: Wine Kin, "Custom API & Plugin Development" bullet.
      {
        text: "Replaced paid premium plugins with an in-house plugin for API-driven product tables, saving about USD 500 a month in licence fees.",
        source: sources.linkedinWineKin,
      },
      // Source: LinkedIn, Experience: Wine Kin, "SEO & Troubleshooting" bullet.
      {
        text: "Grew organic traffic by 50%+ within 6 months with semantic HTML, technical SEO and faster pages.",
        source: sources.linkedinWineKin,
      },
    ],
    stack: ["WordPress", "PHP", "AWS", "MySQL"],
    links: [{ label: "winekin.com", href: "https://www.winekin.com/" }],
  },
  {
    org: "Appbrewerie",
    role: "Software Developer",
    start: "2021-10",
    end: "2023-03",
    location: "Kota Kinabalu, remote",
    bullets: [
      // Source: LinkedIn, Experience: Appbrewerie, first bullet.
      {
        text: "Set up and ran LEMP servers hosting about 6 client sites.",
        source: sources.linkedinAppbrewerie,
      },
      { text: "Built booking, check-in and WooCommerce plugins for WordPress." },
      { text: "Helped build ReviewBah, a local business review app." },
      { text: "Built frontend pages with Vue.js, Tailwind CSS and Elementor." },
    ],
    stack: ["PHP", "WordPress", "Vue.js", "Tailwind CSS", "Nginx", "MySQL"],
    links: [{ label: "reviewbah.com", href: "https://www.reviewbah.com/" }],
  },
  {
    org: "Ecohealth Taiwan",
    role: "WordPress Developer",
    start: "2020-09",
    end: "2021-09",
    location: "Taiwan, remote",
    // Source: LinkedIn, Experience: Ecohealth Taiwan, first bullet.
    standout: {
      value: "20+",
      label: "WordPress plugins built for clients",
      source: sources.linkedinEcohealth,
    },
    bullets: [
      // Source: LinkedIn, Experience: Ecohealth Taiwan, first and second bullets.
      {
        text: "Built 20+ custom WordPress plugins for clients, including a points-based loyalty program.",
        source: sources.linkedinEcohealth,
      },
      { text: "Set up servers and domains for client sites." },
    ],
    stack: ["WordPress", "PHP", "WooCommerce"],
  },
];
