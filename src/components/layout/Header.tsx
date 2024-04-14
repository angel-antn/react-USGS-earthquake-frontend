import frogmiLogo from "../../assets/logo-frogmi.png";
import { HeaderPopover } from "./HeaderPopover";

export const Header = () => {
  return (
    <>
      <div className="p-3 md:p-7 w-full bg-white flex justify-between items-center shadow-md">
        <img
          src={frogmiLogo}
          alt="frogmi logo"
          className="h-6 sm:h-10 w-auto"
        />
        <div className="flex gap-5 justify-center items-center">
          <h1 className="text-sm md:text-2xl uppercase font-black text-emerald-500 hidden sm:block">
            Earthquake<span className="text-black">Tracker</span>
          </h1>
          <HeaderPopover />
        </div>
      </div>
    </>
  );
};
