import React, { useEffect, useState } from "react";
import Services from "./Services";
import TopHeader from "../../Sheard/TopHeader/TopHeader";

const Service = () => {
  // Declare state and set service data on the sate.
  const [service, setService] = useState([]);

  //   Load Service Data.
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

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

        {/* Service Card Component */}
        <div className="grid grid-cols-3 gap-6">
          {service?.map((element) => (
            <Services key={element._id} service={element}></Services>
          ))}
        </div>

        {/* More Service Button */}
        <button
          style={{
            width: "170px",
            height: "56px",
            color: "#FF3811",
            background: "none",
            border: "1px solid #FF3811",
            margin: "50px 0",
          }}
        >
          More Services
        </button>
      </div>
    </div>
  );
};

export default Service;
