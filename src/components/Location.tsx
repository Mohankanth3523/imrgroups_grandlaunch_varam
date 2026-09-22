import { Navigation } from "lucide-react";
import { project } from "../data/project";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="location" className="px-6 py-[52px]">
      <Reveal className="mb-7 text-center">
        <div className="eyebrow">Prime Location</div>
        <h2 className="section-title">Where You&apos;ll Belong</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="overflow-hidden rounded-[18px] border border-brown-soft/[0.14] bg-cream shadow-plate">
          <a
            href={project.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block h-[170px]"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(28,163,224,0.35), transparent 55%), linear-gradient(135deg, #DCEFFA, #EAF4FA)",
            }}
          >
            <span className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 translate-y-[7px] animate-ripple rounded-full border-2 border-gold" />
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-[68%] text-maroon drop-shadow-[0_8px_10px_rgba(11,48,73,0.35)]"
            >
              <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
          </a>

          <div className="p-5">
            <div className="font-display text-[11px] tracking-[0.14em] text-gold-deep">Address</div>
            <div className="mt-1.5 text-sm leading-[1.75] text-brown-soft">
              {project.name}, <b className="text-maroon">{project.address.village}</b>,<br />
              {project.address.lines[0]},<br />
              {project.address.lines[1]}
            </div>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {project.address.landmarks.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-brown-soft/[0.14] bg-ivory-soft px-3 py-1.5 text-[10px] text-brown-soft"
                >
                  {chip}
                </span>
              ))}
            </div>
            <a
              href={project.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold mt-[18px] w-full"
            >
              <Navigation className="h-[15px] w-[15px]" strokeWidth={2} />
              Get Directions
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
