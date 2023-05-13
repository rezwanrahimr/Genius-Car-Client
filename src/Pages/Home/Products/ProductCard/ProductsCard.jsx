import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ImStarHalf } from "react-icons/im";
import "./productsCard.css";

const ProductsCard = ({ product }) => {
  const { _id, title, img, price } = product;

  return (
    <div>
      <div
        className="card  bg-base-100 p-6 shadow-xl mt-16"
        style={{ width: "364px", height: "389px" }}
      >
        <figure className="">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
            style={{ backgroundColor: "#F3F3F3" }}
          />
        </figure>
        <div className="card-body items-center text-center">
          <p className="flex">
            <AiFillStar className="star-icon "></AiFillStar>
            <AiFillStar className="star-icon "></AiFillStar>
            <AiFillStar className="star-icon "></AiFillStar>
            <AiFillStar className="star-icon "></AiFillStar>
            <ImStarHalf className="star-icon "></ImStarHalf>
          </p>
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="font-semibold" style={{ color: "#FF3811" }}>
            ${price}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
