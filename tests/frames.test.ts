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

  it("it should create a set of 11 frames with last frame being 1 turn for scoring spare in 10th frame", () => {
    const framesAsString = "5/3 -- 5/ X 3/ 3/ 5/2 2- 5/4 2/ 6";

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

    expect(createFrames(framesAsString)).toEqual(expectedFrames);
  });

  it("it should create a set of 11 frames with 11th frame being a miss", () => {
    const framesAsString = "5/3 -- 5/ X 3/ 3/ 5/2 2- 5/4 2/ -";

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

    expect(createFrames(framesAsString)).toEqual(expectedFrames);
  });

  it("it should create a set of 11 frames with 11th frame being a strike", () => {
    const framesAsString = "5/3 -- 5/ X 3/ 3/ 5/2 2- 5/4 2/ X";

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

    expect(createFrames(framesAsString)).toEqual(expectedFrames);
  });

  it("it should create a set of 11 frames with last frame being 2 turn for scoring strike in 10th frame", () => {
    const framesAsString = "5/3 -- 5/ X 3/ 3/ 5/2 2- 5/4 X 3/6";

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
        turn1: 10,
        isSpare: false,
        isStrike: true,
      },
      {
        turn1: 3,
        turn2: 6,
        isSpare: false,
        isStrike: false,
      },
    ];

    expect(createFrames(framesAsString)).toEqual(expectedFrames);
  });

  it("it should create a set of 11 frames with last frame being 2 turn (1 miss) for scoring strike in 10th frame", () => {
    const framesAsString = "5/3 -- 5/ X 3/ 3/ 5/2 2- 5/4 X 3-";

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
        turn1: 10,
        isSpare: false,
        isStrike: true,
      },
      {
        turn1: 3,
        turn2: 0,
        isSpare: false,
        isStrike: false,
      },
    ];

    expect(createFrames(framesAsString)).toEqual(expectedFrames);
  });

  it("it should create a set of 12 frames with 1 turn and non strike if 10th and 11th frame is a strike", () => {
    const framesAsString = "5/3 -- 5/ X 3/ 3/ 5/2 2- 5/4 X X 4";

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
        turn1: 10,
        isSpare: false,
        isStrike: true,
      },
      {
        turn1: 10,
        isSpare: false,
        isStrike: true,
      },
      {
        turn1: 4,
        isSpare: false,
        isStrike: false,
      },
    ];

    expect(createFrames(framesAsString)).toEqual(expectedFrames);
  });
  it("it should create a set of 12 frames with 1 turn and a strike if 10th and 11th frame is a strike", () => {
    const framesAsString = "5/3 -- 5/ X 3/ 3/ 5/2 2- 5/4 X X X";

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
        turn1: 10,
        isSpare: false,
        isStrike: true,
      },
      {
        turn1: 10,
        isSpare: false,
        isStrike: true,
      },
      {
        turn1: 10,
        isSpare: false,
        isStrike: true,
      },
    ];

    expect(createFrames(framesAsString)).toEqual(expectedFrames);
  });
});
