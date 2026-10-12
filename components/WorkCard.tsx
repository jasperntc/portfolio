import { STATUS_LABELS, type Project } from "@/content/types";
import { ExternalLink } from "./ExternalLink";
import { WorkMedia } from "./WorkMedia";

export function WorkCard({ project }: { project: Project }) {
  const titleId = `work-${project.slug}`;

  return (
    <article
      aria-labelledby={titleId}
      className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-5"
    >
      {project.media && <WorkMedia media={project.media} />}

      <header className="flex items-baseline justify-between gap-4">
        <h3 id={titleId} className="font-serif text-2xl text-fg">
          {project.title}
        </h3>
        <p className="shrink-0 font-mono text-xs text-accent">
          {STATUS_LABELS[project.status]}
        </p>
      </header>

      <p className="text-muted">{project.summary.text}</p>

      {project.telemetry && (
        <p className="border-l-2 border-accent pl-3 text-sm text-muted">
          <span className="font-mono text-fg">{project.telemetry.value}</span>{" "}
          {project.telemetry.label}
        </p>
      )}

      {project.credit && (
        <p className="text-sm text-muted">Idea by {project.credit}</p>
      )}

      <ul className="flex flex-wrap gap-2" aria-label="Stack">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-xs text-fg"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.links.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {project.links.map((link) => (
            <li key={link.href}>
              <ExternalLink href={link.href}>{link.label}</ExternalLink>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
