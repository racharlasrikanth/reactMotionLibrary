import React from "react";
import { useState } from "react";

const FirstAnimation = (props) => {
  const [animation, setAnimation] = useState(false);

  const startAnimation = () => {
    setAnimation(!animation);
  };

  return (
    <div style={props.style}>
      <h1>First Animation using React Motion</h1>
      <button onClick={startAnimation}>Start/Stop Animation</button>
    </div>
  );
};

export default FirstAnimation;
