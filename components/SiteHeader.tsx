import { profile } from "@/content/profile";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 sm:px-6">
      <a href="#top" className="font-medium text-fg">
        {profile.name}
      </a>
      <nav aria-label="Sections">
        <ul className="flex gap-5 text-sm text-muted">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
