import React, { Dispatch } from "react";
import "./index.scss";
import { PROPERTY_TYPES } from "../../shared/constants";
import { Property } from "../../types/PropertyTypes.d";
import { ActionProps } from "../../types/SharedTypes";

type Props = {
  property: Property;
  propertyType: string;
  dispatch: Dispatch<ActionProps>;
  className?: string;
};

const PropertyTile = ({
  property,
  propertyType,
  dispatch,
  className,
}: Props) => {
  // set type of property - SAVED or RESULTS
  const isSavedProperty = propertyType === PROPERTY_TYPES.SAVED;

  // Calls save or remove based on current state of property tile
  const handlePropertyAction = () => {
    if (isSavedProperty) {
      dispatch({ type: "removeProperty", property });
    } else {
      dispatch({ type: "saveProperty", property });
    }
  };

  return (
    <div
      className={`property__container ${className || ""}`}
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
