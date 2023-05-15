import React from "react";
import img from "../../../assets/images/checkout/checkout.png";

const NewService = () => {
  const handleFormControl = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const text = form.text.value;
    const serviceType = form.serviceType.value;
    const description = form.description.value;

    const service = {
      name,
      price,
      text,
      serviceType,
      description,
    };

    console.log(service);
    form.reset();
  };

  return (
    <div>
      <div className="p-16">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
          <h1 className="text-white ms-28 font-bold">Add New Service</h1>
        </div>
      </div>
      <form className="form-container" onSubmit={handleFormControl}>
        <div className="grid grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Service Name"
            className="input input-bordered "
          />
          <input
            type="text"
            name="price"
            placeholder="Service Price"
            className="input input-bordered "
          />
          <input
            type="text"
            name="text"
            placeholder="Text here"
            className="input input-bordered "
          />
          <input
            type="text"
            name="serviceType"
            placeholder="Service Type"
            className="input input-bordered "
          />
        </div>
        <div>
          <textarea
            className="textarea"
            name="description"
            placeholder="Product Description"
          ></textarea>
          <br />

          <input className="submit-btn" type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default NewService;
