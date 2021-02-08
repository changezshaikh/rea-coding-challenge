import React, { useState, useEffect, useReducer } from "react";
import PropertyTile from "../property-tile";
import { PROPERTY_TYPES } from "../../shared/constants";
import { Property } from "../../types/PropertyTypes.d";
import { ActionProps } from "../../types/SharedTypes.d";

type Props = {
  results: Property[];
  saved: Property[];
};

const PropertyListings = ({ results, saved }: Props) => {
  const [resultProperties, setResultProperties] = useState<Property[]>([]);
  // const [savedProperties, setSavedProperties] = useState<Property[]>([]);
  const reducer = (state: Property[], action: ActionProps) => {
    const { property } = action;
    switch (action.type) {
      case "initialLoad":
        return saved;
      case "saveProperty":
        if (!property) return state;
        // saves the property
        // do nothing if the property already exists as a saved property
        if (state.find((item: Property) => item.id === property.id))
          return state;
        // Add the new property into the saved properties list
        return [...state, property];
      case "removeProperty":
        if (!property) return state;
        // removes the property
        // do nothing if the property does not exist in the list
        state.forEach((item) => {
          if (item.id === property.id) return;
        });
        // Remove the property from the saved list
        return [...state.filter((item: Property) => item.id !== property.id)];
      default:
        return state;
    }
  };
  const [savedProperties, dispatchSaved] = useReducer(reducer, []);

  // update the properties if props change
  useEffect(() => {
    setResultProperties(results);
    dispatchSaved({ type: "initialLoad" });
  }, [results, saved]);

  // returns a property list of either saved or result properties
  const renderPropertyList = (propertyType: string) => {
    const properties =
      propertyType === PROPERTY_TYPES.RESULTS
        ? resultProperties
        : savedProperties;

    if (!properties || !properties.length) return "";
    return properties.map((property) => {
      return (
        <PropertyTile
          property={property}
          key={property.id}
          propertyType={propertyType}
          dispatch={dispatchSaved}
          className={
            propertyType === PROPERTY_TYPES.RESULTS
              ? "property-tile-result"
              : "property-tile-saved"
          }
        />
      );
    });
  };
  return (
    <section className="property-listings">
      <div className="container">
        <div className="column">
          <div className="row">
            <h2>Results</h2>
          </div>
          <div className="row">
            {renderPropertyList(PROPERTY_TYPES.RESULTS)}
          </div>
        </div>
        <div className="column">
          <div className="row">
            <h2>Saved properties</h2>
          </div>
          <div className="row">{renderPropertyList(PROPERTY_TYPES.SAVED)}</div>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
