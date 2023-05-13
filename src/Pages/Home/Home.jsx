import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Service from "./Service/Service";
import Info from "./Info/Info";

const Home = () => {
  return (
    <div style={{ width: "1140px", margin: "0 auto" }}>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Info></Info>
    </div>
  );
};

export default Home;
