import { calculateTotalScore } from "../src/bowling";
describe("test calculating the total score for a string of frames", () => {
  it("it calculate the total score for 10 frames", () => {
    expect(calculateTotalScore("5/3 -- 5/ X 3/ 3/ 5/2 2- 5/4 -2")).toBe(96);
  });

  it("it calculate 20 rolls: 10 pairs of 9 and miss", () => {
    expect(calculateTotalScore("9- 9- 9- 9- 9- 9- 9- 9- 9- 9-")).toBe(90);
  });

  it("21 rolls: 10 pairs of 5 and spare, with a final 5)", () => {
    expect(calculateTotalScore("5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5")).toBe(150);
  });

  it("12 rolls: 12 strikes = 10 frames * 30 points = 300", () => {
    expect(calculateTotalScore("X X X X X X X X X X X X")).toBe(300);
  });
});
