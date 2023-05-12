import React from "react";
import "./bannerItem.css";

const BannerItem = ({ slider }) => {
  const { image, id, prev, next } = slider;
  console.log(slider);
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="slider-img">
        <img src={image} className="w-full rounded-2xl" />
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <h1 className="text-6xl font-bold text-white ms-24">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 text-white ms-24">
        <h6>
          There are many variations of passages of available, but <br /> the
          majority have suffered alteration in some form
        </h6>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 top-3/4 ms-24 mt-7">
        <button className="discover-btn">Discover More</button>
        <button className="latest-btn">Latest Project</button>
      </div>
      <div className="absolute flex  transform -translate-y-1/2  right-1 top-3/4 mt-28">
        <a href={`#slide${prev}`} className="btn btn-circle me-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle me-12">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
