import { ShieldCheck } from "lucide-react";
import { project } from "../data/project";
import { Reveal } from "./Reveal";

export function Approvals() {
  return (
    <section
      id="approvals"
      className="px-6 py-[52px]"
      style={{
        background: "radial-gradient(120% 100% at 50% 0%, rgba(220,239,250,0.65), transparent 65%)",
      }}
    >
      <Reveal className="mb-7 text-center">
        <div className="eyebrow">Complete Peace of Mind</div>
        <h2 className="section-title">Approved &amp; Verified</h2>
      </Reveal>

      <div className="grid grid-cols-3 gap-3">
        {project.approvals.map((code, i) => (
          <Reveal key={code} delay={0.08 * (i + 1)}>
            <div className="rounded-[14px] border border-brown-soft/[0.14] bg-cream px-2 pb-3.5 pt-[18px] text-center shadow-[0_10px_24px_-14px_rgba(11,48,73,0.25)]">
              <div className="mx-auto mb-2.5 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-gradient-to-br from-gold-pale to-gold-light text-maroon shadow-[inset_0_0_0_1px_rgba(11,111,163,0.4)]">
                <ShieldCheck className="h-[22px] w-[22px]" strokeWidth={1.8} />
              </div>
              <div className="font-display text-[11.5px] font-semibold text-maroon">{code}</div>
              <div className="mt-0.5 text-[8.5px] uppercase tracking-wide text-brown-soft">
                Approved
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
