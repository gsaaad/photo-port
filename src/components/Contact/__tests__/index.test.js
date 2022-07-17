/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Contact from "..";

afterEach(cleanup);

describe("Contact", () => {
  // does it render
  it("renders", () => {
    render(<Contact></Contact>);
  });

  //   does it match snapshot

  it("matches snapshot", () => {
    const { asFragment } = render(<Contact></Contact>);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Text is visible", () => {
  it("renders", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("h1tag")).toHaveTextContent("Contact Me");
  });

  it("renders Title", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("button")).toHaveTextContent("Submit");
  });
});
