export type Frame = {
  turn1: number;
  turn2?: number;
  isSpare: boolean;
  isStrike: boolean;
};

export function totalScore(frames: Frame[]) {
  return frames.reduce((acc, frame) => acc + getFrameScore(frame, frames), 0);
}

function getFrameScore(frame: Frame, frames: Frame[]) {
  const indexOfFrame = frames.indexOf(frame);

  if (frames.length === 12 && indexOfFrame == 11 && frames[11] === frame) {
    return frames[11].turn1;
  } else if (frames.indexOf(frame) < 10) {
    const frameIndex = frames.indexOf(frame);
    if (frame.isStrike) return getFrameScoreIfStrike(frames[frameIndex + 1]);
    else {
      return frame.isSpare
        ? getFrameScoreIfSpare(frames[frameIndex + 1])
        : frame.turn1 + getTurnTwo(frame);
    }
  } else return 0;
}

function getFrameScoreIfStrike(nextFrame: Frame) {
  return 10 + nextFrame.turn1 + getTurnTwo(nextFrame);
}

function getFrameScoreIfSpare(nextFrame: Frame) {
  return 10 + nextFrame.turn1;
}

function getTurnTwo(frame: Frame) {
  return frame.turn2 ? frame.turn2 : 0;
}

export function updateIfSpare(frame: Frame) {
  if (frame.turn2 && frame.turn1 + frame.turn2 === 10) frame.isSpare = true;
  return frame;
}
