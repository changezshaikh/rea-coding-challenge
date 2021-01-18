import React from "react";
import { render } from "@testing-library/react";
import Header from ".";

describe("Header tests", () => {
  test("should render without crashing and match snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
