import React, { useEffect, useState } from "react";

const OrdersRow = ({ order, handleDelete }) => {
  const [serviceItem, setServiceItem] = useState({});
  const { _id, service, serviceName, customer, email, phone, price, message } =
    order;

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setServiceItem(data));
  }, []);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-16 h-16">
              <img src={serviceItem.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Name: {customer}</div>
            <div className="text-sm opacity-50">Mobile: {phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">Price: {price}</span>
      </td>
      <td>{email}</td>
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default OrdersRow;
