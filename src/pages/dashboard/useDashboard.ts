import { useEffect } from "react";
import { useEarthquake } from "../../hook/useEarthquake";
import axios from "axios";
import { FeaturesResponse } from "../../models/featuresResponse";

export const useDashboard = () => {
  const host = import.meta.env.VITE_HOST;

  const { earthquakeDispatch, earthquakeState } = useEarthquake();

  useEffect(() => {
    axios
      .get(`${host}/features`, {
        params: {
          mag_type: earthquakeState.magTypes.join(),
          page: earthquakeState.page,
        },
      })
      .then((res) =>
        earthquakeDispatch({
          type: "set-earthquake-action",
          payload: {
            earthquakes: res.data.data as FeaturesResponse[],
            count: res.data.pagination.total,
            perPage: res.data.pagination.per_page,
          },
        })
      );
  }, [earthquakeState.page, earthquakeState.magTypes]);

  return {};
};
