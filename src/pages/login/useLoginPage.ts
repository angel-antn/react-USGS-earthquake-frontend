import axios from "axios";
import { useState } from "react";
import { UserResponse } from "../../models/userResponse";
import { useNavigate } from "react-router-dom";

export const useLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const host = import.meta.env.VITE_HOST;

  const navigate = useNavigate();

  const toRegisterPage = () => {
    navigate("/register");
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    const pattern: string =
      '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
    const regExp: RegExp = new RegExp(pattern);

    if (email.trim() == "" || password.trim() == "") {
      setError("Hay campos obligatorios sin rellenar");
      return;
    } else if (!regExp.test(email)) {
      setError("Email no válido");
      return;
    } else if (password.length < 6) {
      setError("La contraseña debe tener min. 6 carácteres");
      return;
    } else {
      setError("");
    }

    setLoading(true);

    axios
      .post(`${host}/users/login`, {
        email,
        password,
      })
      .then((res) => {
        const userResponse: UserResponse = res.data as UserResponse;
        localStorage.setItem("user", JSON.stringify(userResponse));
        navigate("/");
      })
      .catch(() => {
        setError("Usuario o contraseña no válidos");
      });

    setLoading(false);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isPasswordVisible,
    setIsPasswordVisible,
    error,
    setError,
    submitForm,
    loading,
    setLoading,
    toRegisterPage,
  };
};
