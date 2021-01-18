import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyListings from ".";
import properties from "../../assets/data/properties.json";

describe("Property Listings tests", () => {
  test("should render without crashing and match snapshot", () => {
    const { container } = render(<PropertyListings {...properties} />);
    expect(container).toMatchSnapshot();
  });

  test("should correctly add the property to the saved property list", () => {
    const { container } = render(<PropertyListings {...properties} />);
    // click "Save" on first property
    screen.getAllByText("Save")[0].click();
    const saved = container.querySelectorAll(".property-tile-saved");
    // expect saved list to have another property added
    expect(saved.length).toBe(2);
  });

  test("should correctly remove a property from the saved property list", () => {
    const { container } = render(<PropertyListings {...properties} />);
    let saved = container.querySelectorAll(".property-tile-saved");
    expect(saved.length).toBe(1);
    // click "Save" on first property
    screen.getAllByText("Save")[0].click();
    // get list of saved properties again
    saved = container.querySelectorAll(".property-tile-saved");
    // expect saved list to have another property added
    expect(saved.length).toBe(2);
    // click "Remove" on first property
    screen.getAllByText("Remove")[1].click();
    // get list of saved properties again
    saved = container.querySelectorAll(".property-tile-saved");
    // expect saved list to have a property removed
    expect(saved.length).toBe(1);
  });
});
