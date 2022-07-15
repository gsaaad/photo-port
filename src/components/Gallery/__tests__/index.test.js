/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";

const portrait = {
  name: "Portraits",
  description: "Portraits of people in my life",
};
afterEach(cleanup);

describe("Render Gallery component", () => {
  // does gallery render
  it("renders", () => {
    render(<Gallery currentCategory={portrait} />);
  });
  //   does it match snapshot

  it("matches snapshot", () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />);
    expect(asFragment()).toMatchSnapshot();
  });
  //   does our title show Portraits
  it("renders title Portraits", () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />);
    expect(getByTestId("h1tag")).toHaveTextContent("Portraits");
  });
});
