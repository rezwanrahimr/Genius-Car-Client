import React from "react";
import Header from "../Pages/Sheard/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
