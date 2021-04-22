import React from "react";
import "./App.css";
import FirstAnimation from "./components/FirstAnimation";
import { Motion, spring } from "react-motion";
import Rotate from "./components/Rotate";
import AllSidesMove from "./components/AllSidesMove";

function App() {
  return (
    <div className="App">
      {/* <Motion
        defaultStyle={{ x: -10000, opacity: 0 }}
        style={{
          x: spring(0),
          opacity: spring(1),
        }}
      >
        {(style) => (
          <FirstAnimation
            style={{
              transform: `translateX(${style.x}px)`,
              opacity: style.opacity,
            }}
          />
        )}
      </Motion> */}
      {/* <Motion
        defaultStyle={{ x: -300 }}
        style={{
          x: spring(200),
        }}
      >
        {(style) => (
          <Rotate
            style={{
              transform: `translateX(${style.x}px)`,
            }}
          />
        )}
      </Motion> */}
      <AllSidesMove />
    </div>
  );
}

export default App;
