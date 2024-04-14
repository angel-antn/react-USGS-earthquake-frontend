import {
  Square3Stack3DIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useEarthquake } from "../../hook/useEarthquake";
import { ResultFeature } from "./ResultFeature";

export const Results = () => {
  const { earthquakeState, earthquakeDispatch } = useEarthquake();

  const updatePage = (amount: number) => {
    const page = earthquakeState.page + amount;
    if (
      page > 0 &&
      page <= Math.ceil(earthquakeState.count / earthquakeState.perPage)
    )
      earthquakeDispatch({ type: "set-page-action", payload: { page } });
  };

  return (
    <>
      <section className="flex justify-between items-center flex-wrap">
        <div className="mt-7 flex gap-2 items-center">
          <Square3Stack3DIcon className="text-gray-600 h-7 w-7" />
          <h2 className="text-2xl font-semibold text-gray-600">Resultados</h2>
        </div>
        <div className=" bg-emerald-50 text-emerald-400 shadow-sm p-2 rounded-md mt-7 font-semibold">
          {earthquakeState.count} Resultados
        </div>
      </section>

      <section className="mt-5">
        {earthquakeState.earthquakes.map((feature) => (
          <ResultFeature key={feature.id} feature={feature}></ResultFeature>
        ))}
      </section>

      <section className="mt-5 mb-10 flex justify-center items-center gap-3">
        <button
          className="bg-emerald-50 text-emerald-400 shadow-sm py-2 px-5 rounded-full mt-7 hover:bg-emerald-100 ease-in transition-all duration-200 "
          onClick={() => updatePage(-1)}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <div className="bg-emerald-50 text-emerald-400 shadow-sm py-2 px-5 rounded-full mt-7 font-semibold">
          Página {earthquakeState.page} de{" "}
          {Math.ceil(earthquakeState.count / earthquakeState.perPage)}
        </div>
        <button
          className="bg-emerald-50 text-emerald-400 shadow-sm py-2 px-5 rounded-full mt-7 hover:bg-emerald-100 ease-in transition-all duration-200 "
          onClick={() => updatePage(1)}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </section>
    </>
  );
};
