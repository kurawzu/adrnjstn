import React from "react";
import "./FirstDivider.css";
import bgPattern from "./mediapages/beige.png";

const FirstDivider = () => {
  return (
    <div className="first-divider">
      <img src={bgPattern} alt="pattern" className="divider-bg" />

      <div className="divider-overlay">
        <h1 className="divider-main">
          and the <span className="gold">Two</span> shall become{" "}
          <span className="gold">One.</span>
        </h1>
        <h2 className="divider-sub">EPHESIANS 5:31</h2>
      </div>
    </div>
  );
};

export default FirstDivider;
