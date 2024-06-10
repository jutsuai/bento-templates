import { useNode } from "@craftjs/core";
import React from "react";

export default function Blank({ props, style, id }) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
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
