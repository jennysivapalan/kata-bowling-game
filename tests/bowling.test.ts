import {
  Frame,
  updateIfSpare,
  updateIfStrike,
  calculateCurrentRunningTotal,
  haveAnotherGo,
  setFrameRunningTotal,
} from "../src/bowling";

describe("test calculateCurrentRunningTotal function", () => {
  it("it should add the total score for a set of 2 frames at bowling", () => {
    const frames: Frame[] = [
      {
        turn1: 4,
        turn2: 5,
        isSpare: false,
        runningTotal: 9,
      },
      {
        turn1: 3,
        turn2: 4,
        isSpare: false,
      },
    ];

    expect(calculateCurrentRunningTotal(frames)).toBe(16);
  });

  it("it should error if the total or turn 1 and turn 2 add up to total greater than 10", () => {
    const frames: Frame[] = [
      {
        turn1: 6,
        turn2: 5,
        isSpare: false,
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
      isSpare: true,
    };

    expect(updateIfSpare(frame).isSpare).toBe(true);
  });

  it("it calculates current frame total with the spare in the previous frame", () => {
    const frames: Frame[] = [
      {
        turn1: 5,
        turn2: 3,
        runningTotal: 8,
        isSpare: false,
      },
      {
        turn1: 5,
        turn2: 5,
        isSpare: true,
      },
      {
        turn1: 6,
        turn2: 3,
        isSpare: false,
      },
    ];

    expect(calculateCurrentRunningTotal(frames)).toBe(33);
  });

  it("add an extra frame score if the 10th frame is a spare", () => {
    const frame: Frame = {
      turn1: 5,
      turn2: 3,
      isSpare: false,
    };
    const frames: Frame[] = [];

    for (let i = 0; i < 9; i++) {
      frames.push(frame);

      const runningTotal = calculateCurrentRunningTotal(frames);
      if (runningTotal) setFrameRunningTotal(frame, runningTotal);
    }

    const frame10: Frame = {
      turn1: 5,
      turn2: 5,
      isSpare: true,
    };
    frames.push(frame10);
    const runningTotal = calculateCurrentRunningTotal(frames);
    if (runningTotal) setFrameRunningTotal(frame, runningTotal);
    expect(haveAnotherGo(frames)).toBe(true);

    const frame11: Frame = {
      turn1: 5,
      isSpare: false,
    };
    frames.push(frame11);
    expect(calculateCurrentRunningTotal(frames)).toBe(87);
  });

  it("will throw an error if 11th frame is two gos", () => {
    const frame: Frame = {
      turn1: 5,
      turn2: 3,
      isSpare: false,
    };
    const frames: Frame[] = [];

    for (let i = 0; i < 9; i++) {
      frames.push(frame);

      const runningTotal = calculateCurrentRunningTotal(frames);
      if (runningTotal) setFrameRunningTotal(frame, runningTotal);
    }

    const frame10: Frame = {
      turn1: 5,
      turn2: 5,
      isSpare: true,
    };
    frames.push(frame10);
    const runningTotal = calculateCurrentRunningTotal(frames);
    if (runningTotal) setFrameRunningTotal(frame, runningTotal);

    const frame11: Frame = {
      turn1: 5,
      turn2: 3,
      isSpare: false,
    };
    frames.push(frame11);
    expect(() => {
      calculateCurrentRunningTotal(frames);
    }).toThrow("11th frame for a spare can only have 1 go");
  });
});
describe("test haveAnotherGo function", () => {
  it("add an extra frame score if the 10th frame is a spare", () => {
    const frame: Frame = {
      turn1: 5,
      turn2: 3,
      isSpare: false,
    };
    const frames = new Array<Frame>(9);
    frames.fill(frame, 0, 9);

    const frame10: Frame = {
      turn1: 5,
      turn2: 5,
      isSpare: true,
    };
    frames.push(frame10);

    expect(haveAnotherGo(frames)).toBe(true);
  });
  it("no extra frame if number of frames is not 10 and last frame is a spare", () => {
    const frame: Frame = {
      turn1: 5,
      turn2: 3,
      isSpare: false,
    };
    const frames: Frame[] = Array().fill(frame, 0, 7);
    frame.isSpare = true;
    frames.push(frame);

    expect(haveAnotherGo(frames)).toBe(false);
  });

  it("no extra frame if frame 10 is not a spare", () => {
    const frame: Frame = {
      turn1: 5,
      turn2: 3,
      isSpare: false,
    };
    const frames: Frame[] = Array().fill(frame, 0, 9);

    expect(haveAnotherGo(frames)).toBe(false);
  });

  it("add an extra frame score if the 10th frame is a strike", () => {
    const frame: Frame = {
      turn1: 5,
      turn2: 3,
      isSpare: false,
    };
    const frames = new Array<Frame>(9);
    frames.fill(frame, 0, 9);

    const frame10: Frame = {
      turn1: 10,
      isStrike: true,
      isSpare: false,
    };
    frames.push(frame10);

    expect(haveAnotherGo(frames)).toBe(true);
  });

  it("no extra frame if number of frames is not 10 and last frame is a strike", () => {
    const frame: Frame = {
      turn1: 5,
      turn2: 3,
      isSpare: false,
    };
    const frames: Frame[] = Array().fill(frame, 0, 5);
    frame.isStrike = true;
    frames.push(frame);

    expect(haveAnotherGo(frames)).toBe(false);
  });

  it("no extra frame if frame 10 is not a strike", () => {
    const frame: Frame = {
      turn1: 5,
      turn2: 3,
      isSpare: false,
    };
    const frames: Frame[] = Array().fill(frame, 0, 9);

    expect(haveAnotherGo(frames)).toBe(false);
  });
});

describe("test strike possibilities", () => {
  it("it calculate if a frame is a strike", () => {
    const frame: Frame = {
      turn1: 10,
      isSpare: false,
    };

    expect(updateIfStrike(frame).isStrike).toBe(true);
  });

  it("it calculates current frame total with the strike in the previous frame", () => {
    const frames: Frame[] = [
      {
        turn1: 5,
        turn2: 3,
        runningTotal: 8,
        isSpare: false,
      },
      {
        turn1: 10,
        isStrike: true,
        isSpare: false,
      },
      {
        turn1: 6,
        turn2: 3,
        isSpare: false,
      },
    ];

    expect(calculateCurrentRunningTotal(frames)).toBe(33);
  });

  it("add an extra frame score if the 10th frame is a strike", () => {
    const frame: Frame = {
      turn1: 5,
      turn2: 3,
      isSpare: false,
    };
    const frames: Frame[] = [];

    for (let i = 0; i < 9; i++) {
      frames.push(frame);

      const runningTotal = calculateCurrentRunningTotal(frames);
      if (runningTotal) setFrameRunningTotal(frame, runningTotal);
    }

    const frame10: Frame = {
      turn1: 10,
      isStrike: true,
      isSpare: false,
    };
    frames.push(frame10);
    const runningTotal = calculateCurrentRunningTotal(frames);
    if (runningTotal) setFrameRunningTotal(frame, runningTotal);
    expect(haveAnotherGo(frames)).toBe(true);

    const frame11: Frame = {
      turn1: 4,
      turn2: 3,
      isSpare: false,
    };
    frames.push(frame11);
    expect(calculateCurrentRunningTotal(frames)).toBe(89);
  });
});
