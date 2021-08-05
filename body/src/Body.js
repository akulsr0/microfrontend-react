import React from "react";

const Body = ({ name, num1, num2 }) => {
  const total = Number(num1) + Number(num2);

  return (
    <div style={{ backgroundColor: "#e8f5ff" }}>
      {name && <p>Welcome, {name}</p>}
      <p>This is the body.</p>
      {!isNaN(total) && (
        <>
          <strong>Total: </strong> {total}
        </>
      )}
    </div>
  );
};

export default Body;
