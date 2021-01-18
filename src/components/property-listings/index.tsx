import React, { useState, useEffect } from "react";
import PropertyTile from "../property-tile";
import { PROPERTY_TYPES } from "../../shared/constants";
import { Property } from "../../types/PropertyTypes.d";

type Props = {
  results: Property[];
  saved: Property[];
};

const PropertyListings = ({ results, saved }: Props) => {
  const [resultProperties, setResultProperties] = useState<Property[]>([]);
  const [savedProperties, setSavedProperties] = useState<Property[]>([]);

  // update the properties if props change
  useEffect(() => {
    setResultProperties(results);
    setSavedProperties(saved);
  }, [results, saved]);

  const saveProperty = (property: Property) => {
    // saves the property
    // do nothing if the property already exists as a saved property
    if (savedProperties.find((item) => item.id === property.id)) return;
    // Add the new property into the saved properties list
    setSavedProperties([...savedProperties, property]);
  };

  const removeProperty = (property: Property) => {
    // removes the property
    // do nothing if the property does not exist in the list
    savedProperties.forEach((item) => {
      if (item.id === property.id) return;
    });
    // Remove the property from the saved list
    setSavedProperties([
      ...savedProperties.filter((item) => item.id !== property.id),
    ]);
  };

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
          saveProperty={saveProperty}
          removeProperty={removeProperty}
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
