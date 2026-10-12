import { profile } from "@/content/profile";
import { ExternalLink } from "./ExternalLink";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto max-w-5xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24"
    >
      <h1
        id="hero-title"
        className="max-w-3xl font-serif text-4xl leading-tight text-fg sm:text-6xl"
      >
        {profile.headline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{profile.intro.text}</p>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {profile.links.map((link) => (
          <li key={link.href}>
            <ExternalLink href={link.href}>{link.label}</ExternalLink>
          </li>
        ))}
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            {profile.email}
          </a>
        </li>
      </ul>
    </section>
  );
}
