import React from "react";
import Wave from "react-wavify";

const LeftWave = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          transform: "rotate(90deg)",
          height: "100%",
          width: "100%",
          left: -1050,
          top: 0,
          zIndex: 3,
        }}
      >
        <Wave
          fill="#0f1317fa"
          paused={false}
          options={{ amplitude: 40, speed: 0.13, points: 6 }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          transform: "rotate(90deg)",
          height: "100%",
          width: "100%",
          left: -1050,
          top: 0,
          zIndex: 3,
        }}
      >
        <Wave
          fill="#3c4452"
          paused={false}
          options={{ amplitude: 50, speed: 0.18, points: 7 }}
        />
      </div>
    </>
  );
};

export default LeftWave;
