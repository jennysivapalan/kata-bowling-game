export type Frame = {
  turn1: number;
  turn2?: number;
  runningTotal?: number;
  isSpare?: boolean;
  isStrike?: boolean;
};

export function updateIfSpare(frame: Frame) {
  if (frame.turn2 && frame.turn1 + frame.turn2 === 10) frame.isSpare = true;
  return frame;
}

export function updateIfStrike(frame: Frame) {
  if (frame.turn1 === 10) frame.isStrike = true;
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
  const currentFrameTotal = currentFrame.turn2
    ? currentFrame.turn1 + currentFrame.turn2
    : currentFrame.turn1;
  const previousKnownRunningTotal = getLastFrameWithARunningTotal(frames);

  if (currentFrameTotal > 10)
    throw new Error("The total of turn 1 and turn 2 cannot be greater than 10");
  if (frames.length === 11 && frames[10].turn2 && frames[9].isSpare)
    throw new Error("11th frame for a spare can only have 1 go");

  if (haveAnotherGo(frames)) {
    frames[9].isSpare = true;
    return undefined;
  } else if (previousKnownRunningTotal) {
    const previousFrame = frames[frames.length - 2];
    if (previousFrame && previousFrame.isSpare) {
      if (frames.indexOf(previousFrame) === 9)
        return 10 + currentFrameTotal + previousKnownRunningTotal;
      else
        return (
          10 +
          currentFrame.turn1 +
          currentFrameTotal +
          previousKnownRunningTotal
        );
    } else if (previousFrame && previousFrame.isStrike) {
      return (
        10 +
        2 * currentFrame.turn1 +
        (currentFrame.turn2 ? 2 * currentFrame.turn2 : 0) +
        previousKnownRunningTotal
      );
    } else return currentFrameTotal + previousKnownRunningTotal;
  } else return currentFrameTotal;
}

export function setFrameRunningTotal(
  frame: Frame,
  currentRunningTotal: number
) {
  frame.runningTotal = currentRunningTotal;
}

export function haveAnotherGo(frames: Frame[]) {
  return frames.length === 10 && (frames[9].isSpare || frames[9].isStrike);
}
