import frogmiLogo from "../../assets/logo-frogmi.png";
import { FormInput } from "../../components/auth/FormInput";
import { useLoginPage } from "./useLoginPage";
import { ShowPasswordInput } from "../../components/auth/ShowPasswordInput";
import loadingDots from "../../assets/three-dots.svg";

export const LoginPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isPasswordVisible,
    setIsPasswordVisible,
    error,
    submitForm,
    loading,
    toRegisterPage,
  } = useLoginPage();

  return (
    <div className="min-h-screen flex-1 flex-grow bg-gradient-to-br from-green-500 to-emerald-500 flex justify-center items-center py-10">
      <div className="bg-white rounded-lg ring-1 ring-emerald-300 shadow-lg px-5 py-10 w-4/5 lg:w-3/5 max-w-[600px]">
        <img
          src={frogmiLogo}
          alt="frogmi logo"
          className="h-12 w-auto mx-auto"
        />
        <h1 className="text-xl mt-5 font-bold text-center">¡Bienvenido!</h1>
        <h2 className="text-gray-700 text-lg text-center">
          <span className="text-emerald-500">Inicia sesión</span> para continuar
        </h2>
        {error && (
          <div className="w-full bg-red-400 text-white uppercase text-center mt-3 text-sm rounded-lg p-1 font-bold">
            {error}
          </div>
        )}
        <form onSubmit={(e) => submitForm(e)}>
          <FormInput
            value={email}
            onChange={setEmail}
            label="Correo electrónico"
            placeHolder="Ingresa tu correo electrónico"
            visible
          />
          <FormInput
            value={password}
            onChange={setPassword}
            label="Contraseña"
            placeHolder="Ingresa tu contraseña"
            visible={isPasswordVisible}
          />
          <ShowPasswordInput
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
          />

          {!loading ? (
            <input
              type="submit"
              className="w-full bg-emerald-400 p-3 text-white font-extrabold mt-10 rounded-full cursor-pointer"
              value="Iniciar sesión"
            />
          ) : (
            <div className="w-full bg-emerald-400 p-4 text-white font-extrabold mt-10 rounded-full cursor-pointer">
              <img
                className="h-4 w-auto m-auto"
                src={loadingDots}
                alt="loader"
              />
            </div>
          )}
        </form>
        <button className="w-full mt-5" onClick={toRegisterPage}>
          <p className="text-center text-gray-600">
            ¿No tienes cuenta?{" "}
            <span className="text-emerald-500">Registrate aquí</span>
          </p>
        </button>
      </div>
    </div>
  );
};
