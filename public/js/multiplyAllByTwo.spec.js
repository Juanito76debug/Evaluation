import { multiplyAllByTwo } from "./public/js/functionsToTest";

describe("multiplyAllByTwo", () => {
  test("should multiply each element in the array by 2", () => {
    const input = [1, 2, 3];
    const result = multiplyAllByTwo(input);
    expect(result).toEqual([2, 4, 6]);
  });
});
