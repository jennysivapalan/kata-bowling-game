import { Frame } from "../src/bowling";
import { createFrames } from "../src/frames";
describe("test createFrames function", () => {
  it("it should create a set of 10 frames", () => {
    const framesAsString = "5/3 4/4 5/ X 3/ 3/ 5/2 2/3 5/4 3/2";

    const expectedFrames: Frame[] = [
      {
        turn1: 5,
        turn2: 3,
      },
      {
        turn1: 4,
        turn2: 4,
      },
      {
        turn1: 5,
        turn2: 5,
      },
      {
        turn1: 10,
      },
      {
        turn1: 3,
        turn2: 7,
      },
      {
        turn1: 3,
        turn2: 7,
      },
      {
        turn1: 5,
        turn2: 2,
      },
      {
        turn1: 2,
        turn2: 3,
      },
      {
        turn1: 5,
        turn2: 4,
      },
      {
        turn1: 3,
        turn2: 2,
      },
    ];

    expect(createFrames(framesAsString)).toEqual(expectedFrames);
  });
});
