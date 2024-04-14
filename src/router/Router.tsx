import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { LoginPage } from "../pages/login/LoginPage";
import { ProtectedGuard } from "./guards/ProtectedGuard";
import { RegisterPage } from "../pages/register/RegisterPage";
import { AuthGuard } from "./guards/AuthGuard";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedGuard>
              <DashboardPage />
            </ProtectedGuard>
          }
        />
        <Route
          path="/login"
          element={
            <AuthGuard>
              <LoginPage />
            </AuthGuard>
          }
        />
        <Route
          path="/register"
          element={
            <AuthGuard>
              <RegisterPage />
            </AuthGuard>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
