import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { heroData } from "@/src/lib/portfolioData";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--card)] px-4 py-8 sm:px-6 sm:py-10 space-y-4"
      aria-labelledby="contact-title"
    >
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)]">
          Contact
        </p>
        <h2
          id="contact-title"
          className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)]"
        >
          Contact
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Let&apos;s collaborate on impactful software and AI projects.
        </p>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-[1.2fr,1fr]">
        <form
          className="space-y-3 rounded-2xl bg-[var(--bg-elevated)] p-4"
          action={`mailto:${heroData.email}`}
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-xs text-[var(--muted-foreground)]">Name</label>
              <input
                className="mt-1 w-full rounded-md border border-[var(--border-subtle)] bg-[var(--card)] px-2 py-1.5 text-xs text-[var(--foreground)] outline-none focus:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-[var(--muted-foreground)]">Email</label>
              <input
                className="mt-1 w-full rounded-md border border-[var(--border-subtle)] bg-[var(--card)] px-2 py-1.5 text-xs text-[var(--foreground)] outline-none focus:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-[var(--muted-foreground)]">Message</label>
            <textarea
              className="mt-1 h-24 w-full resize-none rounded-md border border-[var(--border-subtle)] bg-[var(--card)] px-2 py-1.5 text-xs text-[var(--foreground)] outline-none focus:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              placeholder="Tell me about your project or opportunity"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-4 py-1.5 text-xs font-medium text-[var(--accent-foreground)] hover:bg-[var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            Send Message
          </button>
        </form>
        <div className="space-y-3 text-xs text-[var(--muted-foreground)]">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{heroData.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>{heroData.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>{heroData.city}</span>
          </div>
          <a
            href={heroData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
