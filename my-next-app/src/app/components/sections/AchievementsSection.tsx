import { achievements } from "@/src/lib/portfolioData";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          Achievements
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Highlights of academic and professional recognition, including my
          award-winning final year project.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {achievements.map((ach) => (
            <article
              key={ach.id}
              className="group rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-slate-50 p-4 text-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                {ach.type === "sport"
                  ? "SPORTS ACHIEVEMENT"
                  : ach.type === "professional"
                  ? "PROFESSIONAL ACHIEVEMENT"
                  : "ACADEMIC ACHIEVEMENT"}
              </p>
              <h3 className="mt-2 text-sm font-semibold text-[#0f172a]">
                {ach.title}
              </h3>
              {ach.year && (
                <p className="mt-1 text-[11px] text-slate-500">{ach.year}</p>
              )}
              <p className="mt-2 text-xs text-slate-700">{ach.description}</p>
              {ach.assetUrl && (
                <a
                  href={ach.assetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-[11px] font-medium text-[#3b82f6] hover:underline"
                >
                  View Certificate
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
