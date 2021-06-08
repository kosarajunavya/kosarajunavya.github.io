const multiplyNumbers = require("./mul");

test("product of 2 and 3 is 6", () => {
  expect(multiplyNumbers(3, 2)).toBe(6);
});
