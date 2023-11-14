export function createFrames(framesString: string) {
  const framesAsArray = framesString.split(" ");
  return framesAsArray.map((frame) => {
    if (frame === "X") return { turn1: Number(10) };
    else {
      const turns = frame.split("/");
      const turn1 = Number(turns[0]);
      if (turns.length === 2) {
        const turn2 = turns[1] === "" ? 10 - turn1 : Number(turns[1]);
        return { turn1: turn1, turn2: turn2 };
      } else return { turn1: Number(turn1) };
    }
  });
}
