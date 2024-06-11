const style = props.style || {};
const props = props.props || {};
import React from "react";


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
    />
  );

