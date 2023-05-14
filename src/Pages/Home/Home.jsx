import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Service from "./Service/Service";
import Info from "./Info/Info";
import Products from "./Products/Products";
import Team from "./Team/Team";
import Features from "./Features/Features";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div style={{ width: "1140px", margin: "0 auto" }}>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Info></Info>
      <Products></Products>
      <Team></Team>
      <Features></Features>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
