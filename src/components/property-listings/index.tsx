import React from "react";
import PropertyTile from "../property-tile";
import { PROPERTY_TYPES } from "../../shared/constants";
import { Property } from "../../types/PropertyTypes.d";

type Props = {
  results: Property[];
  saved: Property[];
};

const PropertyListings = ({ results, saved }: Props) => {
  // returns a property list of either saved or result properties
  const renderPropertyList = (propertyType: string) => {
    const properties =
      propertyType === PROPERTY_TYPES.RESULTS ? results : saved;

    if (!properties || !properties.length) return "";
    return properties.map((property) => {
      return <PropertyTile property={property} key={property.id} />;
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
