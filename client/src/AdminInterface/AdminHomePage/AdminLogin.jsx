import * as React from "react";
import { useState } from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../AdminHeader/AdminHeader";

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "admin123";

const providers = [{ id: "credentials", name: "Email and Password" }];

export default function AdminLogin() {
  const [error, setError] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const signIn = async (provider, formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      alert("Admin login successfully");
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin-home");
    } else {
      setError(true);
      alert("Wrong email or password");
    }
  };

  return (
    <>
      <AdminHeader />
      <AppProvider theme={theme}>
        <SignInPage
          signIn={signIn}
          providers={providers}
          error={error}
          sx={{
            "& .MuiTextField-root": {
              borderColor: error ? "red" : "inherit",
            },
          }}
        />
      </AppProvider>
    </>
  );
}
