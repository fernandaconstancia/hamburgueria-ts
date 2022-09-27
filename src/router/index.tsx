import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../provider/auth";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { SignUpPage } from "../pages/signUp";

export const Router = () => {
  const { isSigned } = useAuth();
  return (
    <Routes>
      {isSigned ? (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/singup" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/singup" element={<SignUpPage />} />
        </>
      )}
    </Routes>
  );
};
