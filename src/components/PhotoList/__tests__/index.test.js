/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PhotoList from "..";

const example = {
  name: "Grocery aisle",
  category: "commercial",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
};

afterEach(cleanup);

describe("Render PhotoList component", () => {
  // does photolist render
  it("renders", () => {
    render(<PhotoList example={example} />);
  });
  //   does it match snapshot
  it("matches snapshot", () => {
    const { asFragment } = render(<PhotoList example={example} />);
    expect(asFragment()).toMatchSnapshot();
  });
  // does it render example properties accordingly
  //   it("renders example properties", () => {
  //     const { getByTestId } = render(<PhotoList example={example} />);
  //     expect(getByTestId("h1Title")).toHaveTextContent("Grocery aisle");
  //   });
});
