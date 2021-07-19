import React from "react";

const cardInfo = (item) => {
  //Name      -h5-
  //UserName  -h6-
  //Website   -a-
  return (
    <div>
      <h5 className="card-title">{item.name}</h5>
      <h6
        className="card-subtitle m-2"
        style={{ color: "#aaa", fontSize: 15, marginBottom: "1.2rem" }}
      >
        @{item.username}
      </h6>
      <a
        className="card-link"
        style={{
          color: "#07afff",
          fontWeight: "bold",
          fontSize: 14,
        }}
        href="#"
      >
        http://{item.website}
      </a>
    </div>
  );
};

export default cardInfo;
