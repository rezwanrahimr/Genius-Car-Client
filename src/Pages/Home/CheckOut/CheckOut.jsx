import React from "react";
import { useLoaderData } from "react-router-dom";
import img from "../../../assets/images/checkout/checkout.png";
import "./checkout.css";

const CheckOut = () => {
  const { title } = useLoaderData();

  const handleFormControl = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(firstName, lastName, phone, email, message);
  };

  return (
    <div>
      <div className="p-16">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
          <h1 className="text-white ms-28 font-bold">Check Out</h1>
        </div>
      </div>
      <form className="form-container" onSubmit={handleFormControl}>
        <div className="grid grid-cols-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered "
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered "
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input input-bordered "
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="input input-bordered "
          />
        </div>
        <div>
          <textarea
            className="textarea"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <br />

          <input className="submit-btn" type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
