import { useEffect, useState } from "react";

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

function computeCountdown(targetMs: number): CountdownValue {
  const diff = Math.max(0, targetMs - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
    done: diff <= 0,
  };
}

/** Live countdown to the given ISO date string, ticking every second. */
export function useCountdown(targetISO: string): CountdownValue {
  const targetMs = new Date(targetISO).getTime();
  const [value, setValue] = useState<CountdownValue>(() => computeCountdown(targetMs));

  useEffect(() => {
    const id = setInterval(() => setValue(computeCountdown(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  return value;
}
