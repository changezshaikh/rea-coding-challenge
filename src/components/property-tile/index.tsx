import React from "react";
import "./index.scss";
import { PROPERTY_TYPES } from "../../shared/constants";
import { Property } from "../../types/PropertyTypes.d";

type Props = {
  property: Property;
  propertyType: string;
  saveProperty: (property: Property) => void;
  removeProperty: (property: Property) => void;
  className?: string;
};

const PropertyTile = ({
  property,
  propertyType,
  saveProperty,
  removeProperty,
  className,
}: Props) => {
  // set type of property - SAVED or RESULTS
  const isSavedProperty = propertyType === PROPERTY_TYPES.SAVED;

  // Calls save or remove based on current state of property tile
  const handlePropertyAction = () => {
    if (isSavedProperty) {
      removeProperty(property);
    } else {
      saveProperty(property);
    }
  };

  return (
    <div className={`property__container ${className || ""}`}>
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
      <img src={property.mainImage} alt="Property" className="property-image" />
      <div className="property-footer">
        <span className="property-price">{property.price}</span>
        <button
          type="button"
          className={`property-button ${
            isSavedProperty ? `property-button--saved` : ``
          }`}
          onClick={handlePropertyAction}
        >
          {isSavedProperty ? `Remove` : `Save`}
        </button>
      </div>
    </div>
  );
};

export default PropertyTile;
