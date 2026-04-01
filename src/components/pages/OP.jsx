import React from "react";
import "./OP.css";
import opsImg from "./mediapages/ops.jpg";

const OP = ({ onStart }) => {
  return (
    <div className="hero">
      <img src={opsImg} alt="wedding" className="hero-bg" />

      <div className="hero-overlay">
        <h2 className="hero-sub">You are Invited to the Wedding of</h2>

        <h1 className="hero-title">Adrean & Justinne</h1>

        <button className="hero-btn" onClick={onStart}>
          VIEW INVITATION
        </button>
      </div>
    </div>
  );
};

export default OP;
