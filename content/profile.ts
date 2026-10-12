import { sources } from "./sources";
import type { Profile } from "./types";

export const profile: Profile = {
  name: "Jasper Ng",
  headline: "I build web software, and I prove it works.",
  // Source: LinkedIn, headline ("5+ yrs").
  intro: {
    text: "Full-stack web developer with 5+ years in PHP, WordPress, React and AWS, now shipping in TypeScript and Next.js. Remote from Kota Kinabalu, Malaysia (UTC+8).",
    source: sources.linkedinHeadline,
  },
  about: [
    // Source: LinkedIn, About, first paragraph.
    {
      text: "I've spent 5+ years building and running production sites, fully remote, for companies in Singapore and Taiwan.",
      source: sources.linkedinAbout,
    },
    {
      text: "Lately I build with AI coding agents, and I test them. I care about proving code works, not just that it runs.",
    },
    {
      text: "I'm looking for a full-stack or software engineering role, remote or hybrid from Kota Kinabalu.",
    },
  ],
  education: {
    degree:
      "B.S. in Mechanical Engineering (Electrical and Control Engineering track)",
    school: "National Taipei University of Technology",
    start: "2016-09",
    end: "2020-06",
  },
  email: "hello@jasperntc.dev",
  links: [
    { label: "GitHub", href: "https://github.com/jasperntc" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jasperng-dev/" },
  ],
};

export const SITE_REPO = "https://github.com/jasperntc/portfolio";
