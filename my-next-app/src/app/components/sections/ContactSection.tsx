import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { heroData } from "@/src/lib/portfolioData";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#0f172a] py-16 text-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-sm text-slate-300">
          Let&apos;s collaborate on impactful software and AI projects.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr,1fr]">
          <form
            className="space-y-3 rounded-2xl bg-slate-900/60 p-4"
            action={`mailto:${heroData.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label className="text-xs text-slate-300">Name</label>
                <input
                  className="mt-1 w-full rounded-md border border-slate-600 bg-slate-900 px-2 py-1.5 text-xs text-slate-50 outline-none focus:border-[#3b82f6]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300">Email</label>
                <input
                  className="mt-1 w-full rounded-md border border-slate-600 bg-slate-900 px-2 py-1.5 text-xs text-slate-50 outline-none focus:border-[#3b82f6]"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-300">Message</label>
              <textarea
                className="mt-1 h-24 w-full resize-none rounded-md border border-slate-600 bg-slate-900 px-2 py-1.5 text-xs text-slate-50 outline-none focus:border-[#3b82f6]"
                placeholder="Tell me about your project or opportunity"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>
          <div className="space-y-3 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{heroData.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{heroData.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{heroData.city}</span>
            </div>
            <a
              href={heroData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#3b82f6]"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
