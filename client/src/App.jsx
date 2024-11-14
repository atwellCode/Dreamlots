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
// Buyer Page Imports
import SellerHomepage from "./SellerInterface/SellerHomePage/SellerHomepage";
import MessageForm from "./SellerInterface/MessageForm/MessageForm";


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
          <Route path="/seller" element={<SellerHomepage />} />
          <Route path="/messageform" element={<MessageForm />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
