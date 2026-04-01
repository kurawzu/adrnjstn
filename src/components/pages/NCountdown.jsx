import React, { useEffect, useState } from "react";
import "./OP.css";
import "./NCountdown.css";

import stairsCouple from "./mediapages/thewed.jpg"; // bottom image

const NCountdown = ({ onStart }) => {
  const targetDate = new Date("2026-05-02T00:00:00+08:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="nncountdown">
      {/* BOTTOM 70% */}
      <div className="bottom-section">
        <img src={stairsCouple} alt="" className="bottom-img" />
        <div className="">
          <div className="place2">
            <h3 className="count-label">Countdown</h3>

            <div className="countdown-row">
              <div>
                <h2>{timeLeft.days}</h2>
                <span>Days</span>
              </div>
              <div>
                <h2>{timeLeft.hours}</h2>
                <span>Hours</span>
              </div>
              <div>
                <h2>{timeLeft.minutes}</h2>
                <span>Minutes</span>
              </div>
              <div>
                <h2>{timeLeft.seconds}</h2>
                <span>Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NCountdown;
