import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Note from ".";

let container: any;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders note with a text", () => {
  act(() => {
    // @ts-ignore
    render(<Note note={{ id: 1, title: "Test text" }} />, container);
  });
  expect(container.textContent).toBe("Test text");
});
