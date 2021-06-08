var data = require("./getPost");

test("shows how async / await works", async () => {
  const value = await Promise.resolve(true);
  expect(data(value)).toBe(true);
});
