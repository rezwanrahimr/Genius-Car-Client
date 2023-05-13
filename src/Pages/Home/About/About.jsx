import React from "react";
import aboutImg from "../../../assets/images/about_us/Group 19.png";
import TopHeader from "../../Sheard/TopHeader/TopHeader";

const About = () => {
  return (
    <div className="flex justify-center my-28">
      <div>
        <img src={aboutImg} alt="Technician" />
      </div>
      <div className="ms-16 ">
        <p className="text-xl font-bold" style={{ color: "#FF3811" }}>
          About Us
        </p>
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "54.46px",
            margin: "20px 0 30px 0",
          }}
        >
          We are qualified <br /> & of experience <br /> in this field
        </h2>
        <p className="text-base font-normal mb-5">
          There are many variations of passages of Lorem Ipsum <br /> available,
          but the majority have suffered alteration in some <br /> form, by
          injected humour, or randomised words which don't <br /> look even
          slightly believable.{" "}
        </p>

        <p>
          the majority have suffered alteration in some form, by injected <br />
          humour, or randomised words which don't look even slightly <br />{" "}
          believable.{" "}
        </p>
        <button
          style={{
            width: "170px",
            height: "56px",
            backgroundColor: "#FF3811",
            color: "white",
            border: "none",
            marginTop: "30px",
          }}
        >
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
