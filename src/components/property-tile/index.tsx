import React from "react";
import "./index.scss";
import { PROPERTY_TYPES } from "../../shared/constants";
import { Property } from "../../types/PropertyTypes.d";

type Props = {
  property: Property;
  propertyType: string;
  saveProperty: (property: Property) => void;
  removeProperty: (property: Property) => void;
  disableProperty?: (property: Property) => void;
  className?: string;
  disabled?: boolean;
};

const PropertyTile = ({
  property,
  propertyType,
  saveProperty,
  removeProperty,
  disableProperty,
  className,
  disabled,
}: Props) => {
  // set type of property - SAVED or RESULTS
  const isSavedProperty = propertyType === PROPERTY_TYPES.SAVED;

  // Calls save or remove based on current state of property tile
  const handlePropertyAction = () => {
    if (isSavedProperty) {
      removeProperty(property);
    } else {
      if (!disabled) saveProperty(property);
    }
  };

  return (
    <div
      className={`property__container ${className || ""} ${
        disabled ? "property__container--disabled" : ""
      }`}
      data-testid={
        isSavedProperty
          ? `saved-property-${property.id}`
          : `result-property-${property.id}`
      }
    >
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
        {!isSavedProperty && !disabled && disableProperty && (
          <button type="button" onClick={() => disableProperty(property)}>
            Disable
          </button>
        )}
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
