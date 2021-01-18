import React from "react";
import { Property } from "../../types/PropertyTypes.d";

type Props = {
  results: Property[];
  saved: Property[];
};

const PropertyListings = ({ results, saved }: Props) => {
  return (
    <section className="property-listings">
      <div className="container">
        <div className="column">
          <div className="row">
            <h2>Results</h2>
          </div>
          <div className="row">Results go here.</div>
        </div>
        <div className="column">
          <div className="row">
            <h2>Saved properties</h2>
          </div>
          <div className="row">Saved properties go here.</div>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
