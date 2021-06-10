const values = require("./functions");

test("gives random word based on length of an array", () => {
  expect(values.getRandomWord()).toBeTruthy();
});
