"use client";

import { achievements } from "@/src/lib/portfolioData";
import { useLanguage } from "../../../contexts/LanguageContext";
import { RandomColorCard } from "../../../components/ui/RandomColorCard";

export function AchievementsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="achievements"
      className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--card)] px-4 py-8 sm:px-6 sm:py-10 space-y-4"
      aria-labelledby="achievements-title"
    >
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)]">
          {t('achievements.title')}
        </p>
        <h2
          id="achievements-title"
          className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)]"
        >
          {t('achievements.subtitle')}
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          {t('achievements.description')}
        </p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {achievements.map((ach) => (
          <RandomColorCard
            key={ach.id}
            className="rounded-2xl bg-[var(--bg-elevated)] p-4 text-sm shadow-sm group"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {ach.type === "sport"
                ? t('achievements.categories.sports')
                : ach.type === "professional"
                ? "PROFESSIONAL ACHIEVEMENT"
                : t('achievements.categories.academic')}
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
                {t('achievements.viewCertificate')}
              </a>
            )}
          </RandomColorCard>
        ))}
      </div>
    </section>
  );
}
