import { Frame, totalScore } from "../src/bowling";

describe("test totalScore function", () => {
  it("it calculate the total score for 10 frames with no spares or strikes", () => {
    const frames: Frame[] = [
      {
        turn1: 5,
        turn2: 3,
      },
      {
        turn1: 0,
        turn2: 0,
      },
      {
        turn1: 2,
        turn2: 5,
      },
      {
        turn1: 3,
        turn2: 3,
      },
      {
        turn1: 3,
        turn2: 6,
      },
      {
        turn1: 3,
        turn2: 4,
      },
      {
        turn1: 5,
        turn2: 2,
      },
      {
        turn1: 2,
        turn2: 0,
      },
      {
        turn1: 5,
        turn2: 4,
      },
      {
        turn1: 0,
        turn2: 2,
      },
    ];
    expect(totalScore(frames)).toBe(57);
  });
});
