import 'jest'

describe("helloWorld", () => {
  test("should add numbers Sync fluent", () => {
    const result = 1 + 3;
    expect(result).toBe(4); // fluent API
  });
});