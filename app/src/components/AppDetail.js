import React from "react";

const AppDetail = ({ color, title }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div
        style={{
          backgroundColor: color,
          width: 30,
          height: 30,
          marginRight: 10,
        }}
      />
      {title}
    </div>
  );
};

export default AppDetail;
