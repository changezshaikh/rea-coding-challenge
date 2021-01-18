import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyTile from ".";
import { PROPERTY_TYPES } from "../../shared/constants";

const testProperty = {
  price: "$726,500",
  agency: {
    brandingColors: {
      primary: "#ffe512",
    },
    logo:
      "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
  },
  id: "1",
  mainImage:
    "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
};

describe("Property Tile tests", () => {
  test("should render without crashing and match snapshot", () => {
    const { container } = render(
      <PropertyTile
        property={testProperty}
        propertyType={PROPERTY_TYPES.RESULTS}
        saveProperty={() => {}}
        removeProperty={() => {}}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test("should call the 'Save' function passed correctly", () => {
    const mockFn = jest.fn();
    render(
      <PropertyTile
        property={testProperty}
        propertyType={PROPERTY_TYPES.RESULTS}
        saveProperty={mockFn}
        removeProperty={() => {}}
      />
    );

    screen.getByRole("button", { name: /save/i }).click();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should call the 'Remove' function passed correctly", () => {
    const mockFn = jest.fn();
    render(
      <PropertyTile
        property={testProperty}
        propertyType={PROPERTY_TYPES.SAVED}
        saveProperty={() => {}}
        removeProperty={mockFn}
      />
    );

    screen.getByRole("button", { name: /remove/i }).click();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
