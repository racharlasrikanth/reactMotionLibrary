import React from "react";
import logo from "./logo.svg";
import "./AllSidesMove.css";
import { useState } from "react";
import { Motion, spring } from "react-motion";

const AllSidesMove = () => {
  const [leftStatus, setLeftStatus] = useState(true);
  const [rightStatus, setRightStatus] = useState(false);
  const [topStatus, setTopStatus] = useState(false);
  const [bottomStatus, setBottomStatus] = useState(false);
  const [rotateStatus, setRotateStatus] = useState(false);

  const leftMethod = () => {
    setLeftStatus(true);
    setRightStatus(false);
    setTopStatus(false);
    setBottomStatus(false);
    setRotateStatus(false);
  };
  const rightMethod = () => {
    setLeftStatus(false);
    setRightStatus(true);
    setTopStatus(false);
    setBottomStatus(false);
    setRotateStatus(true);
  };
  //   const topMethod = () => {
  //     setLeftStatus(false);
  //     setRightStatus(false);
  //     setTopStatus(true);
  //     setBottomStatus(false);
  //   };
  //   const bottomMethod = () => {
  //     setLeftStatus(false);
  //     setRightStatus(false);
  //     setTopStatus(false);
  //     setBottomStatus(true);
  //   };
  return (
    <div>
      <div className="mainPage">
        <button onClick={leftMethod}>Left</button>
        <button onClick={rightMethod}>Right</button>
        {/* <button onClick={topMethod}>Top</button> */}
        {/* <button onClick={bottomMethod}>Bottom</button> */}
        {/* <button onClick={rotateMethod}>Rotate</button> */}
        <Motion
          defaultStyle={{ x: 0, rotate: 0 }}
          style={{
            x: spring(leftStatus ? 0 : window.innerWidth - 220),
            rotate: spring(rotateStatus ? 720 : 0),
          }}
        >
          {(style) => (
            <img
              src={logo}
              alt="Missing"
              width="200px"
              style={{
                transform: `${leftStatus}`
                  ? `translateX(${style.x}px) rotate(${style.rotate}deg)`
                  : `translateX(${-style.x}px)`,
              }}
            />
          )}
        </Motion>
      </div>
    </div>
  );
};

export default AllSidesMove;
