import React from "react";
import img from "../../assets/images/orders/Rectangle 1548.png";

const Orders = () => {
  return (
    <div>
      <div className="p-16">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
          <h1 className="text-white ms-28 font-bold">Cart Details</h1>
        </div>
      </div>
    </div>
  );
};

export default Orders;
