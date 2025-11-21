import { publications } from "@/src/lib/portfolioData";

export function PublicationsSection() {
  return (
    <section id="publications" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0f172a]">
          Publications
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-slate-50 p-4 text-sm shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                IEEE Publication
              </p>
              <h3 className="mt-2 text-sm font-semibold text-[#0f172a]">
                {pub.title}
              </h3>
              <p className="mt-1 text-[11px] text-slate-600">
                {pub.venue} · {pub.year}
              </p>
              {pub.description && (
                <p className="mt-2 text-xs text-slate-700">{pub.description}</p>
              )}
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-[11px] font-medium text-[#3b82f6] hover:underline"
                >
                  View Paper
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
