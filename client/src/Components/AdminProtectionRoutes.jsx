import React from "react";
import { Navigate } from "react-router-dom";

function AdminProtectionRoutes({ children }) {
  const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

  if (!isLoggedIn) {
    // If not logged in, redirect to login page
    return <Navigate to="/admin-login" />;
  }

  return children;
}

export default AdminProtectionRoutes;
