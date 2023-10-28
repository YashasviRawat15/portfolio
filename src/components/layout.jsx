import React from "react";
import Header from "./header";
import Home from "../pages/home";
import Footer from "./footer";
import {Outlet} from "react-router-dom"
import About from "../pages/about";
import Education from "../pages/education";
import Experience from "../pages/experience";
function Layout(){
    return (<> <Header/>
    <Home />
    <About />
    <Education/>
    <Experience/>
    <Footer/>
    </>)
}
export default Layout;

