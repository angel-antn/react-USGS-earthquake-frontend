import { Colors, colorClasses } from "../../colors/colorClasses";
import { getMagTypeColor } from "../../colors/getMagTypeColor";
import { useEarthquake } from "../../hook/useEarthquake";
import { FeaturesResponse } from "../../models/featuresResponse";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

interface ResultFeatureProps {
  feature: FeaturesResponse;
}

export const ResultFeature = ({ feature }: ResultFeatureProps) => {
  const tailwindColor: Colors = getMagTypeColor(feature.attributes.mag_type);

  const { earthquakeDispatch } = useEarthquake();

  const selectFeature = (selectedFeature: number) => {
    earthquakeDispatch({
      type: "select-feature-action",
      payload: { selectedFeature },
    });
  };

  return (
    <div className="flex justify-start">
      <div className="w-full p-3 md:p- rounded-xl mt-5 bg-white shadow flex justify-between items-start">
        <div className="text-sm text-left">
          <div className="flex gap-2 justify-center items-center">
            <div
              className={`uppercase text-white px-2 rounded-md font-bold ${colorClasses[tailwindColor].background}`}
            >
              <p>{feature.attributes.mag_type}</p>
            </div>

            <p className="font-semibold text-base">
              ⛰️ {feature.attributes.title}
            </p>
          </div>
          <p>
            🧭{" "}
            {`Lat: ${feature.attributes.coordinates.latitude} - Lon: ${feature.attributes.coordinates.longitude}`}
          </p>
          <p>{`🌊 Tsunami: ${feature.attributes.tsunami ? "Si" : "No"}`}</p>
        </div>
        <div className="flex">
          <a href={feature.links.external_url} target="_blank">
            <WindowIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </a>
          <button onClick={() => selectFeature(feature.id)}>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};
