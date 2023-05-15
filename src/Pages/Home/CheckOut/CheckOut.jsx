import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import img from "../../../assets/images/checkout/checkout.png";
import "./checkout.css";
import { authContext } from "../../../Context/UseContext";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(authContext);

  const handleFormControl = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value} `;
    const phone = form.phone.value;
    const email = form.email.value || "unregister";
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    if (phone.length < 11) {
      Swal.fire({
        icon: "error",
        title: "Oops.. Please Enter Valid Phone Number !",
        text: "Something went wrong!",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire("Success!", "You clicked the button!", "success");
            form.reset();
          }
        });
    }
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
            required
            placeholder="First Name"
            className="input input-bordered "
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            className="input input-bordered "
          />
          <input
            type="text"
            name="phone"
            required
            placeholder="Your Phone"
            className="input input-bordered "
          />
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            readOnly
            placeholder="Your Email"
            className="input input-bordered "
          />
        </div>
        <div>
          <textarea
            className="textarea"
            name="message"
            required
            placeholder="Your Message"
          ></textarea>
          <br />

          <input className="submit-btn" type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
