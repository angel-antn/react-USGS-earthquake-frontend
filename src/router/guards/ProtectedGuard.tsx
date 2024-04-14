import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

interface ProptectedGuardProps {
  children: React.ReactNode;
}

export const ProtectedGuard = ({ children }: ProptectedGuardProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const host = import.meta.env.VITE_HOST;
    const userResponse = localStorage.getItem("user");
    if (!userResponse) {
      setIsLoading(false);
      return;
    }
    const user = JSON.parse(userResponse);
    if (!user.token) {
      setIsLoading(false);
      return;
    }

    axios
      .get(`${host}/users/me`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then(() => {
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="min-h-screen bg-white "></div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
