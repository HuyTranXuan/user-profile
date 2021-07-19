import React from "react";

const initialCircle = (item) => {
  return (
    <div
      className="mx-auto p-4 rounded-circle"
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#bbb",
        marginBottom: "1.2rem",
      }}
    >
      <h1 className="text-white align-middle ">
        {item.name[0]}
      </h1>
    </div>
  );
};

export default initialCircle;
