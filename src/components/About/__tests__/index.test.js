import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
  //render about Test
  //   first test
  it("rendersonce", () => {
    render(<About />);
  });
  //   first test rewritten
  test("renderstwice", () => {
    render(<About />);
  });
});
// second test
describe("matches snapshot DOM node structure", () => {
  //asFragment returns a snapshot of DOM
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});

// simulated DOM with render
// clean up remove components from DOM to prevent memory leak
