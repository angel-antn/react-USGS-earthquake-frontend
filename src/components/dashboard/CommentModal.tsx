import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useMemo } from "react";
import { useEarthquake } from "../../hook/useEarthquake";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CommentTabs } from "./CommentTabs";

export const CommentModal = () => {
  const { earthquakeDispatch, earthquakeState } = useEarthquake();

  const hideModal = () => {
    earthquakeDispatch({
      type: "select-feature-action",
      payload: { selectedFeature: undefined },
    });
  };

  const showModal = useMemo(() => {
    return earthquakeState.selectedFeature != undefined;
  }, [earthquakeState.selectedFeature]);

  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={hideModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex justify-between items-center mb-5"
                >
                  <h2 className="text-lg font-medium leading-6 text-gray-900">
                    Comentarios
                  </h2>
                  <button
                    onClick={hideModal}
                    className="bg-red-200 p-1 rounded-lg text-red-500"
                  >
                    <XMarkIcon className="h-4 w-4 " />
                  </button>
                </Dialog.Title>
                <CommentTabs />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
