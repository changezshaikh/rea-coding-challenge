type Color = {
  primary: string;
};

// Prop types for Agency details
export type AgencyDetails = {
  brandingColors: Color;
  logo: string;
};

// Prop types for Properties
export type Property = {
  price: string;
  agency: AgencyDetails;
  id: string;
  mainImage: string;
};
