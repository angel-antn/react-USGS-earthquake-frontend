export interface FeaturesResponse {
  id: number;
  type: string;
  attributes: Attributes;
  links: Links;
}

interface Attributes {
  external_id: string;
  magnitude: string;
  place: string;
  time: string;
  tsunami: boolean;
  mag_type: string;
  title: string;
  coordinates: Coordinates;
}

interface Coordinates {
  longitude: string;
  latitude: string;
}

interface Links {
  external_url: string;
}
