import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Services = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    // Service Card.
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
            <Link to={`/services/${_id}`} style={{ color: "#FF3811" }}>
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
