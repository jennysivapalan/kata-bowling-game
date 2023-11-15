import { calculateTotalScore } from "../src/bowling";
describe("test calculating the total score for a string of frames", () => {
  it("it calculate the total score for 10 frames", () => {
    expect(calculateTotalScore("5/3 -- 5/ X 3/ 3/ 5/2 2- 5/4 -2")).toBe(96);
  });
});
