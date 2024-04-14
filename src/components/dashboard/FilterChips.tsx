import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { colorClasses, Colors } from "../../colors/colorClasses";
import { useMemo } from "react";
import { useEarthquake } from "../../hook/useEarthquake";
import { Transition } from "@headlessui/react";
import { getMagTypeColor } from "../../colors/getMagTypeColor";

interface FilterChipsProps {
  value: string;
}

export const FilterChips = ({ value }: FilterChipsProps) => {
  const tailwindColor: Colors = getMagTypeColor(value);

  const { earthquakeState, earthquakeDispatch } = useEarthquake();

  const isSelected = useMemo(
    () => earthquakeState.magTypes.includes(value),
    [earthquakeState.magTypes, value]
  );

  const clickHandler = () => {
    earthquakeDispatch({
      type: isSelected ? "remove-magtype-action" : "add-magtype-action",
      payload: {
        magType: value,
      },
    });
  };

  return (
    <button
      onClick={clickHandler}
      className={` transition-all ease-out duration-200 py-2 px-6 rounded-full font-bold uppercase text-xs flex gap-1 items-center justify-center shadow-sm hover:shadow-md border-2 ${
        colorClasses[tailwindColor].border
      } ${
        isSelected
          ? `${colorClasses[tailwindColor].background} text-white w-20`
          : `bg-white ${colorClasses[tailwindColor].text} w-16`
      }`}
    >
      <Transition
        show={isSelected}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-x-2"
        enterTo="opacity-200 translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-200 translate-x-0"
        leaveTo="opacity-0 -translate-x-2"
      >
        <CheckCircleIcon
          className={` h-4 w-4 font-black 
          ${
            isSelected ? ` text-white` : `${colorClasses[tailwindColor].text}`
          }`}
        />
      </Transition>

      <p className={`transition-all duration-200 uppercase`}>{value}</p>
    </button>
  );
};
