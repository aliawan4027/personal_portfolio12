import { certifications } from "@/src/lib/portfolioData";

export function CertificationsSection() {
  const seoCerts = certifications.filter((c) => c.category === "seo");
  const otherCerts = certifications.filter((c) => c.category !== "seo");

  return (
    <section id="certifications" className="py-16 bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          Certifications
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-[#0f172a]">SEO</h3>
            <div className="mt-2 space-y-2">
              {seoCerts.map((cert) => {
                const content = (
                  <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900">
                    <p className="font-medium">{cert.title}</p>
                    <p className="text-[11px] text-slate-500">{cert.issuer}</p>
                  </div>
                );

                return cert.assetUrl ? (
                  <a
                    key={cert.id}
                    href={cert.assetUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:shadow-sm transition-shadow"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={cert.id}>{content}</div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#0f172a]">
              Development & AI
            </h3>
            <div className="mt-2 space-y-2">
              {otherCerts.map((cert) => {
                const content = (
                  <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900">
                    <p className="font-medium">{cert.title}</p>
                    <p className="text-[11px] text-slate-500">{cert.issuer}</p>
                  </div>
                );

                return cert.assetUrl ? (
                  <a
                    key={cert.id}
                    href={cert.assetUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:shadow-sm transition-shadow"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={cert.id}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
