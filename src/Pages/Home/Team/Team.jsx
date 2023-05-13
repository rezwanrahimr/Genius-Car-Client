import React from "react";
import TopHeader from "../../Sheard/TopHeader/TopHeader";
import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Team = () => {
  return (
    <div className="text-center">
      <div>
        <TopHeader>
          {{
            firstName: "Team",
            secondName: "Meet Our Team",
            thadName: `the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
          }}
        </TopHeader>
      </div>
      <div className="grid grid-cols-3 gap-6 my-12">
        <div className="card  p-6 bg-base-100 shadow-xl">
          <figure className="">
            <img src={team1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
            <p className="font-semibold">Engine Expert</p>
            <div className="card-actions">
              <BsFacebook
                style={{
                  color: "#395185",
                  width: "39.67px",
                  height: "39.67px",
                }}
              ></BsFacebook>
              <BsTwitter
                style={{
                  color: "#95CBF4",
                  width: "39.67px",
                  height: "39.67px",
                }}
              ></BsTwitter>
              <BsLinkedin
                style={{
                  color: "#0A66C2",
                  width: "39.67px",
                  height: "39.67px",
                }}
              ></BsLinkedin>
              <BsInstagram
                style={{
                  color: "#F8C4D0",
                  width: "39.67px",
                  height: "39.67px",
                }}
              ></BsInstagram>
            </div>
          </div>
        </div>
        <div className="card  p-6 bg-base-100 shadow-xl">
          <figure className="">
            <img src={team2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
            <p className="font-semibold">Engine Expert</p>
            <div className="card-actions">
              <BsFacebook
                style={{
                  color: "#395185",
                  width: "39.67px",
                  height: "39.67px",
                }}
              ></BsFacebook>
              <BsTwitter
                style={{
                  color: "#95CBF4",
                  width: "39.67px",
                  height: "39.67px",
                }}
              ></BsTwitter>
              <BsLinkedin
                style={{
                  color: "#0A66C2",
                  width: "39.67px",
                  height: "39.67px",
                }}
              ></BsLinkedin>
              <BsInstagram
                style={{
                  color: "#F8C4D0",
                  width: "39.67px",
                  height: "39.67px",
                }}
              ></BsInstagram>
            </div>
          </div>
        </div>
        <div className="card  p-6 bg-base-100 shadow-xl">
          <figure className="">
            <img src={team3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
            <p className="font-semibold">Engine Expert</p>
            <div className="card-actions">
              <BsFacebook
                style={{
                  color: "#395185",
                  width: "39.67px",
                  height: "39.67px",
                }}
              ></BsFacebook>
              <BsTwitter
                style={{
                  color: "#95CBF4",
                  width: "39.67px",
                  height: "39.67px",
                }}
              ></BsTwitter>
              <BsLinkedin
                style={{
                  color: "#0A66C2",
                  width: "39.67px",
                  height: "39.67px",
                }}
              ></BsLinkedin>
              <BsInstagram
                style={{
                  color: "#F8C4D0",
                  width: "39.67px",
                  height: "39.67px",
                }}
              ></BsInstagram>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
