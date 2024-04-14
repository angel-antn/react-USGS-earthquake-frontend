import { FeaturesResponse } from "../models/featuresResponse";

interface SetEarthquakeAction {
  type: "set-earthquake-action";
  payload: { earthquakes: FeaturesResponse[]; count: number; perPage: number };
}

interface AddMagTypeAction {
  type: "add-magtype-action";
  payload: { magType: string };
}

interface RemoveMagTypeAction {
  type: "remove-magtype-action";
  payload: { magType: string };
}

interface SetPageAction {
  type: "set-page-action";
  payload: { page: number };
}

interface SelectFeatureAction {
  type: "select-feature-action";
  payload: { selectedFeature: number | undefined };
}

export type EarthquakeActions =
  | SetEarthquakeAction
  | AddMagTypeAction
  | RemoveMagTypeAction
  | SetPageAction
  | SelectFeatureAction;

export interface EarthquakeState {
  earthquakes: FeaturesResponse[];
  magTypes: string[];
  page: number;
  count: number;
  perPage: number;
  selectedFeature: number | undefined;
}

export const initialState: EarthquakeState = {
  earthquakes: [],
  magTypes: ["md", "ml", "ms", "mw", "me", "mi", "mb", "mlg"],
  page: 1,
  count: 0,
  perPage: 10,
  selectedFeature: undefined,
};

export const earthquakeReducer = (
  state: EarthquakeState,
  action: EarthquakeActions
): EarthquakeState => {
  switch (action.type) {
    case "set-earthquake-action": {
      return {
        ...state,
        count: action.payload.count,
        perPage: action.payload.perPage,
        earthquakes: action.payload.earthquakes,
      };
    }

    case "add-magtype-action": {
      return {
        ...state,
        page: 1,
        magTypes: [...state.magTypes, action.payload.magType],
      };
    }

    case "remove-magtype-action": {
      return {
        ...state,
        page: 1,
        magTypes: state.magTypes.filter(
          (magType) => magType != action.payload.magType
        ),
      };
    }

    case "set-page-action": {
      return {
        ...state,
        page: action.payload.page,
      };
    }

    case "select-feature-action": {
      return {
        ...state,
        selectedFeature: action.payload.selectedFeature,
      };
    }

    default: {
      return state;
    }
  }
};
