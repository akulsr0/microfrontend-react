import React from "react";

const AppDetail = ({ color, title, link }) => {
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
      <a href={link} target="_blank" style={{ marginLeft: 10 }}>
        Link
      </a>
    </div>
  );
};

export default AppDetail;
