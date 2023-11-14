import { Frame } from "../src/bowling";
import { createFrames } from "../src/frames";
describe("test createFrames function", () => {
  it("it should create a set of 10 frames", () => {
    const framesAsString = "5/3 -- 5/ X 3/ 3/ 5/2 2- 5/4 -2";

    const expectedFrames: Frame[] = [
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
        turn1: 0,
        turn2: 2,
        isSpare: false,
        isStrike: false,
      },
    ];

    expect(createFrames(framesAsString)).toEqual(expectedFrames);
  });
});
