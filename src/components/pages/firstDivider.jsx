import React, { useEffect, useRef } from "react";
import "./FirstDivider.css";
import bgPattern from "./mediapages/beige.png";

const FirstDivider = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
        } else {
          el.classList.remove("in-view");
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="first-divider">
      <img src={bgPattern} alt="pattern" className="divider-bg" />

      <div className="divider-overlay">
        <h1 className="divider-main">
          <span className="bruh"> and the </span>
          <span className="gold">Two </span>{" "}
          <span className="bruh"> shall become</span>{" "}
          <span className="gold">One.</span>
        </h1>
        <h2 className="divider-sub">
          <span className="bruh">Ephesians</span> 5:31
        </h2>
      </div>
    </div>
  );
};

export default FirstDivider;
