import { educations } from "@/src/lib/portfolioData";

export function EducationSection() {
  return (
    <section id="education" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0f172a]">
          Education
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {educations.map((edu) => (
            <article
              key={edu.id}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm shadow-sm"
            >
              <h3 className="text-sm font-semibold text-[#0f172a]">
                {edu.degree}
              </h3>
              <p className="text-xs text-slate-600">{edu.institution}</p>
              <p className="mt-1 text-[11px] text-slate-500">{edu.period}</p>
              {edu.description && (
                <p className="mt-2 text-xs text-slate-700">{edu.description}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
