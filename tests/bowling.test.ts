import { totalScore, Frame, checkIfSpare } from "../src/bowling";

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

  it("it should error if the total or turn 1 and turn 2 add up to total greater than 10", () => {
    const frames: Frame[] = [
      {
        turn1: 6,
        turn2: 5,
      },
    ];

    expect(() => {
      totalScore(frames);
    }).toThrow("The total of turn 1 and turn 2 cannot be greater than 10");
  });
});

describe("test spare possibilities", () => {
  it("it calculate if a frame is a spare", () => {
    const frame: Frame = {
      turn1: 5,
      turn2: 5,
      runningTotal: 10,
    };

    expect(checkIfSpare(frame)).toBe(true);
  });
});
