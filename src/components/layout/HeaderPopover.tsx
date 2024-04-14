import { Popover, Transition } from "@headlessui/react";
import {
  XCircleIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { UserResponse } from "../../models/userResponse";

export const HeaderPopover = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const getName = () => {
    const userSaved = localStorage.getItem("user");
    if (!userSaved) return "";
    const user = JSON.parse(userSaved) as UserResponse;
    if (!user) return "";
    return `${user.user.name} ${user.user.lastname}`;
  };

  return (
    <Popover className="relative">
      <Popover.Button className="focus:outline-none flex justify-center items-center">
        <Bars3Icon className="w-6 h-6" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 mt-3 w-60 md:w-80 right-0">
          <div className="relative overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 bg-white py-5 px-7">
            <div className="grid justify-center items-center">
              <div className="flex justify-center items-center">
                <div className="bg-orange-100 p-5 rounded-full">
                  <UserCircleIcon className="text-orange-400 w-16 h-16" />
                </div>
              </div>

              <p className="text-sm md:text-lg text-center font-medium text-gray-900 mt-3">
                Bienvenido {getName()}
              </p>
              <p className="text-sm text-center text-gray-500 mt-3">
                Accede a las funciones y servicios disponibles para ti
              </p>
              <div>
                <hr className="my-5 " />
              </div>

              <button
                onClick={logout}
                className="flex gap-5 items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-red-50 focus:outline-none"
              >
                <div className="p-1 bg-red-100 rounded-lg">
                  <XCircleIcon className="text-red-400 h-10 w-10" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">
                    Cerrar Sesión
                  </p>
                  <p className="text-sm text-gray-500 text-left">
                    terminarás tu sesión actual
                  </p>
                </div>
              </button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
