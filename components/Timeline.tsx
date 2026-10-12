import type { Experience } from "@/content/types";
import { formatRange } from "@/lib/dates";
import { ExternalLink } from "./ExternalLink";

export function Timeline({ entries }: { entries: Experience[] }) {
  return (
    <ol className="border-l border-line">
      {entries.map((entry) => (
        <li key={`${entry.org}-${entry.start}`} className="relative pb-12 pl-6 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[5px] top-2 size-2.5 rounded-full border-2 border-accent bg-bg"
          />
          <p className="font-mono text-xs text-faint">
            {formatRange(entry.start, entry.end)} · {entry.location}
          </p>
          <h3 className="mt-1 font-serif text-2xl text-fg">
            {entry.role}, {entry.org}
          </h3>

          {entry.standout && (
            <p className="mt-3 text-sm text-muted">
              <span className="font-mono text-accent">{entry.standout.value}</span>{" "}
              {entry.standout.label}
            </p>
          )}

          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-muted marker:text-faint">
            {entry.bullets.map((bullet) => (
              <li key={bullet.text}>{bullet.text}</li>
            ))}
          </ul>

          <p className="mt-4 font-mono text-xs text-faint">
            {entry.stack.join(" · ")}
          </p>

          {entry.links && entry.links.length > 0 && (
            <ul className="mt-2 flex gap-5 text-sm">
              {entry.links.map((link) => (
                <li key={link.href}>
                  <ExternalLink href={link.href}>{link.label}</ExternalLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
