import React from "react";
import Wave from "react-wavify";

const RightWave = () => {
  return (
    <>
      <Wave
        style={{
          position: "fixed",
          transform: "rotate(-90deg)",
          height: "100%",
          width: "100%",
          left: 1050,
          top: 0,
          zIndex: 3,
        }}
        fill="#0f1317fa"
        paused={false}
        options={{ amplitude: 40, speed: 0.13, points: 6 }}
      />
    </>
  );
};

export default RightWave;
