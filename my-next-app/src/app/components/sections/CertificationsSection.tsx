import { certifications } from "@/src/lib/portfolioData";

export function CertificationsSection() {
  const seoCerts = certifications.filter((c) => c.category === "seo");
  const otherCerts = certifications.filter((c) => c.category !== "seo");

  return (
    <section
      id="certifications"
      className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--card)] px-4 py-8 sm:px-6 sm:py-10 space-y-4"
      aria-labelledby="certifications-title"
    >
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)]">
          Certifications
        </p>
        <h2
          id="certifications-title"
          className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)]"
        >
          Certifications
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          SEO, development, and AI certifications.
        </p>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-[var(--foreground)]">SEO</h3>
          <div className="mt-2 space-y-2">
            {seoCerts.map((cert) => {
              const content = (
                <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-2 text-xs text-[var(--foreground)]">
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-[11px] text-[var(--muted-foreground)]">{cert.issuer}</p>
                </div>
              );

              return cert.assetUrl ? (
                <a
                  key={cert.id}
                  href={cert.assetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
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
          <h3 className="text-sm font-semibold text-[var(--foreground)]">
            Development & AI
          </h3>
          <div className="mt-2 space-y-2">
            {otherCerts.map((cert) => {
              const content = (
                <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-2 text-xs text-[var(--foreground)]">
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-[11px] text-[var(--muted-foreground)]">{cert.issuer}</p>
                </div>
              );

              return cert.assetUrl ? (
                <a
                  key={cert.id}
                  href={cert.assetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
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
    </section>
  );
}
