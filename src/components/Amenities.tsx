import { ShieldCheck, type LucideIcon } from "lucide-react";
import { project } from "../data/project";
import { Reveal } from "./Reveal";

/**
 * Hand-drawn line icons matched to each amenity. A few (road, street lamp,
 * swing) aren't in the Lucide set at the fidelity we want, so they're
 * authored as small inline SVGs in the same 1.6px-stroke line style as
 * the Lucide icons used elsewhere, for a fully consistent icon family.
 */
const icons: Record<(typeof project.amenities)[number], JSX.Element> = {
  "Black Top Roads": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round">
      <path d="M9 3 4 21" />
      <path d="M15 3l5 18" />
      <path d="M12 6.5v2M12 11.5v2M12 16.5v2" />
    </svg>
  ),
  "Street Lights": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-9" />
      <path d="M8.5 22h7" />
      <path d="M9.3 13h5.4l-1-6.3a1.8 1.8 0 0 0-3.4 0Z" />
      <path d="M12 2.6v1M9.3 3.6l.5 1M14.7 3.6l-.5 1" />
    </svg>
  ),
  "Water Facility": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path d="M12 2s6 7 6 12a6 6 0 1 1-12 0c0-5 6-12 6-12Z" />
    </svg>
  ),
  "Beautiful Park": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round">
      <path d="M12 3 6 12h3l-3.5 7h13L15 12h3Z" />
      <path d="M12 22v-4" />
    </svg>
  ),
  "STP Facility": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path d="M4 12a8 8 0 0 1 14.5-4.5M20 12a8 8 0 0 1-14.5 4.5" />
      <path d="M18 4v4h-4M6 20v-4h4" />
    </svg>
  ),
  "Children's Play Area": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16M4 6l3 14M20 6l-3 14M10.5 6 9.5 16M13.5 6l1 10M9 16h6" />
    </svg>
  ),
};

const GatedIcon = ShieldCheck as LucideIcon;

export function Amenities() {
  return (
    <section id="amenities" className="px-6 py-[52px]">
      <Reveal className="mb-7 text-center">
        <div className="eyebrow">Life, Elevated</div>
        <h2 className="section-title">Premium Amenities</h2>
      </Reveal>

      <div className="grid grid-cols-2 gap-3">
        {project.amenities.map((label, i) => (
          <Reveal key={label} delay={0.06 * (i + 1)}>
            <div className="rounded-2xl border border-brown-soft/[0.14] bg-cream px-3.5 py-5 text-center">
              <div className="mx-auto mb-2.5 h-[26px] w-[26px] text-gold-deep">{icons[label]}</div>
              <div className="font-display text-[11px] font-semibold leading-snug text-maroon">
                {label.split(" ").map((w, idx, arr) => (
                  <span key={idx}>
                    {w}
                    {idx < arr.length - 1 ? <br /> : null}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.5} className="mt-3">
        <div className="rounded-[14px] border border-brown-soft/[0.14] bg-cream px-2 py-5 text-center shadow-[0_10px_24px_-14px_rgba(11,48,73,0.25)]">
          <div className="mx-auto mb-2 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-gradient-to-br from-gold-pale to-gold-light text-maroon">
            <GatedIcon className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </div>
          <div className="font-display text-[11.5px] font-semibold text-maroon">
            {project.gatedCommunity.title}
          </div>
          <div className="mt-0.5 text-[8.5px] uppercase tracking-wide text-brown-soft">
            {project.gatedCommunity.sub}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
