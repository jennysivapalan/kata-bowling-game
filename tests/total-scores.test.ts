import { Frame, totalScore } from "../src/bowling";

describe("test totalScore function", () => {
  it("it calculate the total score for 10 frames with no spares or strikes", () => {
    const frames: Frame[] = [
      {
        turn1: 5,
        turn2: 3,
        isSpare: false,
      },
      {
        turn1: 0,
        turn2: 0,
        isSpare: false,
      },
      {
        turn1: 2,
        turn2: 5,
        isSpare: false,
      },
      {
        turn1: 3,
        turn2: 3,
        isSpare: false,
      },
      {
        turn1: 3,
        turn2: 6,
        isSpare: false,
      },
      {
        turn1: 3,
        turn2: 4,
        isSpare: false,
      },
      {
        turn1: 5,
        turn2: 2,
        isSpare: false,
      },
      {
        turn1: 2,
        turn2: 0,
        isSpare: false,
      },
      {
        turn1: 5,
        turn2: 4,
        isSpare: false,
      },
      {
        turn1: 0,
        turn2: 2,
        isSpare: false,
      },
    ];
    expect(totalScore(frames)).toBe(57);
  });

  it("it calculate the total score for 10 frames with 1 spares before 10th frame and no strikes", () => {
    const frames: Frame[] = [
      {
        turn1: 5,
        turn2: 3,
        isSpare: false,
      },
      {
        turn1: 0,
        turn2: 0,
        isSpare: false,
      },
      {
        turn1: 5,
        turn2: 5,
        isSpare: true,
      },
      {
        turn1: 3,
        turn2: 3,
        isSpare: false,
      },
      {
        turn1: 3,
        turn2: 6,
        isSpare: false,
      },
      {
        turn1: 3,
        turn2: 4,
        isSpare: false,
      },
      {
        turn1: 5,
        turn2: 2,
        isSpare: false,
      },
      {
        turn1: 2,
        turn2: 0,
        isSpare: false,
      },
      {
        turn1: 5,
        turn2: 4,
        isSpare: false,
      },
      {
        turn1: 0,
        turn2: 2,
        isSpare: false,
      },
    ];
    expect(totalScore(frames)).toBe(63);
  });
});
