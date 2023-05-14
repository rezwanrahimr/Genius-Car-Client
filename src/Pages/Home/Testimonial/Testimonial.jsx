import React from "react";
import TopHeader from "../../Sheard/TopHeader/TopHeader";
import test1 from "../../../assets/images/banner/1.jpg";
import test2 from "../../../assets/images/banner/2.jpg";

const Testimonial = () => {
  return (
    <div>
      <div className="text-center">
        <TopHeader>
          {{
            firstName: "Testimonial",
            secondName: "What Customer Says",
            thadName: `the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
          }}
        </TopHeader>
      </div>
      <div></div>
    </div>
  );
};

export default Testimonial;
