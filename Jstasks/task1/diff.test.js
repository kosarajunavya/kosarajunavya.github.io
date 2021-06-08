const substractNumbers = require("./diff");

test("difference of 3 and 2 is 1", () => {
  expect(substractNumbers(3, 2)).toBe(1);
});
