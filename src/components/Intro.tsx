import { project } from "../data/project";
import { Reveal } from "./Reveal";

const stats = [
  { num: String(project.plotCount), label: "Plots" },
  { num: String(project.approvals.length), label: "Approvals" },
  { num: "100%", label: "Gated" },
];

export function Intro() {
  return (
    <section id="intro" className="px-6 py-[52px]">
      <Reveal className="mb-7 text-center">
        <div className="eyebrow">Introducing</div>
        <h2 className="section-title">{project.name}</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="rounded-[18px] border border-brown-soft/[0.14] bg-cream p-6 shadow-plate">
          <p className="mb-3.5 text-[14.5px] leading-[1.9] text-brown-soft">
            Set within {project.address.village} on the growing Hosur corridor, {project.name} is
            a thoughtfully laid out gated community of premium residential plots — designed for
            families who value both serenity and connectivity.
          </p>
          <p className="text-[14.5px] leading-[1.9] text-brown-soft">
            Wide black-top roads, a dedicated park and complete civic infrastructure come together
            to create a rare, ready-to-build address {project.address.landmarks[0].toLowerCase()},{" "}
            {project.address.landmarks[1]}, Tamil Nadu.
          </p>

          <div className="mt-[22px] grid grid-cols-3 gap-2 border-t border-dashed border-brown-soft/[0.14] pt-5">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-xl font-semibold text-gold-deep">{s.num}</div>
                <div className="mt-1 text-[9px] uppercase tracking-wide text-brown-soft">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
