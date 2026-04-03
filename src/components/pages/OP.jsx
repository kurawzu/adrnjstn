import React from "react";
import "./OP.css";
import opsImg from "./mediapages/ops.jpg";

const OP = ({ onStart }) => {
  return (
    <div className="hero">
      <img src={opsImg} alt="wedding" className="hero-bg" />

      <div className="hero-overlay">
        <h2 className="hero-sub">YOU ARE INVITED!</h2>
        <h3 className="gg">to the wedding of</h3>
        <div className="rsvp-divider3"></div>

        <h1 className="hero-title">Adrean & Justinne</h1>

        <button className="hero-btn" onClick={onStart}>
          VIEW INVITATION
        </button>
      </div>
    </div>
  );
};

export default OP;
