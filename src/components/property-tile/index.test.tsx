import React, { useReducer } from "react";
import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import PropertyTile from ".";
import { PROPERTY_TYPES } from "../../shared/constants";
import { Property } from "../../types/PropertyTypes.d";
import { ActionProps } from "../../types/SharedTypes.d";

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
  const mockSaveFn = jest.fn();
  const mockRemoveFn = jest.fn();
  const reducer = (state: Property[], action: ActionProps) => {
    switch (action.type) {
      case "saveProperty":
        mockSaveFn();
        return state;
      case "removeProperty":
        mockRemoveFn();
        return state;
      default:
        return state;
    }
  };
  const { result } = renderHook(() => useReducer(reducer, []));
  const [, dispatch] = result.current;
  test("should render without crashing and match snapshot", () => {
    const { container } = render(
      <PropertyTile
        property={testProperty}
        propertyType={PROPERTY_TYPES.RESULTS}
        dispatch={dispatch}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test("should call the 'Save' function passed correctly", () => {
    render(
      <PropertyTile
        property={testProperty}
        propertyType={PROPERTY_TYPES.RESULTS}
        dispatch={dispatch}
      />
    );

    screen.getByRole("button", { name: /save/i }).click();
    expect(mockSaveFn).toHaveBeenCalledTimes(1);
  });

  test("should call the 'Remove' function passed correctly", () => {
    const mockFn = jest.fn();
    render(
      <PropertyTile
        property={testProperty}
        propertyType={PROPERTY_TYPES.SAVED}
        dispatch={dispatch}
      />
    );

    screen.getByRole("button", { name: /remove/i }).click();
    expect(mockRemoveFn).toHaveBeenCalledTimes(1);
  });
});
