import React from "react";
import "./index.scss";
import { PROPERTY_TYPES } from "../../shared/constants";
import { Property } from "../../types/PropertyTypes.d";

type Props = {
  property: Property;
  propertyType: string;
};

const PropertyTile = ({ property, propertyType }: Props) => {
  const isSavedProperty = propertyType === PROPERTY_TYPES.SAVED;

  return (
    <div className="property__container">
      <div
        className="property-header"
        style={{ backgroundColor: property.agency.brandingColors.primary }}
      >
        <img
          src={property.agency.logo}
          alt="Agency Logo"
          className="logo-image"
        />
      </div>
      <img
        src={property.mainImage}
        alt={property.id}
        className="property-image"
      />
      <div className="property-footer">
        <span className="property-price">{property.price}</span>
        <button type="button">{isSavedProperty ? `Remove` : `Save`}</button>
      </div>
    </div>
  );
};

export default PropertyTile;
