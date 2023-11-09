export type Frame = { turn1: number; turn2: number; runningTotal?: number };

export function totalScore(frames: Frame[]) {
  const lastFrame = frames[frames.length - 1];
  const lastRunningTotal = lastFrame.turn1 + lastFrame.turn2;
  if (lastRunningTotal > 10)
    throw new Error("The total of turn 1 and turn 2 cannot be greater than 10");
  const previousRunningTotal = frames[frames.length - 2].runningTotal;
  if (previousRunningTotal) return previousRunningTotal + lastRunningTotal;
  else return lastRunningTotal;
}
