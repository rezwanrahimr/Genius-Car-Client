import React from "react";
import TopHeader from "../../Sheard/TopHeader/TopHeader";

const Service = () => {
  return (
    <div>
      <div className="text-center ">
        <TopHeader>
          {{
            firstName: "Service",
            secondName: "Our Service Area",
            thadName: `the majority have suffered alteration in some form, by injected
          humour, or randomised  words which don't look even slightly
          believable.`,
          }}
        </TopHeader>
      </div>
    </div>
  );
};

export default Service;
