import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Services = ({ service }) => {
  const { id, title, img, price } = service;
  console.log(title);

  return (
    <div>
      <div
        className="card card-compact p-6 bg-base-100 shadow-xl "
        style={{ width: "364px", height: "348px" }}
      >
        <figure>
          <img src={img} alt="service" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <div className="flex justify-around " style={{ color: "#FF3811" }}>
            <p className="text-left text-xl font-semibold	">Price: {price}</p>
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
