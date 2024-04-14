import { FormInput } from "../../components/auth/FormInput";
import { ShowPasswordInput } from "../../components/auth/ShowPasswordInput";
import { useRegisterPage } from "./useRegisterPage";
import loadingDots from "../../assets/three-dots.svg";
import frogmiLogo from "../../assets/logo-frogmi.png";

export const RegisterPage = () => {
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
    confirmedPassword,
    isConfirmedPasswordVisible,
    lastname,
    name,
    setConfirmedPassword,
    setIsConfirmedPasswordVisible,
    setName,
    setLastname,
    toLoginPage,
  } = useRegisterPage();

  return (
    <div className="min-h-screen flex-1 flex-grow bg-gradient-to-br from-green-500 to-emerald-500 flex justify-center items-center py-10">
      <div className="bg-white rounded-lg ring-1 ring-emerald-300 shadow-lg px-5 py-10 w-4/5 lg:w-3/5 max-w-[700px]">
        <img
          src={frogmiLogo}
          alt="frogmi logo"
          className="h-12 w-auto mx-auto"
        />
        <h1 className="text-xl mt-5 font-bold text-center">¡Bienvenido!</h1>
        <h2 className="text-gray-700 text-lg text-center">
          <span className="text-emerald-500">Registrate</span> para continuar
        </h2>
        {error && (
          <div className="w-full bg-red-400 text-white uppercase text-center mt-3 text-sm rounded-lg p-1 font-bold">
            {error}
          </div>
        )}
        <form
          className="md:grid md:grid-cols-2 md:gap-x-5"
          onSubmit={(e) => submitForm(e)}
        >
          <FormInput
            value={email}
            onChange={setEmail}
            label="Correo electrónico"
            placeHolder="Ingresa tu correo electrónico"
            visible
            colSpan={2}
          />
          <FormInput
            value={name}
            onChange={setName}
            label="Nombre"
            placeHolder="Ingresa tu nombre"
            visible
          />

          <FormInput
            value={lastname}
            onChange={setLastname}
            label="Apellido"
            placeHolder="Ingresa tu apellido"
            visible
          />

          <div>
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
          </div>

          <div>
            <FormInput
              value={confirmedPassword}
              onChange={setConfirmedPassword}
              label="Confirma tu contraseña"
              placeHolder="Repite tu contraseña"
              visible={isConfirmedPasswordVisible}
            />
            <ShowPasswordInput
              isPasswordVisible={isConfirmedPasswordVisible}
              setIsPasswordVisible={setIsConfirmedPasswordVisible}
            />
          </div>

          {!loading ? (
            <input
              type="submit"
              className="w-full bg-emerald-400 p-3 text-white font-extrabold mt-10 rounded-full cursor-pointer md:col-span-2"
              value="Registrarse"
            />
          ) : (
            <div className="w-full bg-emerald-400 p-4 text-white font-extrabold mt-10 rounded-full cursor-pointer md:col-span-2">
              <img
                className="h-4 w-auto m-auto"
                src={loadingDots}
                alt="loader"
              />
            </div>
          )}
        </form>
        <button className="w-full mt-5" onClick={toLoginPage}>
          <p className="text-center text-gray-600">
            ¿Ya tienes cuenta?{" "}
            <span className="text-emerald-500">Inicia sesión aquí</span>
          </p>
        </button>
      </div>
    </div>
  );
};
