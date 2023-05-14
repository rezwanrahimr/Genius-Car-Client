import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const { title } = useLoaderData();
  console.log(title);
  return (
    <div>
      <h1>This is CheckOUt</h1>
    </div>
  );
};

export default CheckOut;
