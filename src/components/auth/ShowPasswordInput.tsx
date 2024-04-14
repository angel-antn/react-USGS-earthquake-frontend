import { Switch } from "@headlessui/react";

interface ShowPasswordInputProps {
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShowPasswordInput = ({
  isPasswordVisible,
  setIsPasswordVisible,
}: ShowPasswordInputProps) => {
  return (
    <div className="flex gap-3 items-center ml-1 mt-2">
      <Switch
        checked={isPasswordVisible}
        onChange={setIsPasswordVisible}
        className={`${isPasswordVisible ? "bg-emerald-500" : "bg-gray-200"}
          relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${isPasswordVisible ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <p className="text-sm text-gray-400">Mostrar contraseña</p>
    </div>
  );
};
