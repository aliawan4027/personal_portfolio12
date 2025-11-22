export function AboutSection() {
  return (
    <section
      id="about"
      className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--card)] px-4 py-8 sm:px-6 sm:py-10 space-y-4"
      aria-labelledby="about-title"
    >
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)]">
          About
        </p>
        <h2
          id="about-title"
          className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)]"
        >
          About & Career Objective
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          My background, goals, and what drives me as a software engineer.
        </p>
      </div>
      <div className="space-y-4">
        <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted-foreground)]">
          I am Muhammad Ali, a software engineer and AI enthusiast with a solid
          foundation in full‑stack and mobile development. My career objective
          is to leverage my technical skills and knowledge in software
          engineering to develop innovative solutions, contribute to impactful
          projects, and grow as a professional in a dynamic and challenging
          environment.
        </p>
        <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted-foreground)]">
          I have hands‑on experience with Flutter, Next.js, Python, AI model
          training (RAG, LLMs, YOLO), cloud platforms, and SEO. Beyond
          technical depth, I value leadership, communication, time management,
          and teamwork—skills I have practiced as a class representative,
          mentor, and instructor. Outside of work I enjoy traveling, nature,
          swimming, sports, and volunteering, all of which keep me curious and
          people‑focused.
        </p>
      </div>
    </section>
  );
}
