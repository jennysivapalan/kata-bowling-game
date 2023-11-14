export function createFrames(framesString: string) {
  const framesAsArray = framesString.split(" ");
  return framesAsArray.map((frame) => {
    if (frame === "X") return getStrikeFrame();
    else if (framesAsArray.indexOf(frame) === 10)
      return getEleventhFrame(frame);
    else return getScoreForFrame(frame);
  });
}

function getStrikeFrame() {
  return { turn1: Number(10), isSpare: false, isStrike: true };
}

function getEleventhFrame(frame: string) {
  if (frame.includes("/") || frame.includes("-")) {
    return getScoreForFrame(frame);
  } else return { turn1: Number(frame), isSpare: false, isStrike: false };
}

function getScoreForFrame(frame: string) {
  if (frame.includes("-")) {
    return getScoreForFrameWithMiss(frame);
  } else {
    return getScoreForFrameTwoTurns(frame);
  }
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
