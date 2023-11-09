import { totalScore, Frame } from "../src/bowling";

describe("test total score  function", () => {
  it("it should add the total score for a set of 2 frames at bowling", () => {
    const frames: Frame[] = [
      {
        turn1: 4,
        turn2: 5,
        runningTotal: 9,
      },
      {
        turn1: 3,
        turn2: 4,
      },
    ];

    expect(totalScore(frames)).toBe(16);
  });
});
