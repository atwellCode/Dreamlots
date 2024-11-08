import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./UserInterface/Homepage/Homepage";
import Services from "./UserInterface/Service/Services";
import ContactUs from "./UserInterface/ContactUs/ContactUs";
import AddProperty from "./UserInterface/AddProperty/AddProperty";


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

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
