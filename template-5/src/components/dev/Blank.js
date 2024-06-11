import React from "react";

export default function Blank({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <div
      id={id}
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        backgroundColor: "#ffffff",
        ...style,
      }}
      props={props}
    / ref={(ref) => connect(drag(ref))}>
  );
}
