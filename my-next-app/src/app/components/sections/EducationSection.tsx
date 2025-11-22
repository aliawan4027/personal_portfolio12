import { educations } from "@/src/lib/portfolioData";

export function EducationSection() {
  return (
    <section
      id="education"
      className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--card)] px-4 py-8 sm:px-6 sm:py-10 space-y-4"
      aria-labelledby="education-title"
    >
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)]">
          Education
        </p>
        <h2
          id="education-title"
          className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)]"
        >
          Education
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Academic background and degrees.
        </p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {educations.map((edu) => (
          <article
            key={edu.id}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 text-sm shadow-sm"
          >
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              {edu.degree}
            </h3>
            <p className="text-xs text-[var(--muted-foreground)]">{edu.institution}</p>
            <p className="mt-1 text-[11px] text-[var(--muted-foreground)]">{edu.period}</p>
            {edu.description && (
              <p className="mt-2 text-xs text-[var(--muted-foreground)] leading-relaxed">
                {edu.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
