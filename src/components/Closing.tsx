import { Phone } from "lucide-react";
import { project } from "../data/project";
import { LogoBadgeSmall } from "./Ornaments";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./StickyBar";

export function Closing() {
  return (
    <>
      <section
        id="closing"
        className="px-6 pt-[70px] text-center"
        style={{ background: "linear-gradient(180deg, #DCEFFA 0%, #0B3049 78%)" }}
      >
        <Reveal>
          <div className="eyebrow">With Warm Regards</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-2.5 font-display text-2xl font-semibold tracking-wide text-maroon">
            We Look Forward To
            <br />
            Welcoming You
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-2.5 max-w-[320px] font-script text-[16.5px] italic leading-relaxed text-brown-soft">
            Join us as we open the gates to a life of comfort, community and lasting value at{" "}
            {project.name}.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-[30px] rounded-[18px] border border-gold/35 bg-cream/[0.06] px-5 pb-6 pt-[26px]">
            <LogoBadgeSmall className="mb-3.5" />
            <div className="font-display text-xl font-semibold tracking-[0.18em] text-gold-pale">
              {project.developer.toUpperCase()}
            </div>
            <div className="mt-1 font-script text-[13.5px] italic text-cream/75">
              presents {project.name}
            </div>
            <div className="mx-auto my-[18px] h-px w-[60px] bg-gold/50" />
            <div className="font-display text-[15px] tracking-wide text-gold-light">
              {project.contact.displayPhone}
            </div>
            <div className="mt-2.5 text-[11px] uppercase tracking-[0.22em] text-cream/65">
              Grand Launch · {project.launchDateLabel}
            </div>

            <div className="mt-[26px] flex flex-col items-center gap-3.5">
              <a
                href={project.whatsapp.general}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold w-full"
              >
                <WhatsAppIcon className="h-[15px] w-[15px]" />
                Enquire on WhatsApp
              </a>
              <a
                href={project.contact.telHref}
                className="btn w-full border-gold/50 text-gold-pale"
              >
                <Phone className="h-[15px] w-[15px]" strokeWidth={2} />
                Call Now
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="bg-brown px-6 pb-[130px] pt-[22px] text-center text-[10px] leading-[1.7] tracking-wide text-cream/45">
        {project.approvals.join(" · ")} Approved &nbsp;|&nbsp; {project.address.village},{" "}
        {project.address.lines[0]}, {project.address.lines[1]}
        <br />
        Enquiry &amp; Site Visit:{" "}
        <a href={project.contact.telHref} className="text-gold-light/85 underline">
          {project.contact.displayPhone}
        </a>{" "}
        &nbsp;·&nbsp;{" "}
        <a
          href={project.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-light/85 underline"
        >
          View on Google Maps
        </a>
        <br />
        &copy; {new Date().getFullYear()} {project.developer}. This is an invitation for the Grand
        Launch event; not an offer of sale.
        <div className="mt-3.5 border-t border-cream/[0.12] pt-3.5 text-[12px] uppercase tracking-[0.1em] text-cream/50">
          Powered by{" "}
          <a
            href="https://wa.me/918838935124?text=Hi%2C%20I%20came%20across%20this%20website%20and%20I%27m%20interested%20in%20getting%20a%20similar%20website%20built."
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold-light/90 underline"
          >
            mkzora
          </a>{" "}
          ·{" "}
          <a
            href="https://wa.me/918838935124?text=Hi%2C%20I%20came%20across%20this%20website%20and%20I%27m%20interested%20in%20getting%20a%20similar%20website%20built."
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold-light/90 underline"
          >
            88389 35124
          </a>
        </div>
      </footer>
    </>
  );
}
