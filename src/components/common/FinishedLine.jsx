import React from "react";

const FinishedLine = ({ completedLine }) => {
  return (
    <div style={{ display: "flex" }}>
      {completedLine.map((item, i) => (
        <div
          style={{
            width: 50,
            height: 25,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid",
            borderColor: "black",
          }}
          key={i}
        >
          {item.number}
        </div>
      ))}
    </div>
  );
};

export default FinishedLine;
