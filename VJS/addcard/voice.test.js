import { screen } from "@testing-library/dom";

test("uses jest-dom", () => {
  document.body.innerHTML = `
  <div id="cards-container" class="cards"></div>
 `;

  expect(screen.queryByTestId("card active")).not.toBeEmptyDOMElement();
  expect(screen.getByText("current")).toBeVisible();
});
