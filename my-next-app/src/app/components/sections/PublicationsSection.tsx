import { publications } from "@/src/lib/portfolioData";

export function PublicationsSection() {
  return (
    <section
      id="publications"
      className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--card)] px-4 py-8 sm:px-6 sm:py-10 space-y-4"
      aria-labelledby="publications-title"
    >
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)]">
          Publications
        </p>
        <h2
          id="publications-title"
          className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)]"
        >
          Publications
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Research papers and academic publications.
        </p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {publications.map((pub) => (
          <article
            key={pub.id}
            className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 text-sm shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              IEEE Publication
            </p>
            <h3 className="mt-2 text-sm font-semibold text-[var(--foreground)]">
              {pub.title}
            </h3>
            <p className="mt-1 text-[11px] text-[var(--muted-foreground)]">
              {pub.venue} · {pub.year}
            </p>
            {pub.description && (
              <p className="mt-2 text-xs text-[var(--muted-foreground)] leading-relaxed">
                {pub.description}
              </p>
            )}
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-[11px] font-medium text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                View Paper
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
