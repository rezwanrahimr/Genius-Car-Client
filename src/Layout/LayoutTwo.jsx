import React from "react";
import Header from "../Pages/Sheard/Header/Header";
import { Outlet } from "react-router-dom";

const LayoutTwo = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default LayoutTwo;
