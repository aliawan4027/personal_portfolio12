import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">Muhammad Ali</p>
          <p className="text-xs text-slate-400">
            Software Engineer · AI Developer · App Developer
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
          <div className="inline-flex items-center gap-1">
            <Phone className="h-3 w-3" />
            <span>03109766879</span>
          </div>
          <div className="inline-flex items-center gap-1">
            <Mail className="h-3 w-3" />
            <span>aliawan1170@gmail.com</span>
          </div>
          <div className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>Rawalpindi</span>
          </div>
          <a
            href="https://www.linkedin.com/in/muhammad-ali-b64386264/" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#3b82f6]"
          >
            <Linkedin className="h-3 w-3" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/aliawan4027"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#3b82f6]"
          >
            <Github className="h-3 w-3" />
            <span>GitHub</span>
          </a>
          <a
            href="https://github.com/softwareengineer698-glitch"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#3b82f6]"
          >
            <Github className="h-3 w-3" />
            <span>GitHub (Alt)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
