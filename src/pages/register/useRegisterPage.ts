import axios from "axios";
import { useState } from "react";
import { UserResponse } from "../../models/userResponse";
import { useNavigate } from "react-router-dom";

export const useRegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmedPasswordVisible, setIsConfirmedPasswordVisible] =
    useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const host = import.meta.env.VITE_HOST;

  const navigate = useNavigate();

  const toLoginPage = () => {
    navigate("/login");
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    const pattern: string =
      '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
    const regExp: RegExp = new RegExp(pattern);

    if (
      email.trim() == "" ||
      password.trim() == "" ||
      name.trim() == "" ||
      lastname.trim() == "" ||
      confirmedPassword == ""
    ) {
      setError("Hay campos obligatorios sin rellenar");
      return;
    } else if (!regExp.test(email)) {
      setError("Email no válido");
      return;
    } else if (password.length < 6) {
      setError("La contraseña debe tener min. 6 carácteres");
      return;
    } else if (password !== confirmedPassword) {
      setError("Las contraseñas no coinciden");
      return;
    } else {
      setError("");
    }

    setLoading(true);

    axios
      .post(`${host}/users/register`, {
        email,
        password,
        name,
        lastname,
      })
      .then((res) => {
        const userResponse: UserResponse = res.data as UserResponse;
        localStorage.setItem("user", JSON.stringify(userResponse));
        navigate("/");
      })
      .catch(() => {
        setError("Usuario previamente registrado");
      });

    setLoading(false);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmedPassword,
    setConfirmedPassword,
    isPasswordVisible,
    setIsPasswordVisible,
    setIsConfirmedPasswordVisible,
    isConfirmedPasswordVisible,
    error,
    setError,
    submitForm,
    loading,
    setLoading,
    toLoginPage,
    name,
    setName,
    setLastname,
    lastname,
  };
};
