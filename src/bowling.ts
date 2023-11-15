import { Frame } from "./frame.types";
import { createFrames } from "./frames";
import { totalScore } from "./bowling-total-score";

export function calculateTotalScore(framesAsString: string) {
  const frames = createFrames(framesAsString);
  return totalScore(frames);
}
