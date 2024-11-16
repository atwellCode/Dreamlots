import React from "react";
import Header from "../header/Header";
import HomeHeroSection from "./HomeHeroSection";
import HomeCard from "./HomeCard";
import HomeProperty from "./HomeProperty";
import HomeAddProperty from "./HomeAddProperty";
import HomePropertyBuy from "./HomePropertyBuy";
import HomePropertyRent from "./HomePropertyRent";
import HomeVirtualTour from "./HomeVirtualDemo";
import HomeFooter from "./HomeFooter";


function Homepage() {
  return (
    <>
    <Header/>
    <HomeHeroSection/>
    <HomeCard/>
    <HomeProperty/>
    <HomeAddProperty/>
    <HomePropertyBuy/>
    <HomePropertyRent/>
    <HomeVirtualTour/>
    <HomeFooter/>
    </>
  );
}
export default Homepage;
