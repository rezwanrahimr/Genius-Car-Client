import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Service from "./Service/Service";

const Home = () => {
  return (
    <div style={{ width: "1140px", margin: "0 auto" }}>
      <Banner></Banner>
      <About></About>
      <Service></Service>
    </div>
  );
};

export default Home;
