import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";
import { Timeline } from "@/components/Timeline";
import { WorkCard } from "@/components/WorkCard";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { formatMonth } from "@/lib/dates";

export default function Home() {
  const { education } = profile;

  return (
    <div id="top">
      <SiteHeader />
      <main>
        <Hero />

        <section
          aria-labelledby="work-title"
          id="work"
          className="mx-auto max-w-5xl scroll-mt-8 px-4 py-16 sm:px-6"
        >
          <SectionHeading id="work-title" label="Work" title="Selected projects" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="experience-title"
          id="experience"
          className="mx-auto max-w-5xl scroll-mt-8 px-4 py-16 sm:px-6"
        >
          <SectionHeading
            id="experience-title"
            label="Experience"
            title="Where I've worked"
          />
          <Timeline entries={experience} />
        </section>

        <section
          aria-labelledby="about-title"
          id="about"
          className="mx-auto max-w-5xl scroll-mt-8 px-4 py-16 sm:px-6"
        >
          <SectionHeading id="about-title" label="About" title="A bit about me" />
          <div className="max-w-2xl space-y-4 text-lg text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph.text}>{paragraph.text}</p>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            {education.degree}, {education.school},{" "}
            {formatMonth(education.start)} – {formatMonth(education.end)}.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
