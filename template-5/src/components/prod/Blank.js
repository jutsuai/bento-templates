import React from "react";

export default function Blank({ props, style, id }) {
  return (
    <div
      id={id}
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        backgroundColor: "#eeeeee",
        ...style,
      }}
      props={props}
    >
      x
    </div>
  );
}
