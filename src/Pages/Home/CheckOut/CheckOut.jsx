import React from "react";
import { useLoaderData } from "react-router-dom";
import img from "../../../assets/images/checkout/checkout.png";
import "./checkout.css";

const CheckOut = () => {
  const { title } = useLoaderData();

  return (
    <div>
      <div className="p-16">
        <img src={img} alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
          <h1 className="text-white ms-28 font-bold">Check Out</h1>
        </div>
      </div>
      <div className="form-container">
        <div className="grid grid-cols-2  px-24">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered "
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered "
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="input input-bordered "
          />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered "
          />
        </div>
        <textarea className="textarea" placeholder="Your Message"></textarea>
        <br />

        <input className="submit-btn" type="submit" value="submit" />
      </div>
    </div>
  );
};

export default CheckOut;
