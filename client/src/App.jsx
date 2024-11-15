import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// User Interface Imports
import Homepage from "./UserInterface/Homepage/Homepage";
import Services from "./UserInterface/Service/Services";
import ContactUs from "./UserInterface/ContactUs/ContactUs";
import AddProperty from "./UserInterface/AddProperty/AddProperty";
// Seller Page Imports
import SellerHomePage from "./SellerInterface/SellerHomePage/SellerHomepage";
import SellerProperty from "./SellerInterface/SellerProperty/SellerProperty";
import SellerAddProperty from "./SellerInterface/SellerAddProperty/SellerAddProperty";
import SellerChat from "./SellerInterface/SellerChat/SellerChat";
import SellerVirtualTour from "./SellerInterface/SellerVirtuaTour/SellerVirtualTour";
import SellerLogout from "./SellerInterface/SellerAuth/SellerLogout";



function App() {
  return (
    <>
     
        <BrowserRouter>
          <Routes>
            {/* User Interface */}
          <Route path="/" element={<Homepage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/AddProperty" element={<AddProperty />} />

          {/* Buyer Interface */}
          <Route path="/seller" element={<SellerHomePage />} />
          <Route path="/seller-property" element={<SellerProperty />} />
          <Route path="/seller-add-property" element={<SellerAddProperty />} />
          <Route path="/Seller-Chat" element={<SellerChat />} />
          <Route path="/seller-virtual-tour" element={<SellerVirtualTour />} />
          <Route path="/seller-logout" element={<SellerLogout />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}
 
export default App;
