import { Tab } from "@headlessui/react";
import { AllComments } from "./AllComments";
import { YourComments } from "./YourComments";

export const CommentTabs = () => {
  return (
    <div className="w-full max-w-md px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-500/20 p-1">
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ${
                selected
                  ? "bg-white text-emerald-500 shadow"
                  : "bg-white/[0.12] text-white"
              }`
            }
          >
            Todos
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ${
                selected
                  ? "bg-white text-emerald-500 shadow"
                  : "bg-white/[0.12] text-white"
              }`
            }
          >
            Tus comentarios
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <AllComments />
          </Tab.Panel>
          <Tab.Panel>
            <YourComments />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
