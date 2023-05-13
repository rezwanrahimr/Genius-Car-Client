import React from "react";

const TopHeader = ({ children }) => {
  return (
    <div>
      <p className="text-xl font-bold" style={{ color: "#FF3811" }}>
        {children?.firstName}
      </p>
      <h2
        style={{
          fontSize: "45px",
          fontWeight: "700",
          lineHeight: "54.46px",
          margin: "20px 0 20px 0",
        }}
      >
        {children?.secondName}
      </h2>
      <p
        className="text-base font-normal mb-5"
        style={{ width: "715px", margin: "0  auto" }}
      >
        {children?.thadName}
      </p>
    </div>
  );
};

export default TopHeader;
