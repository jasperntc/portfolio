import { ExternalLink } from "./ExternalLink";

// The live sky from Claude Constellation, built from public repos only and holding totals only.
// ?embed has no controls, and the iframe ignores the pointer, so it can't capture the page's scroll.
const SKY = "https://jasperntc.github.io/claude-constellation/";

export function HeroSky() {
  return (
    <figure className="m-0">
      <div className="relative aspect-[4/3] overflow-hidden border border-line bg-[#04050a]">
        <iframe
          src={`${SKY}?sky=jasper&embed`}
          title="Claude Constellation sky"
          aria-hidden="true"
          tabIndex={-1}
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="no-referrer"
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
        <p className="pointer-events-none absolute left-3 top-3 m-0 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ffb547]">
          ✦ Live · Claude Constellation
        </p>
      </div>
      <figcaption className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 font-mono text-xs text-faint">
        <span>Every star is a prompt I sent to Claude Code.</span>
        <ExternalLink href={`${SKY}?sky=jasper`}>Explore the sky</ExternalLink>
      </figcaption>
    </figure>
  );
}
