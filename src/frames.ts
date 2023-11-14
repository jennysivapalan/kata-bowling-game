export function createFrames(framesString: string) {
  const framesAsArray = framesString.split(" ");
  return framesAsArray.map((frame) => {
    if (frame === "X") return { turn1: Number(10) };
    else if (frame.includes("-")) {
      const turns = frame.split("-");
      const turnsAsNum = turns.map((t) => (t === "" ? 0 : Number(t)));
      return { turn1: turnsAsNum[0], turn2: turnsAsNum[1] };
    } else {
      const turns = frame.split("/");
      const turn1 = Number(turns[0]);
      const turn2 = turns[1] === "" ? 10 - turn1 : Number(turns[1]);
      return { turn1: turn1, turn2: turn2 };
    }
  });
}
