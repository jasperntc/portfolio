import { profile, SITE_REPO } from "@/content/profile";
import { ExternalLink } from "./ExternalLink";

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl border-t border-line px-4 py-10 text-sm text-muted sm:px-6">
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            {profile.email}
          </a>
        </li>
        {profile.links.map((link) => (
          <li key={link.href}>
            <ExternalLink href={link.href}>{link.label}</ExternalLink>
          </li>
        ))}
        <li>
          <ExternalLink href={SITE_REPO}>Source</ExternalLink>
        </li>
      </ul>
      <p className="mt-6 text-faint">
        © 2026 {profile.name}. Code is MIT-licensed; text and images are not.
      </p>
    </footer>
  );
}
