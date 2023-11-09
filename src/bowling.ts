export type Frame = { turn1: number; turn2: number; runningTotal?: number };

export function totalScore(frames: Frame[]) {
  const lastFrame = frames[frames.length - 1];
  const lastRunningTotal = lastFrame.turn1 + lastFrame.turn2;
  const previousRunningTotal = frames[frames.length - 2].runningTotal;
  if (previousRunningTotal) return previousRunningTotal + lastRunningTotal;
  else return lastRunningTotal;
}
