import {
  totalScore,
  Frame,
  updateIfSpare,
  calculateCurrentRunningTotal,
} from "../src/bowling";

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
      calculateCurrentRunningTotal(frames);
    }).toThrow("The total of turn 1 and turn 2 cannot be greater than 10");
  });
});

describe("test spare possibilities", () => {
  it("it calculate if a frame is a spare", () => {
    const frame: Frame = {
      turn1: 5,
      turn2: 5,
    };

    expect(updateIfSpare(frame).isSpare).toBe(true);
  });

  it("it calculates current frame total with the spare in the previous frame", () => {
    const frames: Frame[] = [
      {
        turn1: 5,
        turn2: 3,
        runningTotal: 8,
      },
      {
        turn1: 5,
        turn2: 5,
        isSpare: true,
      },
      {
        turn1: 6,
        turn2: 3,
      },
    ];

    expect(totalScore(frames)).toBe(33);
  });
});
