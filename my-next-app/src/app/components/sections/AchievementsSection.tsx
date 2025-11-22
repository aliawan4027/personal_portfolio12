import { achievements } from "@/src/lib/portfolioData";

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--card)] px-4 py-8 sm:px-6 sm:py-10 space-y-4"
      aria-labelledby="achievements-title"
    >
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)]">
          Achievements
        </p>
        <h2
          id="achievements-title"
          className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)]"
        >
          Achievements
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Highlights of academic and professional recognition, including my
          award-winning final year project.
        </p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {achievements.map((ach) => (
          <article
            key={ach.id}
            className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 text-sm shadow-sm hover:border-[var(--accent)] hover:shadow-md transition-all"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {ach.type === "sport"
                ? "SPORTS ACHIEVEMENT"
                : ach.type === "professional"
                ? "PROFESSIONAL ACHIEVEMENT"
                : "ACADEMIC ACHIEVEMENT"}
            </p>
            <h3 className="mt-2 text-sm font-semibold text-[var(--foreground)]">
              {ach.title}
            </h3>
            {ach.year && (
              <p className="mt-1 text-[11px] text-[var(--muted-foreground)]">{ach.year}</p>
            )}
            <p className="mt-2 text-xs text-[var(--muted-foreground)] leading-relaxed">
              {ach.description}
            </p>
            {ach.assetUrl && (
              <a
                href={ach.assetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-[11px] font-medium text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                View Certificate
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
