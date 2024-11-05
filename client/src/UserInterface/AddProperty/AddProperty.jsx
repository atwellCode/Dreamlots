import React from "react";
import Header from "../header/header";
import HomeFooter from "../Homepage/HomeFooter";
import AddPropertyForm from "./AddPropertyForm";

function AddProperty(){
    return(
        <>
        <Header/>
        <AddPropertyForm/>
        <HomeFooter/>
        </>
    );
}
export default AddProperty;