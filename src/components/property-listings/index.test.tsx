import React from "react";
import { render } from "@testing-library/react";
import PropertyListings from ".";
import properties from "../../assets/data/properties.json";

describe("Property Listings tests", () => {
  test("should render without crashing and match snapshot", () => {
    const { container } = render(<PropertyListings {...properties} />);
    expect(container).toMatchSnapshot();
  });
});
