import React from "react";
import button from "./button.js";
import initialCircle from "./initialCircle.jsx";
import cardInfo from "./cardInfo.jsx";

const cardThis = (item) => {
  return (
    <div
      className="card text-center border border-top-0 border-dark p-2"
      style={{
        width: "18rem",
        height: "20rem",
        backgroundColor: "#fff",
        borderRadius: "0.75rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.1)",
      }}
    >
      <div className="card-body">
        {initialCircle(item)}
        {cardInfo(item)}
        {button(item)}
      </div>
    </div>
  );
};

export default cardThis;
