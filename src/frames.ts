export function createFrames(framesString: string) {
  const framesAsArray = framesString.split(" ");
  return framesAsArray.map((frame) => {
    if (frame === "X") return getStrikeFrame(frame);
    else if (framesAsArray.indexOf(frame) === 11) {
      return getTwelthFrame(frame);
    } else if (framesAsArray.indexOf(frame) === 10)
      return getEleventhFrame(frame);
    else return getScoreForFrame(frame);
  });
}

function getStrikeFrame(frame: string) {
  return { turn1: Number(10), isSpare: false, isStrike: true };
}

function getTwelthFrame(frame: string) {
  return { turn1: Number(frame), isSpare: false, isStrike: false };
}

function getEleventhFrame(frame: string) {
  return frame.length === 1
    ? frame === "-"
      ? { turn1: Number(0), isSpare: false, isStrike: false }
      : { turn1: Number(frame), isSpare: false, isStrike: false }
    : getScoreForFrame(frame);
}

function getScoreForFrame(frame: string) {
  return frame.includes("-")
    ? getScoreForFrameWithMiss(frame)
    : getScoreForFrameTwoTurns(frame);
}

function getScoreForFrameWithMiss(frame: string) {
  const turns = frame.split("-");
  const turnsAsNum = turns.map((t) => (t === "" ? 0 : Number(t)));
  return {
    turn1: turnsAsNum[0],
    turn2: turnsAsNum[1],
    isSpare: false,
    isStrike: false,
  };
}

function getScoreForFrameTwoTurns(frame: string) {
  const turns = frame.split("/");
  const turn1 = Number(turns[0]);
  const turn2 = turns[1] === "" ? 10 - turn1 : Number(turns[1]);
  const isSpare = turn1 + turn2 === 10;
  return { turn1: turn1, turn2: turn2, isSpare: isSpare, isStrike: false };
}
