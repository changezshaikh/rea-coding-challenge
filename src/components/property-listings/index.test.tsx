import React from "react";
import { render, screen, within } from "@testing-library/react";
import PropertyListings from ".";
import properties from "../../assets/data/properties.json";

describe("Property Listings tests", () => {
  test("should render without crashing and match snapshot", () => {
    const { container } = render(<PropertyListings {...properties} />);
    expect(container).toMatchSnapshot();
  });

  test("should correctly add the first property to the saved property list", () => {
    render(<PropertyListings {...properties} />);
    // click "Save" on first property
    within(screen.getByTestId("result-property-1"))
      .getByRole("button", { name: /save/i })
      .click();
    // expect saved list to have another property added
    expect(screen.getByTestId("saved-property-1")).toBeInTheDocument();
  });

  test("should correctly add a random property to the saved property list", () => {
    render(<PropertyListings {...properties} />);
    const randomId = Math.floor(Math.random() * 3) + 1;
    // click "Save" on a random property
    within(screen.getByTestId(`result-property-${randomId}`))
      .getByRole("button", { name: /save/i })
      .click();
    // expect the saved property to appear in the document
    expect(
      screen.getByTestId(`saved-property-${randomId}`)
    ).toBeInTheDocument();
  });

  test("should correctly remove a property from the saved property list", () => {
    render(<PropertyListings {...properties} />);
    const randomId = Math.floor(Math.random() * 3) + 1;
    // click "Save" on a random property
    within(screen.getByTestId(`result-property-${randomId}`))
      .getByRole("button", { name: /save/i })
      .click();
    // expect saved list to have the random property added
    expect(
      screen.getByTestId(`saved-property-${randomId}`)
    ).toBeInTheDocument();
    // click "Remove" on the newly added property
    within(screen.getByTestId(`saved-property-${randomId}`))
      .getByRole("button", { name: /remove/i })
      .click();
    // expect the saved property to not be in the document anymore
    expect(
      screen.queryByTestId(`saved-property-${randomId}`)
    ).not.toBeInTheDocument();
  });
});
