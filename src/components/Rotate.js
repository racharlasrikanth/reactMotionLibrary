import React from "react";
import logo from "./logo.svg";
import { useState } from "react";
import { Motion, spring } from "react-motion";

const Rotate = (props) => {
  const [rotateStatus, setRotateStatus] = useState(false);
  const rotateLogo = () => {
    setRotateStatus(!rotateStatus);
  };

  return (
    <div style={{ ...props.style, marginTop: "5rem" }}>
      <Motion
        defaultStyle={{ x: 0 }}
        style={{
          x: spring(rotateStatus ? 36000000000000 : 0),
        }}
      >
        {(style) => (
          <img
            src={logo}
            alt="Misssing"
            width="200px"
            style={{
              display: "block",
              transform: `rotate(${style.x}deg)`,
            }}
          />
        )}
      </Motion>
      <button
        style={{ display: "block", marginLeft: "4rem" }}
        onClick={rotateLogo}
      >
        Rotate Logo
      </button>
    </div>
  );
};

export default Rotate;
