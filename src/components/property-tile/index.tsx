import React from "react";
import "./index.scss";
import { Property } from "../../types/PropertyTypes.d";

type Props = {
  property: Property;
};

const PropertyTile = ({ property }: Props) => {
  return (
    <div className="property__container">
      <div className="property-header">
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
    </div>
  );
};

export default PropertyTile;
