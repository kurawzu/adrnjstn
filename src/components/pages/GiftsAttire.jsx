import React, { useEffect, useRef } from "react";
import "./GiftsAttire.css";
import bgPattern from "./mediapages/beige.png";
import giftsImg from "./mediapages/gifts.jpg";

const GiftsAttire = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
        } else {
          el.classList.remove("in-view");
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="gifts-attire">
      {/* TOP IMAGE */}
      <div className="ga-image">
        <img src={giftsImg} alt="couple" />
        <div className="overlay"></div>
      </div>

      {/* CONTENT */}
      <div className="ga-content">
        <img src={bgPattern} alt="" className="ga-bg" />

        <div className="ga-inner">
          {/* <div className="ga-divider top"></div> */}

          {/* GIFTS */}
          <h1 className="ga-title">Gifts</h1>
          <p className="ga-text">
            We are grateful for your presence and prayers. Should you desire to
            honor us with a gift, a monetary gift would be most appreciated.
          </p>

          {/* ATTIRE */}
          <h1 className="ga-title">Attire</h1>
          <p className="ga-text">
            Guests are kindly requested to wear any formal attire in which they
            feel comfortable, in beige tones to match the event motif.
          </p>

          {/* COLOR PALETTE */}
          <div className="color-palette">
            <span style={{ background: "#d6c6b5" }}></span>
            <span style={{ background: "#cbb8a2" }}></span>
            <span style={{ background: "#bda892" }}></span>
            <span style={{ background: "#a58f78" }}></span>
          </div>

          {/* <div className="ga-divider bottom"></div> */}
        </div>
      </div>
    </section>
  );
};

export default GiftsAttire;
