import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// User Interface Imports
import Homepage from "./UserInterface/Homepage/Homepage";
import RentProperty from "./UserInterface/Property/RentProperty";
import BuyProperty from "./UserInterface/Property/BuyProperty";
import Services from "./UserInterface/Service/Services";
import ContactUs from "./UserInterface/ContactUs/ContactUs";
import AddProperty from "./UserInterface/AddProperty/AddProperty";
// Seller Page Imports
import SellerHomePage from "./SellerInterface/SellerHomePage/SellerHomepage";
import SellerProperty from "./SellerInterface/SellerProperty/SellerProperty";
import SellerAddProperty from "./SellerInterface/SellerAddProperty/SellerAddProperty";
import SellerChat from "./SellerInterface/SellerChat/SellerChat";
import SellerVirtualTour from "./SellerInterface/SellerVirtuaTour/SellerVirtualTour";
import SellerSignUp from "./SellerInterface/SellerAuth/SellerSignUp";
import SellerLogin from "./SellerInterface/SellerAuth/SellerLogin";
import SellerLogout from "./SellerInterface/SellerAuth/SellerLogout";
import SellerForgetPassword from "./SellerInterface/SellerAuth/SellerForgetPassword";
// Admin Interface Imports
import AdminLogin from "./AdminInterface/AdminHomePage/AdminLogin";
import AdminHomepage from "./AdminInterface/AdminHomePage/AdminHomepage";
import AdminAnalytics from "./AdminInterface/AdminHomePage/AdminAnalytics";
import AdminCustomer from "./AdminInterface/AdminHomePage/AdminCustomer";
import AdminMessages from "./AdminInterface/AdminHomePage/AdminMessages";
import AdminPropertyPage from "./AdminInterface/AdminHomePage/AdminPropertyPage";
import AdminLogout from "./AdminInterface/AdminHomePage/AdminLogout";
import AdminSetting from "./AdminInterface/AdminHomePage/AdminSetting";
// Compornts Import
import AdminProtectionRoutes from "./Components/AdminProtectionRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* User Interface */}
          <Route path="/" element={<Homepage />} />
          <Route path="/rent-property" element={<RentProperty />} />
          <Route path="/buy-property" element={<BuyProperty />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/AddProperty" element={<AddProperty />} />

          {/* Buyer Interface */}
          <Route path="/seller" element={<SellerHomePage />} />
          <Route path="/seller-property" element={<SellerProperty />} />
          <Route path="/seller-add-property" element={<SellerAddProperty />} />
          <Route path="/Seller-Chat" element={<SellerChat />} />
          <Route path="/seller-virtual-tour" element={<SellerVirtualTour />} />
          <Route path="/seller-signup" element={<SellerSignUp />} />
          <Route path="/seller-login" element={<SellerLogin />} />
          <Route path="/seller-logout" element={<SellerLogout />} />
          <Route path="/seller-forget-signup" element={<SellerForgetPassword />} />
          {/* Admin Interface */}
          <Route path="/admin-login" element={<AdminLogin />} />
          {/* <Route path="/admin-home" element={<AdminHomepage />} /> */}
          <Route path="/admin-home" element={<AdminProtectionRoutes><AdminHomepage /></AdminProtectionRoutes>}/>
          <Route path="/admin-analytics" element={<AdminProtectionRoutes><AdminAnalytics /></AdminProtectionRoutes>} />
          <Route path="/admin-customer" element={<AdminProtectionRoutes><AdminCustomer /></AdminProtectionRoutes>} />
          <Route path="/admin-messages" element={<AdminProtectionRoutes><AdminMessages /></AdminProtectionRoutes>} />
          <Route path="/admin-property" element={<AdminProtectionRoutes><AdminPropertyPage /></AdminProtectionRoutes>} />
          <Route path="/admin-setting" element={<AdminProtectionRoutes><AdminSetting /></AdminProtectionRoutes>} />
          <Route path="/admin-logout" element={<AdminLogout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
