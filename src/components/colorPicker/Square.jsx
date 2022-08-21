import React from "react";

function Square({ colorValue }) {
  return (
    <section
      className="sqaure"
      style={{
        backgroundColor: colorValue,
        width: "10rem",
        height: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        marginBottom: "30px",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
    </section>
  );
}

export default Square;
