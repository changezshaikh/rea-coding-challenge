import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.scss";
import Header from "./components/header";
import PropertyListings from "./components/property-listings";
import properties from "./assets/data/properties.json";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <main>
      <PropertyListings {...properties} />
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
