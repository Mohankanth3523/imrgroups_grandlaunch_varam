import { project } from "../data/project";
import { Divider } from "./Ornaments";
import { Reveal } from "./Reveal";

export function Announcement() {
  return (
    <section id="announcement" className="bg-glow relative px-6 py-[52px] text-center opacity-90">
      <Reveal>
        <div className="eyebrow">The Grand Launch</div>
      </Reveal>
      <Reveal delay={0.08}>
        <Divider />
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mx-auto max-w-[360px] font-script text-[19px] leading-relaxed text-brown-soft">
          With hearts full of joy, {project.developer} requests the honour of your presence as
          we unveil <b>{project.name}</b> — a beautifully planned gated community coming to
          life in Hosur.
        </p>
      </Reveal>
      <Reveal delay={0.24}>
        <div className="mt-[18px] font-display text-[21px] tracking-wide text-maroon">
          {project.launchDateLong}
        </div>
      </Reveal>
    </section>
  );
}
