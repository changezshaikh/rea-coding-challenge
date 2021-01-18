import React from "react";
import { Property } from "../../types/PropertyTypes.d";

type Props = {
  property: Property;
};

const PropertyTile = ({ property }: Props) => {
  return (
    <div className="property__container">
      <div className="property-header">Logo goes here</div>
      <img src={property.mainImage} alt={property.id} />
    </div>
  );
};

export default PropertyTile;
