import { returnAnObject } from "./public/js/functionsToTest";

describe("returnAnObject", () => {
  test('should return an object with key "value"', () => {
    const result = returnAnObject();
    expect(result).toEqual({ key: "value" });
  });
});
