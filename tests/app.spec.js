const fibonacci = require("../app");

describe("fibonacci()", () => {
  it("should return 0 for n = 0", () => {
    expect(fibonacci(0)).toEqual(0);
  });

  it("should return 1 for n = 1", () => {
    expect(fibonacci(1)).toEqual(1);
  });

  it("should return 1 for n = 2", () => {
    expect(fibonacci(2)).toEqual(1);
  });

  it("should return 5 for n = 5", () => {
    expect(fibonacci(5)).toEqual(5);
  });

  it("should return 'Invalid input...' for negative n", () => {
    expect(fibonacci(-5)).toEqual("Invalid input. Please provide a non-negative integer.");
  });
});
