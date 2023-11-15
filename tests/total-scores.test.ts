import { Frame, totalScore } from "../src/bowling";

describe("test totalScore function using 10 frames", () => {
  it("it calculate the total score for 10 frames with no spares or strikes", () => {
    const frames: Frame[] = [
      {
        turn1: 5,
        turn2: 3,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 0,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 2,
        turn2: 5,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 3,
        turn2: 3,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 3,
        turn2: 6,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 3,
        turn2: 4,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 2,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 2,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 4,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 0,
        turn2: 2,
        isSpare: false,
        isStrike: false,
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
        isStrike: false,
      },
      {
        turn1: 0,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 5,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 3,
        turn2: 3,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 3,
        turn2: 6,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 3,
        turn2: 4,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 2,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 2,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 4,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 0,
        turn2: 2,
        isSpare: false,
        isStrike: false,
      },
    ];
    expect(totalScore(frames)).toBe(63);
  });

  it("it calculate the total score for 10 frames with 1 strike before 10th frame and no spare", () => {
    const frames: Frame[] = [
      {
        turn1: 5,
        turn2: 3,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 0,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 10,
        isSpare: false,
        isStrike: true,
      },
      {
        turn1: 3,
        turn2: 3,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 3,
        turn2: 6,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 3,
        turn2: 4,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 2,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 2,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 4,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 0,
        turn2: 2,
        isSpare: false,
        isStrike: false,
      },
    ];
    expect(totalScore(frames)).toBe(66);
  });
});

describe("test totalScore function using 11 frames when 10th frame is a spare", () => {
  it("it calculate the total score for 11 frames", () => {
    const frames: Frame[] = [
      {
        turn1: 5,
        turn2: 3,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 0,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 5,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 10,
        isSpare: false,
        isStrike: true,
      },
      {
        turn1: 3,
        turn2: 7,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 3,
        turn2: 7,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 2,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 2,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 4,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 2,
        turn2: 8,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 6,
        isSpare: false,
        isStrike: false,
      },
    ];
    expect(totalScore(frames)).toBe(110);
  });

  it("it calculate the total score for 11 frames with 11th frame being a miss", () => {
    const frames: Frame[] = [
      {
        turn1: 5,
        turn2: 3,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 0,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 5,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 10,
        isSpare: false,
        isStrike: true,
      },
      {
        turn1: 3,
        turn2: 7,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 3,
        turn2: 7,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 2,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 2,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 4,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 2,
        turn2: 8,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 0,
        isSpare: false,
        isStrike: false,
      },
    ];

    expect(totalScore(frames)).toBe(104);
  });

  it("it should calculate a set of 11 frames with 11th frame being a strike", () => {
    const frames: Frame[] = [
      {
        turn1: 5,
        turn2: 3,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 0,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 5,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 10,
        isSpare: false,
        isStrike: true,
      },
      {
        turn1: 3,
        turn2: 7,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 3,
        turn2: 7,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 2,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 2,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 5,
        turn2: 4,
        isSpare: false,
        isStrike: false,
      },
      {
        turn1: 2,
        turn2: 8,
        isSpare: true,
        isStrike: false,
      },
      {
        turn1: 10,
        isSpare: false,
        isStrike: true,
      },
    ];

    expect(totalScore(frames)).toBe(114);
  });
});
