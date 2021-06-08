const calculations = require("./calculations");

test("adds 2+2 to equal 4", () => {
  expect(calculations.add(2, 2)).toBe(4);
});

test("asubstracts 3-2 to equal 1", () => {
  expect(calculations.sub(3, 2)).toBe(1);
});

test("multiplies 3*2 to equal 4", () => {
  expect(calculations.mul(3, 2)).toBe(6);
});

test("adds 2/2 to equal 1", () => {
  expect(calculations.div(2, 2)).toBe(1);
});
