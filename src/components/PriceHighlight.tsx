import { project } from "../data/project";
import { Reveal } from "./Reveal";

export function PriceHighlight() {
  return (
    <section id="price" className="px-6 py-[52px] text-center">
      <Reveal>
        <div className="rounded-[18px] bg-gradient-to-br from-maroon to-[#04141f] px-5 py-[38px] shadow-plate">
          <div className="eyebrow !text-gold-light">Investment Begins At</div>
          <div className="mt-3 font-display text-[38px] font-bold text-gold-pale xs:text-[44px]">
            ₹{project.priceFrom}
            <sup className="relative -top-[0.9em] text-[0.4em]">{project.priceUnit}</sup>
          </div>
          <div className="font-script text-base italic text-cream/85">
            Onwards — plots for every family
          </div>
          <div className="mt-4 text-[10.5px] text-cream/55">{project.priceNote}</div>
        </div>
      </Reveal>
    </section>
  );
}
