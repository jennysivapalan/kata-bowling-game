export type Frame = {
  turn1: number;
  turn2: number;
  runningTotal?: number;
  isSpare?: boolean;
};

export function totalScore(frames: Frame[]) {
  frames[frames.length - 1] = updateIfSpare(frames[frames.length - 1]);
  return calculateCurrentRunningTotal(frames);
}

export function updateIfSpare(frame: Frame) {
  if (frame.turn1 + frame.turn2 === 10) frame.isSpare = true;
  return frame;
}

function getLastFrameWithARunningTotal(frames: Frame[]) {
  if (frames.length === 1) return 0;
  else {
    const framesArray = frames as ReadonlyArray<Frame>;
    const framesWithRunningTotal = framesArray.filter(
      (frame) => frame.runningTotal
    );
    return framesWithRunningTotal[framesWithRunningTotal.length - 1]
      .runningTotal;
  }
}

export function calculateCurrentRunningTotal(frames: Frame[]) {
  const currentFrame = frames[frames.length - 1];
  const currentFrameTotal = currentFrame.turn1 + currentFrame.turn2;
  const previousKnownRunningTotal = getLastFrameWithARunningTotal(frames);

  if (currentFrameTotal > 10)
    throw new Error("The total of turn 1 and turn 2 cannot be greater than 10");

  if (previousKnownRunningTotal) {
    const previousFrame = frames[frames.length - 2];
    if (previousFrame && previousFrame.isSpare) {
      const firstTurnScore = 10 + currentFrame.turn1;
      return firstTurnScore + currentFrameTotal + previousKnownRunningTotal;
    } else return currentFrameTotal + previousKnownRunningTotal;
  } else return currentFrameTotal;
}
