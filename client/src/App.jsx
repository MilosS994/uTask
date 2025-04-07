import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import useAuthStore from "./store/authStore.js";

const App = () => {
  const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);
  const isLoadingAuth = useAuthStore((state) => state.isLoading);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  if (isLoadingAuth) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Signin route */}
      <Route
        path="/signin"
        element={
          !isAuthenticated ? (
            <SigninPage />
          ) : (
            <Navigate to="/dashboard" replace />
          )
        }
      />
      {/* Signup route */}
      <Route
        path="/signup"
        element={
          !isAuthenticated ? (
            <SignupPage />
          ) : (
            <Navigate to="/dashboard" replace />
          )
        }
      />

      {/* Dashboard route */}
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <DashboardPage />
          ) : (
            <Navigate to="/signin" replace />
          )
        }
      />

      {/* 404 page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default App;
