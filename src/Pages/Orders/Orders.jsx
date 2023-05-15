import React, { useContext, useEffect } from "react";
import img from "../../assets/images/orders/Rectangle 1548.png";
import { useState } from "react";
import { authContext } from "../../Context/UseContext";
import OrdersRow from "./OrdersRow";
import Swal from "sweetalert2";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(authContext);

  const url = `http://localhost:5000/orders?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  //   Delete
  const handleDelete = (_id) => {
    const getItem = orders.filter((element) => element._id == _id);
    console.log(getItem);
    Swal.fire({
      title: "Are you sure?",
      text: `${getItem[0]?.serviceName}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log("result", result);
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        fetch(`http://localhost:5000/orders/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              const newOrder = orders.filter((ele) => ele._id !== _id);
              setOrders(newOrder);
            }
          });
      }
    });
  };

  return (
    <div style={{ width: "1140px", margin: "0 auto" }}>
      <div className="p-8">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
          <h1 className="text-white ms-28 font-bold">Manage All Orders</h1>
        </div>
      </div>
      <div className="my-12">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <tbody>
              {orders.map((order) => (
                <OrdersRow
                  key={order._id}
                  order={order}
                  handleDelete={handleDelete}
                ></OrdersRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
