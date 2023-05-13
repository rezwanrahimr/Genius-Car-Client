import React from "react";
import TopHeader from "../../Sheard/TopHeader/TopHeader";
import support from "../../../assets/icons/group.svg";
import team from "../../../assets/icons/Group 71.svg";
import timlyDelivery from "../../../assets/icons/Group 38729.svg";
import delivery from "../../../assets/icons/deliveryt.svg";
import best from "../../../assets/icons/Wrench.svg";
import check from "../../../assets/icons/check.svg";

import "./features.css";

const Features = () => {
  return (
    <div className="text-center ">
      <div>
        <TopHeader>
          {{
            firstName: "Core Features",
            secondName: "Why Choose Us",
            thadName: `the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
          }}
        </TopHeader>
      </div>
      <div className="choose-us grid grid-cols-6 gap-2 my-12">
        <div className="choose-Items">
          <img src={team} alt="" />
          <p className="font-semibold">Expert Team</p>
        </div>
        <div
          className="choose-Items"
          style={{ backgroundColor: "#FF3811", color: "white" }}
        >
          <img src={timlyDelivery} alt="" />
          <p className="font-semibold">Timely Delivery</p>
        </div>
        <div className="choose-Items">
          <img src={support} alt="" />
          <p className="font-semibold">24/7 Support</p>
        </div>
        <div className="choose-Items">
          <img src={best} alt="" />
          <p className="font-semibold">Best Equipment</p>
        </div>
        <div className="choose-Items">
          <img src={check} alt="" />
          <p className="font-semibold">100% Guaranty</p>
        </div>
        <div className="choose-Items">
          <img src={delivery} alt="" />
          <p className="font-semibold">Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
