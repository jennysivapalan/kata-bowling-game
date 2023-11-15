import { Frame } from "./frame.types";

export function totalScore(frames: Frame[]) {
  return frames.reduce((acc, frame) => acc + getFrameScore(frame, frames), 0);
}

function getFrameScore(frame: Frame, frames: Frame[]) {
  const indexOfFrame = frames.indexOf(frame);

  if (frames.length === 12 && indexOfFrame == 11 && frames[11] === frame) {
    return frames[11].turn1;
  } else if (indexOfFrame < 10) {
    if (frame.isStrike) return getFrameScoreIfStrike(frames, indexOfFrame + 1);
    else {
      return frame.isSpare
        ? getFrameScoreIfSpare(frames[indexOfFrame + 1])
        : frame.turn1 + getTurnTwo(frame);
    }
  } else return 0;
}

function getFrameScoreIfStrike(frames: Frame[], nextFrameIndex: number) {
  if (frames[nextFrameIndex].turn1 === 10 && nextFrameIndex < 10) {
    return 10 + 10 + frames[nextFrameIndex + 1].turn1;
  } else
    return (
      10 + frames[nextFrameIndex].turn1 + getTurnTwo(frames[nextFrameIndex])
    );
}

function getFrameScoreIfSpare(nextFrame: Frame) {
  return 10 + nextFrame.turn1;
}

function getTurnTwo(frame: Frame) {
  return frame.turn2 ? frame.turn2 : 0;
}
