import { Car } from "lucide-react";
import { project } from "../data/project";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./StickyBar";

export function SiteVisit() {
  return (
    <section id="sitevisit" className="px-6 py-[52px]">
      <Reveal>
        <div className="rounded-[18px] bg-gradient-to-br from-gold-deep via-gold to-gold-light px-[22px] py-8 text-center text-brown shadow-plate">
          <Car className="mx-auto mb-3 h-[34px] w-[34px] text-cream" strokeWidth={1.6} />
          <h3 className="font-display text-[19px] tracking-wide text-cream">
            Complimentary Family Site Visit
          </h3>
          <p className="mx-auto mt-2 max-w-[300px] font-script text-[15.5px] italic leading-relaxed text-cream/90">
            Reserve your free cab pick-up and explore {project.name} with your loved ones — on
            us.
          </p>
          <a
            href={project.whatsapp.siteVisit}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-5 border-brown bg-brown text-gold-pale shadow-none"
          >
            <WhatsAppIcon className="h-[15px] w-[15px]" />
            Book Free Cab Visit
          </a>
        </div>
      </Reveal>
    </section>
  );
}
