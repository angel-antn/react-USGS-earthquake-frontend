import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { FilterChips } from "./FilterChips";

export const Filter = () => {
  return (
    <>
      <div className="mt-3 flex gap-2 items-center">
        <AdjustmentsHorizontalIcon className="text-gray-600 h-7 w-7" />
        <h2 className="text-2xl font-semibold text-gray-600">Filtros</h2>
      </div>

      <hr className="mt-3" />

      <div className="mt-3 flex flex-wrap gap-5">
        <FilterChips value="md" />
        <FilterChips value="ml" />
        <FilterChips value="ms" />
        <FilterChips value="mw" />
        <FilterChips value="me" />
        <FilterChips value="mi" />
        <FilterChips value="mb" />
        <FilterChips value="mlg" />
      </div>

      <hr className="mt-3" />
    </>
  );
};
