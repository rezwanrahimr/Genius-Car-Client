import React from "react";
import calender from "../../../assets/images/info/001-timetable.png";
import call from "../../../assets/images/info/Group.png";
import locatation from "../../../assets/images/info/Group 35.png";
import "./info.css";

const Info = () => {
  return (
    <div className="flex shadow text-white info-container">
      <div className=" flex">
        <img src={calender} alt="" />
        <div>
          <p>We are open monday-friday</p>
          <p>7:00 am - 9:00 pm</p>
        </div>
      </div>

      <div className=" flex">
        <img src={call} alt="" />
        <div>
          <p>Have a question?</p>
          <p>+2546 251 2658</p>
        </div>
      </div>

      <div className=" flex">
        <img src={locatation} alt="" />
        <div>
          <p>Have a question?</p>
          <p>+2546 251 2658</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
