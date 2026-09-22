import { project } from "../data/project";
import { useCountdown } from "../hooks/useCountdown";
import { Reveal } from "./Reveal";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const UNITS: { key: keyof ReturnType<typeof useCountdown>; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Mins" },
  { key: "seconds", label: "Secs" },
];

export function Countdown() {
  const value = useCountdown(project.launchDateISO);

  return (
    <section id="countdown" className="px-6 py-[52px]">
      <Reveal>
        <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-brown to-[#051620] px-5 pb-[30px] pt-[34px] shadow-plate after:absolute after:inset-2 after:rounded-xl after:border after:border-gold/35 after:content-['']">
          <div className="mb-[22px] text-center font-display text-xs tracking-[0.3em] text-gold-light">
            {value.done ? "The Grand Launch Has Arrived" : "Counting Down To The Grand Launch"}
          </div>
          <div className="grid grid-cols-4 gap-2.5">
            {UNITS.map((u) => (
              <div
                key={u.key}
                className="rounded-[10px] border border-gold/30 bg-white/[0.04] px-1 pb-2.5 pt-3 text-center"
              >
                <div className="font-display text-[26px] font-semibold tabular-nums text-gold-pale">
                  {pad(value[u.key] as number)}
                </div>
                <div className="mt-1 text-[8.5px] uppercase tracking-[0.18em] text-cream/65">
                  {u.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
